# Contributing Guide

Thank you for your interest in contributing to this project!
Whether you're fixing a bug, adding a feature, or improving the documentation, please follow the commit message conventions below to keep the project history clean and consistent.

---

# Commit Message Convention

The project follows the **Conventionnal Commits** specification.

```bash
<type>(optionnal scope): short description
```

- **type**: the category of change
- **scope** (optional): the part of the project affected
- **description**: a short, present-tense sentence that clearly describes the change

---

## Allowed Types

| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| feat     | A new feature                                          |
| fix      | A bug fix                                              |
| docs     | Documentation updates only                             |
| style    | Changes that do not affect logic (formatting, spacing) |
| refactor | Code changes that neither fix a bug nor add a feature  |
| test     | Adding or updating tests                               |
| chore    | Maintenance tasks (build, CI, dependencies, etc.)      |

---

## Examples

feat(auth): add JWT strategy

fix(routes): correct POST /users

refactor(db): simplify user model

test(middleware): add tests for rate limiter

docs(swagger): document /login endpoint

chore: update project dependencies

---

## Best Practices

- Keep commits focused: one purpose per commit
- Use clear and concise messages
- Start the description with a verb in the present tense (add, fix, update, etc.)
- Avoid ending the message with a period
- Use English for commit messages

---

## About this Convention

You can learn more about the convention here:
https://www.conventionalcommits.org/

---

# Git Workflow Overview

We follow a structured Git branching strategy inspired by Git Flow, with an additional stage branch for pre-production testing. This helps ensure code quality, feature isolation, and a clean deployment pipeline.

---

## Main Branches

| Branch    | Purpose                              |
| --------- | ------------------------------------ |
| `main`    | Stable production-ready code         |
| `stage`   | Pre-production (staging environment) |
| `develop` | Main development branch              |

---

## Supporting Branches

| Branch Prefix     | Use case                                      |
| ----------------- | --------------------------------------------- |
| `feature/<name>`  | New features                                  |
| `fix/<name>`      | Bug fixes                                     |
| `refactor/<name>` | Code restructuring without functional changes |
| `test/<name>`     | Unit/integration tests                        |
| `docs/<name>`     | Documentation updates                         |

---

## Development Flow

1. Create a new branch from `develop`
2. Commit your code with meaningful messages using Conventional Commits. 
3. When done, open a pull request into develop.
4. After merging into develop, test locally.
5. When develop has enough stable changes, merge into stage for global integration testing.
6. Once validated on stage, open a pull request into main.

---

## Summary

```
main   ← Production
│
├── stage   ← Pre-production, integrates develop
│    ↑
└── develop ← Main dev branch
├── feature/*
├── fix/*
└── docs/*
```

Use pull requests for all merges (even solo), and ensure code is tested and reviewed before merging upstream.

---

Thank you for your contribution !
