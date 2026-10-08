# Publish this project to GitHub

## Option A — One repository for all internship work

1. On GitHub, create a new empty repository named `frontend-internship-projects`.
2. Open a terminal in this folder.
3. Run:

```bash
git init
git add .
git commit -m "Complete frontend internship projects"
git branch -M main
git remote add origin https://github.com/tycoon-codes195/frontend-internship-projects.git
git push -u origin main
```

After the push, the repository will be available at:

`https://github.com/tycoon-codes195/frontend-internship-projects`

## Option B — Separate repositories

You can upload each numbered project folder as its own repository. Suggested names:

- `personal-portfolio`
- `responsive-navbar`
- `form-validation`
- `ecommerce-landing-page`
- `flexbox-grid-layout`
- `react-components-practice`
- `react-blog-ui`

For each folder, create the matching empty GitHub repository, open a terminal inside the folder, and run:

```bash
git init
git add .
git commit -m "Complete internship project"
git branch -M main
git remote add origin https://github.com/tycoon-codes195/REPOSITORY-NAME.git
git push -u origin main
```

Replace `REPOSITORY-NAME` with the repository name you created.
