# Development Workflow

## Before Editing

Open the project folder in VS Code and use the terminal to check the project:

```bash
npm install
npm run lint
npm run build
```

`npm install` is usually only needed after dependencies change or after a fresh clone. Lint and build confirm that the starting point is healthy.

## During Editing

Start the development server:

```bash
npm run dev
```

Keep this terminal open. Vite watches the source files and refreshes the browser when you save.

Edit one focused area at a time. For example, change a page heading, check it, then change its spacing. This makes it clear which change caused a problem.

## After Editing

Run both checks:

```bash
npm run lint
npm run build
```

Then manually check:

- Home loads at `/`.
- Navigation opens every listed route.
- The brand returns to Home.
- Home cards open the correct pages.
- Learn More links open the correct pages.
- Images load.
- Text is readable on desktop and mobile.
- Keyboard users can reach links and controls.

## Before A Commit

Use:

```bash
git status
git diff
```

`git status` lists changed files. `git diff` shows the exact edits. Read the diff before committing so accidental changes do not get uploaded.

## Development Commands

| Command | Purpose |
|---|---|
| `npm install` | Install packages from `package.json` |
| `npm run dev` | Start the local development server |
| `npm run lint` | Check source code for lint errors |
| `npm run build` | Type-check and create production files |
| `npm run preview` | Preview the production build locally |

## Good Change Habits

- Make small, focused edits.
- Reuse existing components and CSS patterns.
- Keep route names lowercase and use hyphens.
- Use meaningful alt text for informative images.
- Avoid putting secrets, passwords, or API keys in source files.
- Do not edit `dist/` manually.
- Do not commit `node_modules/`.
- Check image licenses before using new images.
- Keep documentation updated when the project structure changes.
