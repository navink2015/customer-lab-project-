# GitHub Setup Instructions

## Initialize Git Repository

Follow these steps to push your code to GitHub:

### 1. Initialize Local Repository

```bash
git init
git add .
git commit -m "Initial commit: Segment Saver React App"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name: `segment-saver-app` (or your preferred name)
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### 3. Connect to GitHub

After creating the repository, run these commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Verify

1. Refresh your GitHub repository page
2. You should see all files uploaded
3. Share the repository URL with others

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create segment-saver-app --public --source=. --remote=origin --push
```

## Before Pushing

Make sure to:

1. ✅ Update the webhook URL in `src/App.tsx` (or keep it as placeholder)
2. ✅ Test the application locally (`npm start`)
3. ✅ Verify all functionality works
4. ✅ Check that `.gitignore` is present (it is)

## What Gets Pushed

The following will be included:
- ✅ All source code (`src/` folder)
- ✅ Public assets (`public/` folder)
- ✅ Configuration files (`package.json`, `tsconfig.json`, etc.)
- ✅ Documentation (`README.md`, `SETUP_GUIDE.md`, etc.)

The following will NOT be pushed (excluded by `.gitignore`):
- ❌ `node_modules/` (dependencies)
- ❌ `build/` (production build)
- ❌ `.env` files (environment variables)

## Repository Description

Suggested description for GitHub:

> A React + TypeScript application for creating and managing customer segments with dynamic schema selection. Features webhook integration, category indicators, and responsive design.

## Topics/Tags

Add these topics to your repository for better discoverability:
- react
- typescript
- webhook
- customer-segmentation
- react-hooks
- frontend
- assessment

## After Pushing

1. Add a repository description
2. Add topics/tags
3. Verify the README displays correctly
4. Test cloning the repository in a new location
5. Share the URL: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`



