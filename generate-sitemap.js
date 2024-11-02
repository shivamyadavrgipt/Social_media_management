import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/', changefreq: 'daily', priority: 1.0 },          // LandingPage
    { url: '/dashboard', changefreq: 'weekly', priority: 0.9 }, // Dashboard
    { url: '/posts', changefreq: 'weekly', priority: 0.8 },    // Publish
    { url: '/analytics', changefreq: 'weekly', priority: 0.8 }, // Analytics
    { url: '/contributors', changefreq: 'monthly', priority: 0.7 }, // Contributors
    { url: '/settings', changefreq: 'monthly', priority: 0.6 }, // Settings
    { url: '/signup', changefreq: 'monthly', priority: 0.5 },   // Signup
    { url: '/login', changefreq: 'monthly', priority: 0.5 },    // Login
    { url: '/newsletter', changefreq: 'monthly', priority: 0.5 } // Newsletter
  ];


async function generateSitemap() {
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  const sitemap = new SitemapStream({ hostname: 'https://social-media-management-djkz.vercel.app/' });

  sitemap.pipe(writeStream).on('finish', () => {
    console.log('Sitemap generated successfully');
  });

  pages.forEach(page => sitemap.write(page));

  sitemap.end();
}

generateSitemap().catch(error => {
  console.error('Error generating sitemap:', error);
});
