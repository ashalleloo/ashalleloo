# Troubleshooting

## `npm` Is Not Recognized

Node.js is missing or was installed before the terminal opened. Install the LTS version of Node.js, restart VS Code, and check:

```bash
node --version
npm --version
```

Both commands should print version numbers.

## The Browser Does Not Open

Run:

```bash
npm run dev
```

Then open the exact `Local` address printed by Vite, usually `http://localhost:5173/`.

If the port is already in use, Vite may choose another port. Use the address shown in the terminal.

## The Browser Shows A Blank Page

Look at the browser developer console and the terminal for errors. Common causes include:

- a missing closing JSX tag
- a typo in an imported file name
- an invalid route component
- a JavaScript or TypeScript syntax error

The terminal often prints the file and line where the problem begins.

## `npm run build` Fails

Read the first error, not just the last line. TypeScript errors often identify the exact file and line. Fix one error at a time, then run the build again.

A clean build ends with a Vite success message and creates or updates `dist/`.

## `npm run lint` Fails

ESLint found a code quality issue. Read the rule name and file location. Fix the source file, then run lint again.

Do not hide an error just to make the command pass unless you understand why the rule does not apply.

### Unterminated String Literal

JavaScript strings written with single quotes (`'text'`) or double quotes (`"text"`) cannot continue onto a new source line. If a paragraph needs to span multiple lines in the source, use a template literal with backticks:

```tsx
const paragraph = `This text can
continue on another source line.`
```

Keep the text between the opening and closing backticks. Then run `npm run lint` and `npm run build` again.

## Images Do Not Load

The website currently uses remote Unsplash URLs. Check your internet connection and confirm the URL is still valid. For stable production images, store approved image files in `src/assets/` or `public/`.

## A Link Goes To The Wrong Page

Check these three places in `src/App.tsx`:

1. The `to` value in `navItems`.
2. The `to` value in `featureCards`.
3. The matching `Route` path.

The values must match exactly, including capitalization and hyphens.

## Refreshing A Page Gives A 404 After Deployment

React Router handles routes in the browser. Some hosting providers need a rewrite rule that sends unknown paths back to `index.html`. Check your hosting provider's single-page application documentation.

## Git Says There Is Nothing To Commit

Run:

```bash
git status
```

You may have already committed the changes, be in the wrong folder, or have a file excluded by `.gitignore`.

## Git Says The Remote Is Missing

Check the connection:

```bash
git remote -v
```

If nothing is shown, add the repository URL:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Stop And Ask For Help When

Pause before running commands that delete files, erase commits, reset branches, or force-push. These actions can permanently remove work. Inspect with `git status` and `git diff` first, and make a backup if you are unsure.
