# GitHub Workflow

Git is the tool on your computer that records changes. GitHub is the online service that stores and shares a Git repository.

## One-Time Setup

Create an empty repository on GitHub, then connect the local project from the project folder:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the placeholders in the URL with your GitHub username and repository name.

If Git asks you to sign in, use GitHub's supported authentication method. Never place a password or token in a command that will be saved in shell history or in a project file.

## The Four Main Git Actions

### Pull

```bash
git pull
```

Downloads new commits from GitHub and combines them with your local work. Pull before beginning work when collaborating.

### Add

```bash
git add .
```

Stages all changed files for the next commit. Staging means selecting the changes you want to save. To stage one file instead, use its path, such as `git add src/App.tsx`.

### Commit

```bash
git commit -m "Update page content"
```

Creates a permanent local save point. The message should briefly explain what changed.

### Push

```bash
git push
```

Uploads local commits to GitHub so the remote repository has your latest work.

## Recommended Daily Workflow

```bash
git pull
npm install
npm run dev
```

Edit and test the site. Then:

```bash
npm run lint
npm run build
git status
git diff
git add .
git commit -m "Describe the change"
git push
```

## Check History

```bash
git log --oneline
```

Shows short commit history. This is useful for seeing what was saved and when.

## Check The Remote

```bash
git remote -v
```

Shows which GitHub address is connected to the local project.

## If You Made A Mistake

Do not immediately delete files or run destructive Git commands. First inspect the state:

```bash
git status
git diff
```

If the change is only unstaged and you want to discard it, ask for help or make a backup first. A committed change can usually be reversed safely with a new commit.

## Merge Conflicts

A conflict happens when Git cannot combine two edits to the same lines. Git marks the file with sections like:

```text
<<<<<<< HEAD
your local version
=======
version from GitHub
>>>>>>> other-branch
```

Open the file, choose or combine the correct content, and remove all marker lines. Then run:

```bash
git add .
git commit -m "Resolve merge conflict"
git push
```

Run lint and build after resolving a conflict.

## What Should Not Be Uploaded

Do not commit:

- `node_modules/`
- passwords, tokens, or private keys
- private environment files such as `.env`
- large generated files unless the project specifically needs them

The repository's `.gitignore` should exclude generated dependencies and build output.
