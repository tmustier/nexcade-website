# Nexcade Website

Static marketing website for Nexcade.

## Structure

```
website/
├── index.html          # Main landing page
├── about.html          # About page
├── team.html           # Team page
├── terms-of-use.html   # Legal: Terms of Use
├── privacy-policy.html # Legal: Privacy Policy
├── cookies-policy.html # Legal: Cookies Policy
├── styles.css          # Shared styles (nav, footer, buttons, legal pages)
├── _components.html    # Reference snippets for nav/footer (not served)
├── img-*.jpg/png       # Local images
├── *.jpeg              # Team photos (Dan, Tasho, Joao, Natasha, Isra)
└── README.md           # This file
```

## Shared Components

### styles.css
Contains common styles used across all pages:
- CSS variables (colors, typography)
- Navigation (`.nav-inner`, `.logo`, `.nav-links`)
- Buttons (`.btn`, `.btn-primary`, `.btn-secondary`)
- Footer (`.footer-inner`, `.footer-bottom`, `.footer-legal`)
- Legal page styles (`.legal-hero`, `.legal-content`)

### Logo SVG
The Nexcade logo is inlined as SVG in each page's nav. If updating, change in all HTML files.

## Page-Specific Notes

### index.html
- Largest file (~1400 lines CSS) - contains hero, value cards, testimonials, etc.
- Has cookie banner and modal JS at the bottom
- Images: `img-container-port.jpg`, `img-rick-white.jpg`, `img-richard-fattal.png`

### team.html
- Team photos stored as `{Name}.jpeg` (Dan, Tasho, Joao, Natasha, Isra)
- Vincent uses initials (VR) - no photo provided
- Founders in 2-column grid, team in 3-column grid

### about.html
- Investor links in "Backed by" section (Connect Ventures, MMC, Inovia, Entropy)

### Legal pages (terms, privacy, cookies)
- Use shared `styles.css` + minimal page-specific CSS
- Narrower container (800px vs 1080px default)

## Fonts

Using Google Fonts:
- **Newsreader** (serif) - headings
- **DM Sans** (sans-serif) - body text

## Colors

```css
--bg: #f9f8f6;           /* Page background */
--bg-white: #ffffff;     /* Cards */
--bg-warm: #f3f1ed;      /* Warm sections */
--text: #1f2328;         /* Primary text */
--text-secondary: #4b5563;
--text-muted: #6b7280;
--accent: #c9461a;       /* Orange accent (buttons, links) */
--border: #e5e5e2;
```

## Making Changes

1. **Shared styles** → Edit `styles.css`
2. **Nav/footer** → Edit in each HTML file (or search/replace)
3. **Team member** → Edit `team.html` + update `../research/team.md`
4. **Legal text** → Edit the respective legal page

## Testing

Open `index.html` in a browser. All links use relative paths, so the site works locally without a server.
