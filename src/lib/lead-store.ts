import fs from 'fs';
import path from 'path';

export interface VisitorLead {
  id: string;
  name: string;
  designation: string;
  company: string;
  email: string;
  status: 'pending' | 'verified';
  createdAt: string;
  verifiedAt?: string;
  userAgent?: string;
  ip?: string;
}

// In-memory fallback for serverless environments (e.g. Vercel)
const memoryLeads: Map<string, VisitorLead> = new Map();

function getStorageFilePath(): string | null {
  // On Vercel / AWS Lambda, use /tmp which is writable
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join('/tmp', 'leads.json');
  }

  // Local development
  try {
    return path.join(process.cwd(), 'src', 'data', 'leads.json');
  } catch {
    return null;
  }
}

function ensureDirectoryExists(filePath: string) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (e) {
    // If directory creation fails, fall back to memory
  }
}

export function getAllLeads(): VisitorLead[] {
  const filePath = getStorageFilePath();
  if (filePath) {
    try {
      ensureDirectoryExists(filePath);
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        const parsed: VisitorLead[] = JSON.parse(data) || [];
        // Sync with memory
        parsed.forEach((l) => memoryLeads.set(l.email.toLowerCase(), l));
        return parsed;
      }
    } catch {
      // ignore and return memory fallback
    }
  }
  return Array.from(memoryLeads.values());
}

export function saveOrUpdateLead(leadData: Omit<VisitorLead, 'id' | 'createdAt'> & { id?: string }): VisitorLead {
  const now = new Date().toISOString();
  const cleanEmail = leadData.email.toLowerCase();

  let existing = memoryLeads.get(cleanEmail);
  const leads = getAllLeads();
  const existingInList = leads.find((l) => l.email.toLowerCase() === cleanEmail);
  if (existingInList) {
    existing = existingInList;
  }

  let resultLead: VisitorLead;

  if (existing) {
    resultLead = {
      ...existing,
      ...leadData,
      id: existing.id,
      createdAt: existing.createdAt,
      verifiedAt: leadData.status === 'verified' ? now : existing.verifiedAt,
    };
  } else {
    resultLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      createdAt: now,
      verifiedAt: leadData.status === 'verified' ? now : undefined,
      ...leadData,
    };
  }

  memoryLeads.set(cleanEmail, resultLead);

  // Safely attempt file persistence
  const filePath = getStorageFilePath();
  if (filePath) {
    try {
      ensureDirectoryExists(filePath);
      const all = Array.from(memoryLeads.values());
      fs.writeFileSync(filePath, JSON.stringify(all, null, 2), 'utf-8');
    } catch {
      // read-only filesystem or temporary error, memoryLeads holds the data
    }
  }

  return resultLead;
}

export function markLeadVerifiedByEmail(email: string): VisitorLead | null {
  const cleanEmail = email.toLowerCase();
  const lead = memoryLeads.get(cleanEmail) || getAllLeads().find((l) => l.email.toLowerCase() === cleanEmail);

  if (lead) {
    lead.status = 'verified';
    lead.verifiedAt = new Date().toISOString();
    memoryLeads.set(cleanEmail, lead);

    const filePath = getStorageFilePath();
    if (filePath) {
      try {
        ensureDirectoryExists(filePath);
        const all = Array.from(memoryLeads.values());
        fs.writeFileSync(filePath, JSON.stringify(all, null, 2), 'utf-8');
      } catch {
        // ignore
      }
    }
    return lead;
  }

  return null;
}
