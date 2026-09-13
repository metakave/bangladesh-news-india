/**
 * Date and Relative Time Utilities for Narrative Compass
 */

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:  return `${day}st`;
    case 2:  return `${day}nd`;
    case 3:  return `${day}rd`;
    default: return `${day}th`;
  }
}

const ENGLISH_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const BENGALI_MONTHS = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

export function toBengaliDigits(num: number | string): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (d) => bnDigits[Number(d)]);
}

/**
 * Formats absolute date and time:
 * e.g. "5th September 2026, 5:00 PM"
 */
export function formatAbsoluteDateTime(date: Date, lang: 'bn' | 'en' = 'en'): string {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  const minStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  if (lang === 'bn') {
    let suffix = 'ই';
    if (day === 1) suffix = 'লা';
    else if (day === 2 || day === 3) suffix = 'রা';
    else if (day === 4) suffix = 'ঠা';

    const period = date.getHours() < 12 ? 'সকাল' : (date.getHours() < 15 ? 'দুপুর' : (date.getHours() < 18 ? 'বিকাল' : 'রাত'));
    return `${toBengaliDigits(day)}${suffix} ${BENGALI_MONTHS[month]} ${toBengaliDigits(year)}, ${period} ${toBengaliDigits(hours)}:${toBengaliDigits(minStr)}`;
  }

  const ordinalDay = getOrdinalSuffix(day);
  const monthName = ENGLISH_MONTHS[month];
  return `${ordinalDay} ${monthName} ${year}, ${hours}:${minStr} ${ampm}`;
}

/**
 * Universal Article Timestamp Formatter:
 * - If under 5 days old: always returns relative time ("18 mins ago" / "১৮ মিনিট আগে")
 * - If 5+ days old: returns formatted absolute date/time ("5th September 2026, 5:00 PM")
 */
export function formatArticleTimestamp(
  rawTime: string | undefined | null,
  lang: 'bn' | 'en' = 'en',
  fallbackDate?: string
): string {
  if (!rawTime && !fallbackDate) return '';
  const input = (rawTime || fallbackDate || '').trim();

  // 1. Try parsing input as a Date
  const parsedDate = new Date(input);
  const isLikelyIsoOrDate = input.includes('-') || input.includes('/') || input.includes('T') || input.includes('GMT') || input.includes('Z');
  const isValidDate = !isNaN(parsedDate.getTime()) && isLikelyIsoOrDate;

  if (isValidDate) {
    const now = Date.now();
    const diffMs = Math.max(0, now - parsedDate.getTime());
    const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

    if (diffMs >= FIVE_DAYS_MS) {
      return formatAbsoluteDateTime(parsedDate, lang);
    }

    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) {
      return lang === 'bn' ? 'এইমাত্র' : 'Just now';
    }
    if (diffMins < 60) {
      return lang === 'bn' ? `${toBengaliDigits(diffMins)} মিনিট আগে` : `${diffMins} ${diffMins === 1 ? 'min' : 'mins'} ago`;
    }

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) {
      return lang === 'bn' ? `${toBengaliDigits(diffHours)} ঘণ্টা আগে` : `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    }

    const diffDays = Math.floor(diffHours / 24);
    return lang === 'bn' ? `${toBengaliDigits(diffDays)} দিন আগে` : `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  }

  // 2. If the input is already a human relative string like "35 mins ago", "1.5 hours ago"
  if (typeof input === 'string') {
    const minsMatch = input.match(/([\d.]+)\s*mins?\s*ago/i);
    if (minsMatch) {
      const num = Math.round(parseFloat(minsMatch[1]));
      return lang === 'bn' ? `${toBengaliDigits(num)} মিনিট আগে` : `${num} mins ago`;
    }

    const hoursMatch = input.match(/([\d.]+)\s*hours?\s*ago/i);
    if (hoursMatch) {
      const num = parseFloat(hoursMatch[1]);
      const displayNum = num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);
      const unit = num === 1 ? 'hour' : 'hours';
      return lang === 'bn' ? `${toBengaliDigits(displayNum)} ঘণ্টা আগে` : `${displayNum} ${unit} ago`;
    }

    const daysMatch = input.match(/(\d+)\s*days?\s*ago/i);
    if (daysMatch) {
      const num = parseInt(daysMatch[1], 10);
      if (num >= 5 && fallbackDate) {
        const fbDate = new Date(fallbackDate);
        if (!isNaN(fbDate.getTime())) {
          return formatAbsoluteDateTime(fbDate, lang);
        }
      }
      return lang === 'bn' ? `${toBengaliDigits(num)} দিন আগে` : `${num} days ago`;
    }
  }

  return input;
}
