# Pages And Content

## Route Map

| URL | Component | Purpose |
|---|---|---|
| `/` | `HomePage` | Main landing page and links to the educational sections |
| `/about-concussions` | `AboutConcussionsPage` | Explains what a concussion is |
| `/about-ctes` | `AboutCTEsPage` | Explains CTE and prevention awareness |
| `/athlete-corner` | `AthleteCornerPage` | Gives athletes guidance on symptoms and returning to play |
| `/symptoms` | `SymptomsPage` | Lists common symptoms and when to seek help |
| `/about-us` | `AboutUsPage` | Shares the project author's background and reason for choosing concussion awareness |
| `/responsibilities-for-coaches` | `ResponsibilitiesForCoachesPage` | Explains coach responsibilities and safety practices |
| `/more` | `MorePage` | Provides additional resource context |

## Navigation Links

The main navigation is controlled by the `navItems` array near the top of `src/App.tsx`. Each item has a visible label and a route:

```tsx
{ label: 'About CTEs', to: '/about-ctes' }
```

The header uses `NavLink`, which adds the `active` class to the current page. That class changes the active link color.

The brand uses `Link to="/"` so clicking **THE INVISIBLE INJURY** always returns to Home.

## Home Page Sections

The home page contains:

1. Hero title and athlete image.
2. Mission panel with a link to About Us.
3. Concussion danger explanation.
4. Four linked feature cards.
5. Parent and guardian responsibilities.
6. Coach responsibilities with a Learn More link.

The parent heading uses the spelling **Guardians**, and the Symptoms feature card uses the spelling **Symptoms**.

## Informational Page Content

- **About Concussions** currently has a “What Is a Concussion?” section.
- **About CTEs** has “What Is CTE?” and “Prevention and Awareness” sections.
- **Athlete Corner** has guidance for athletes and a “Safe Return to Play” section.
- **Symptoms** includes a short introduction, common symptoms, and a section about seeking help. The symptom entries are currently stored as strings in the `paragraphs` array and rendered as separate paragraphs by `PageTemplate`.
- **About Us** introduces the site's mission and includes a first-person account of the author's project and motivation.
- **Responsibilities for Coaches** covers coach actions and creating a safe environment.
- **More Resources** summarizes the site's concussion education topics.

## Feature Cards

The four cards come from `featureCards`:

| Card | Destination |
|---|---|
| About CTEs | `/about-ctes` |
| Symptoms | `/symptoms` |
| About Concussion | `/about-concussions` |
| Athlete Corner | `/athlete-corner` |

Each card has a title, short question, description, image URL, and destination. If you change a card's link, make sure the route exists.

The About CTEs card uses `src/assets/CTE Cover apge.jpg`, and the Athlete Corner card uses `src/assets/Athlete Corner Cover page.jpg`. These local images are imported at the top of `src/App.tsx` and assigned to the matching card. The Symptoms and About Concussion card images still use remote Unsplash URLs.

## Editing Text

Most text is written directly inside page components. To edit a paragraph:

1. Open `src/App.tsx`.
2. Search for a distinctive phrase from the paragraph.
3. Edit only the text inside the JSX.
4. Save the file.
5. Check the page in the browser.
6. Run `npm run lint` and `npm run build`.

For informational pages, edit the `sections` array passed to `PageTemplate`. Keep each section object in this form:

```tsx
{
  heading: 'Section heading',
  paragraphs: [
    'First paragraph.',
    'Second paragraph.',
  ],
}
```

## Adding A New Page

1. Create a function such as `function NewPage() { ... }`.
2. Use `PageTemplate` if the page has the standard informational layout.
3. Add a route inside `Routes`.
4. Add a navigation item if users should see it in the header.
5. Add a `Link` or card if users should reach it from Home.
6. Run the build and click the route manually.

## Medical Content Note

Do not invent medical claims. The page is educational, not a replacement for a medical professional. For new health information, use reliable sources such as public health agencies, medical institutions, or peer-reviewed research, and review wording carefully.
