# Portfolio visual assets

## Solar project cover

- File: `public/images/solar-cover.webp`
- Created with the built-in image generation tool.
- Optimized to a 1200 × 800 WebP (59,976 bytes) for the project card.
- Used through `next/image` with responsive sizes and lazy loading.
- Concept artwork, not a screenshot or evidence of a real solar installation.

### Generation prompt

Create a premium editorial 3D illustration for a frontend developer's solar-energy website project cover. Landscape 3:2 composition. Three sculptural deep cobalt-blue photovoltaic solar panel arrays on thin brushed silver frames, arranged across smooth rolling ivory and very pale blue terrain. A warm soft pale amber sun disk floats behind them in an almost white icy-blue sky. Subtle glass reflections, meticulous panel cells, soft ambient occlusion, sophisticated architectural miniature photography, lots of negative space at upper left for a separate HTML label. Palette: deep navy #0f172a, cobalt #1d4ed8, off-white #f8fafc, subtle warm amber. Viewed from a slightly elevated three-quarter angle. Quiet, minimal, polished, no text, no logos, no watermark, no people, no UI or browser mockup. This is conceptual cover art, not a representation of a real installation.

## Icons and motion

- `src/components/icon.tsx`: inline SVG icons and technology marks; no external icon scripts, requests, or package dependencies.
- `src/components/motion-effects.tsx`: one-time section reveals using IntersectionObserver, with cleanup and reduced-motion handling. Keyboard focus reveals content immediately. HTML remains visible without JavaScript.
- `src/app/polish.css`: entrance animations, two-cycle illustration movement, interaction feedback, icon treatments, and responsive refinements.
- Animation uses opacity and transforms. Reduced-motion preferences disable entrance, floating, and hover movement.
