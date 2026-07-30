# Halo Campaign Evolved Guide

An independent, English-language guide site for Halo: Campaign Evolved.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` - SEO hub and spoiler-light overview
- `/missions` - 13-mission campaign order
- `/weapons` - classic arsenal and confirmed additions
- `/system-requirements` - official PC specifications
- `/release-date` - date, platforms, editions, and official stores
- `/about`, `/contact`, `/privacy-policy` - trust and legal pages

## Content policy

The site is an unofficial fan guide. Core product facts are checked against Halo
Waypoint, Xbox, PlayStation, and Steam. It does not host game files or provide
unofficial downloads.

Official media is stored under `public/media` for editorial identification and is
credited through the site's source links. Review dates should be updated whenever
official facts or game systems change.

## Deployment

Push the repository to GitHub, import it into Vercel, and bind the production
domain `halocampaignevolvedguide.com`. Update `siteConfig.url` in
`src/lib/site.ts` if the production domain changes.
