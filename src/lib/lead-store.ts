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

const LEADS_FILE = path.join(process.cwd(), 'src', 'data', 'leads.json');

function ensureDirectoryExists() {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

export function getAllLeads(): VisitorLead[] {
  try {
    ensureDirectoryExists();
    const data = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(data) || [];
  } catch {
    return [];
  }
}

export function saveOrUpdateLead(leadData: Omit<VisitorLead, 'id' | 'createdAt'> & { id?: string }): VisitorLead {
  ensureDirectoryExists();
  const leads = getAllLeads();
  const existingIndex = leads.findIndex(
    (l) => l.email.toLowerCase() === leadData.email.toLowerCase()
  );

  const now = new Date().toISOString();

  if (existingIndex >= 0) {
    const existing = leads[existingIndex];
    const updated: VisitorLead = {
      ...existing,
      ...leadData,
      id: existing.id,
      createdAt: existing.createdAt,
      verifiedAt: leadData.status === 'verified' ? now : existing.verifiedAt,
    };
    leads[existingIndex] = updated;
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return updated;
  } else {
    const newLead: VisitorLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      createdAt: now,
      verifiedAt: leadData.status === 'verified' ? now : undefined,
      ...leadData,
    };
    leads.unshift(newLead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return newLead;
  }
}

export function markLeadVerifiedByEmail(email: string): VisitorLead | null {
  ensureDirectoryExists();
  const leads = getAllLeads();
  const index = leads.findIndex((l) => l.email.toLowerCase() === email.toLowerCase());
  if (index >= 0) {
    leads[index].status = 'verified';
    leads[index].verifiedAt = new Date().toISOString();
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return leads[index];
  }
  return null;
}
