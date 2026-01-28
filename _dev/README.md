# Nexcade Website

Static marketing site for Nexcade AI.

## Structure

```
website/
├── index.html          # Homepage
├── about.html          # About page (mission, investors)
├── team.html           # Team page
├── css/
│   ├── base.css        # Variables, reset, typography
│   ├── components.css  # Nav, footer, buttons, mobile menu, legal
│   └── pages/
│       └── index.css   # Homepage-specific styles
├── img/
│   ├── team/           # Team headshots
│   ├── logos/          # Investor logos
│   └── *.jpg/png       # Other images
├── legal/
│   ├── privacy.html
│   ├── terms.html
│   └── cookies.html
└── _dev/
    ├── _components.html    # Copy-paste reference for nav/footer
    ├── README.md           # This file
    ├── original-website-messaging.md
    └── screenshots/        # Reference screenshots
```

## Adding New Pages

1. Copy nav and footer from `_dev/_components.html`
2. Link `css/base.css` + `css/components.css` for shared styles
3. Update legal links to `legal/privacy.html`, `legal/terms.html`, `legal/cookies.html`

## Deployment

Hosted on GitHub Pages: https://tmustier.github.io/nexcade-website/

To update:
```bash
git add .
git commit -m "Update website"
git push
```
