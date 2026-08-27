# The Invisible Injury

This is a React and TypeScript website built with Vite. It contains information about concussions, CTEs, symptoms, athletes, parents, guardians, and coaches.

This guide assumes you are brand new to coding. You do not need to memorize the commands. Copy them into the VS Code terminal when a step asks you to.

## What You Need First

Install these two programs before working on the project:

- [Node.js](https://nodejs.org/) - runs JavaScript tools on your computer. Install the LTS version.
- [Git](https://git-scm.com/downloads) - tracks changes and lets you work with GitHub.

After installing them, restart VS Code. Open the project folder in VS Code, then open the terminal with **Terminal > New Terminal**.

## Install Project Packages

Run this once after downloading or cloning the project:

```bash
npm install
```

`npm install` reads `package.json` and downloads the libraries this project needs into a folder called `node_modules`. That folder is generated automatically and should not be uploaded to GitHub.

## Run the Website Locally

Start the development server with:

```bash
npm run dev
```

Vite will print a local address, usually `http://localhost:5173/`. Open that address in your browser. Keep the terminal running while you work. When you edit and save a file, the browser usually updates automatically.

To stop the server, click in the terminal and press `Ctrl+C`.

## Build the Website

Before sharing or deploying the website, create a production build:

```bash
npm run build
```

This checks the TypeScript code and creates an optimized `dist` folder. A successful build means the project is ready for deployment. If the command shows errors, read the file name and line number in the message, fix that code, and run the command again.

## Check Code Quality With Lint

Run the linter with:

```bash
npm run lint
```

Linting looks for common code problems and style issues. It does not change your code automatically. Fix any errors it reports, then run the command again.

## Preview a Production Build

After `npm run build`, you can preview the built version locally:

```bash
npm run preview
```

Open the address Vite prints in the terminal. This preview is useful because it shows the production build rather than the development version.

## Useful Project Files

- `src/App.tsx` - page content, routes, navigation, and React components.
- `src/App.css` - styles for the pages and components.
- `src/index.css` - global styles used across the website.
- `package.json` - project dependencies and command shortcuts.
- `public/` - static files that can be used by the website.

## GitHub Setup

GitHub stores your project online and keeps a history of your changes. You need a GitHub account and a repository for this project.

If this project is not connected to GitHub yet, create a new empty repository on [GitHub](https://github.com/new). Do not add a README, `.gitignore`, or license during setup if those files already exist locally.

In the VS Code terminal, run the following commands from the project folder. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub username and repository name:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

What each command means:

- `git init` starts Git tracking in this folder.
- `git add .` selects all current project files for the next save point.
- `git commit -m "Initial website"` creates a named save point on your computer.
- `git branch -M main` names the main branch `main`.
- `git remote add origin ...` connects this folder to your GitHub repository.
- `git push -u origin main` uploads the commit to GitHub.

GitHub may ask you to sign in. Follow GitHub's prompts. Never put a password, personal access token, or other secret directly in a file or commit.

## Save and Upload New Changes

After editing the website, first check that it works:

```bash
npm run lint
npm run build
```

Then create a commit and upload it:

```bash
git status
git add .
git commit -m "Describe what changed"
git push
```

`git status` shows which files changed. `git add .` prepares those changes, `git commit` records them with a message, and `git push` sends them to GitHub.

Use a short message that explains the change, such as `Fix mobile navigation` or `Update concussion content`.

## Download Changes From GitHub

Before starting work, download the newest version from GitHub:

```bash
git pull
```

`git pull` brings other people's committed changes into your local project. Run it before editing when collaborating with someone else.

If Git reports a conflict, it means both versions changed the same part of a file. Do not delete work automatically. Open the file, choose the correct final text, save it, then run:

```bash
git add .
git commit -m "Resolve merge conflict"
git push
```

## A Simple Daily Workflow

```bash
git pull
npm install
npm run dev
```

Work in the browser, stop the server with `Ctrl+C`, then run:

```bash
npm run lint
npm run build
git add .
git commit -m "Describe what changed"
git push
```

The first group gets the latest code and starts the site. The second group checks your work, saves it in Git, and uploads it to GitHub.
