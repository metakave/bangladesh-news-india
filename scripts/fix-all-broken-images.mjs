import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const newsFilePath = path.join(rootDir, 'src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

// Mapping of broken image URLs to valid, existing images
const IMAGE_REPLACEMENTS = [
  // Broken 404 Unsplash ID (photo-1524813686514-a57563d77d66)
  {
    from: 'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80',
    to: '/images/india-bangladesh-trade-land-port.jpg'
  },
  {
    from: 'https://images.unsplash.com/photo-1524813686514-a57563d77d66',
    to: '/images/india-bangladesh-trade-land-port.jpg'
  },
  // Missing local files -> existing local verified files
  {
    from: '/images/bank-bangladesh-economy.jpg',
    to: '/images/india-bangladesh-trade-land-port.jpg'
  },
  {
    from: '/images/bangladesh-high-commission-new-delhi.jpg',
    to: '/images/south-block-mea-delhi.jpg'
  },
  {
    from: '/images/bangladesh-international-crimes-tribunal-ict-dhaka.jpg',
    to: '/images/international-crimes-tribunal-dhaka.jpg'
  },
  {
    from: '/images/bangladesh-dhaka-high-court.jpg',
    to: '/images/gauhati-high-court.jpg'
  },
  {
    from: '/images/dhaka-high-court.jpg',
    to: '/images/gauhati-high-court.jpg'
  },
  {
    from: '/images/chattogram-port-maritime-hub.jpg',
    to: '/images/petrapole-benapole-trade-cargo.jpg'
  },
  {
    from: '/images/kolkata-writers-building.jpg',
    to: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80'
  },
  {
    from: '/images/siliguri-corridor-northeast-route.jpg',
    to: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80'
  },
  {
    from: '/images/tarique-rahman-speech.jpg',
    to: '/images/dhaka-national-parliament-symbolic.jpg'
  },
  {
    from: '/images/sheikh-hasina-delhi.jpg',
    to: '/images/south-block-mea-delhi.jpg'
  },
  // 404 YouTube thumbnails & broken Unsplash IDs
  {
    from: 'https://i.ytimg.com/vi/a_Yw2qO7_pM/hqdefault.jpg',
    to: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
  },
  {
    from: 'https://i.ytimg.com/vi/HPwrbhXjMwA/hqdefault.jpg',
    to: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
  },
  {
    from: 'https://i.ytimg.com/vi/3lE0QeO4v1Q/hqdefault.jpg',
    to: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
  },
  {
    from: 'https://i.ytimg.com/vi/7X-H54GvWQA/hqdefault.jpg',
    to: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
  },
  {
    from: 'https://i.ytimg.com/vi/9V2wN1n1k1o/hqdefault.jpg',
    to: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
  },
  {
    from: 'https://images.unsplash.com/photo-1531415074868-036b107e775a?w=1200&auto=format&fit=crop&q=80',
    to: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80'
  }
];

let replaceCount = 0;
for (const rep of IMAGE_REPLACEMENTS) {
  while (content.includes(rep.from)) {
    content = content.replace(rep.from, rep.to);
    replaceCount++;
  }
}

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Fixed broken image references in news-data.ts (${replaceCount} replacements performed)`);
