# Styling Guide

The site uses plain CSS. Most visual rules are in `src/App.css`; document-wide defaults are in `src/index.css`.

## Font

The current font stack is:

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

The first choice is **Segoe UI**, a common Windows interface font. If it is unavailable, the browser tries Tahoma, then Geneva, then Verdana, then its generic sans-serif font.

There is no imported web font in this project. If you add one later, document the source and make sure the page still looks good while the font is loading.

## Color Palette

The site uses a warm neutral background with a dark red accent.

| Purpose | Color | Where it is used |
|---|---|---|
| Page background | `#f7f0ee` | `.page-shell` background |
| Browser background | `#efefe9` | `body` background in `index.css` |
| Root background | `#f3e5e5` | `:root` background in `index.css` |
| Main text | `#1b1f23` | `.page-shell` base text |
| Dark text | `#171b1e` | Headings and body copy |
| Primary red | `#b51c1c` | Large hero headline |
| Heading red | `#9d2020` | Section and page headings |
| Link red | `#b91c1c` | Learn More links |
| Navigation red | `#7d1d1d` | Navigation text |
| Brand red | `#a92525` | Site brand and eyebrow text |
| Card background | `rgba(255, 255, 255, 0.45)` | Feature cards |
| Light border | `rgba(17, 17, 17, 0.08)` | Card outlines |
| Red border | `rgba(121, 24, 24, 0.15)` | Informational page divider |
| Image overlay | `rgba(38, 43, 47, 0.78)` | Mission visual overlay |

The color values are currently written directly in CSS rather than CSS custom properties. If the project grows, moving repeated colors into `:root` variables would make the palette easier to maintain.

## Layout

### Page Shell

`.page-shell` limits the page to `1490px`, centers it, and provides the warm page background. It also has `min-height: 100vh` so short pages fill the screen.

### Header

`.topbar` uses Flexbox to place the navigation and brand on opposite sides. On screens narrower than `980px`, it changes to a vertical layout.

### Home Hero

`.hero-section` uses a two-column CSS Grid:

- left column: large stacked headline
- right column: athlete image

At `980px` and below, it becomes one column.

### Mission Section

`.mission-panel` uses a second two-column grid with the mission visual and text. It also becomes one column at `980px`.

### Feature Cards

`.feature-grid` uses two equal columns on larger screens and one column below `980px`. Cards have an `18px` radius and a small hover lift.

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| Above `980px` | Desktop two-column layouts and horizontal header |
| `980px` or below | Stacked header, hero, mission, and one-column card grid |
| `640px` or below | Smaller padding, wrapped navigation, smaller headline and body text |

These breakpoints are implemented near the bottom of `src/App.css`.

## Spacing and Shape Rules

- Main page padding: `1.3rem 2.6rem 3rem`.
- Informational page max width: `980px`.
- Card corner radius: `18px`.
- Hero and mission image corner radius: `22px` to `24px`.
- Most paragraphs use line-height around `1.8` for comfortable reading.
- Headings use tight line-height and negative letter spacing to create the bold editorial style.

## Accessibility Basics

When changing the styling:

- Keep text contrast strong against the background.
- Do not use color as the only way to show meaning.
- Keep visible focus states for keyboard users.
- Keep `alt` text on meaningful images.
- Use heading levels in order.
- Test the layout at both desktop and mobile widths.

## How To Change A Color

Search for the existing hex value in `src/App.css` or `src/index.css`. Change only the use that matches your intended purpose. After editing, run:

```bash
npm run lint
npm run build
```

Then check the page in the browser at a desktop and mobile width.
