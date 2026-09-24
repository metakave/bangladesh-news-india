import fs from 'fs';
import path from 'path';

const newsFilePath = path.resolve('src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

// Fix news-20260922-081
content = content.replace(
  /("id":\s*"news-20260922-081"[\s\S]*?"source":\s*\{[\s\S]*?"name":\s*)"Hindu Tamil Thisai"([\s\S]*?"language":\s*)"Tamil"/,
  '$1"The Times of India"$2"English"'
);

const exactFixes = [
  {
    id: "news-20260923-003",
    url: "https://www.thewall.in/news/bangladesh/awami-league-leadership-rebuilding-and-ground-activation-strategy-20260923"
  },
  {
    id: "news-20260923-007",
    url: "https://tripuratimes.com/tripura-cm-welcomes-restart-of-agartala-dhaka-kolkata-bus-service"
  },
  {
    id: "news-20260922-089",
    url: "https://tv9gujarati.com/national/hilsa-fish-supply-gujarat-ports-to-bangladesh-cross-border-trade-20260922"
  },
  {
    id: "news-20260920-039",
    url: "https://assamtribune.com/international/international-crimes-tribunal-sentences-seven-senior-awami-league-leaders-to-death-154982"
  },
  {
    id: "news-20260920-041",
    url: "https://www.firstpost.com/world/sheikh-hasinas-daughter-saima-wazed-breaks-silence-on-resignation-as-who-regional-director-13816541.html"
  },
  {
    id: "news-20260920-045",
    url: "https://www.thewall.in/bangladesh/deciphering-hasinas-political-strategy-ahead-of-december-timeline"
  },
  {
    id: "news-20260919-001",
    url: "https://www.thewall.in/bangladesh/sheikh-hasina-delhi-consultations-december-action-plan-awami-league"
  },
  {
    id: "news-20260919-005",
    url: "https://syandanpatrika.com/news/tripura-assam-border-bsf-heightens-vigil-akhaura-agartala-icp-20260920"
  },
  {
    id: "news-20260919-009",
    url: "https://navbharattimes.indiatimes.com/world/bangladesh/sheikh-hasina-return-bangladesh-dhaka-security-situation/articleshow/134289012.cms"
  },
  {
    id: "news-20260919-010",
    url: "https://uttarbangasambad.com/fulbari-changrabandha-land-port-freight-movement-cross-border-trade-update-20260919/"
  },
  {
    id: "news-20260918-006",
    url: "https://tripuratimes.com/news/akhaura-agartala-integrated-check-post-trade-and-freight-movement"
  },
  {
    id: "news-20260918-011",
    url: "https://www.youtube.com/watch?v=F-e2nupwMmU"
  },
  {
    id: "ig-005",
    url: "https://www.instagram.com/p/Ddf2gIwm9nI/"
  }
];

for (const fix of exactFixes) {
  const itemRegex = new RegExp(`(\{\\s*"id":\\s*"${fix.id}"[\\s\\S]*?"originalUrl":\\s*")[^"]+(")`);
  if (itemRegex.test(content)) {
    content = content.replace(itemRegex, `$1${fix.url}$2`);
    console.log(`Updated [${fix.id}] -> ${fix.url}`);
  } else {
    console.warn(`Could not find item [${fix.id}]`);
  }
}

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log('Finished updating news-data.ts');
