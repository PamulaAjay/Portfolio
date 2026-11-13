# Ajay Pamula — portfolio

Next.js App Router, React, TypeScript, and Tailwind CSS. The approved light navy/cobalt design is implemented with reusable components and typed content. No database or global state library is required.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For validation, run `npm run typecheck` and `npm run build`. Start the production build with `npm start`.

The scripts use Next.js's Webpack compiler because this workspace restricts the internal port used by Turbopack.

## Files

- `src/app/page.tsx`: homepage sections.
- `src/app/layout.tsx`: document structure and metadata.
- `src/app/globals.css`: design tokens, responsive layouts, and reduced-motion behavior.
- `src/app/polish.css`: icon treatments, image presentation, and motion refinements.
- `src/components/`: shared navigation, section heading, and arrow icon.
- `src/content/portfolio.ts`: confirmed profile details and categorized skills.
- `public/Ajay-Pamula-Resume.pdf`: the original resume supplied by Ajay.
- `public/images/solar-cover.webp`: optimized concept artwork for the project cover; creation prompt and asset details are in `docs/design-assets.md`.

## Content and launch status

This is a local first version, not a production deployment. The resume download uses the supplied original PDF, whose experience summary still needs updating. The solar illustration is an editorial graphic, not a screenshot of the live website. No performance or accessibility audit of that external website is claimed.

Contact currently uses a functional email link and LinkedIn. A contact form has intentionally not been presented as working: Resend needs a verified sending domain, a server-only API key, validation, and abuse controls before implementation and delivery verification. No credentials belong in the client or source control.

Before public launch:

- Update and review the downloadable resume.
- Confirm permission for employer descriptions; do not publish employer screenshots, code, or project case studies until allowed.
- Supply the GitHub profile and repository links if they should appear.
- Supply permitted real screenshots and more confirmed detail for the independent project.
- Choose the production domain and host; then add canonical URLs, sitemap, robots configuration, and the final social sharing image.
- Verify responsive rendering, keyboard access, contrast, and Core Web Vitals in a browser.

The page does not claim Python/Django project experience, invented metrics, certifications, or backend ownership.

## Verified in this workspace

- Strict TypeScript check passed.
- Production build passed with Webpack; homepage prerendered as static content.
- Homepage and resume PDF returned HTTP 200 from the production server.
- Browser checks passed at viewport widths 320, 390, 768, and 1440: no horizontal overflow, exactly one main heading, and no missing internal anchor targets.
- Mobile menu opened and closed after link navigation.
- Desktop, mobile, and full-page screenshots reviewed. These checks are not a full accessibility or cross-browser audit.
