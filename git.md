#### Branch Names

Your branches should be named with a prefix for their purpose, viz.

- New Feature: `feature-branchname`
- Urgent Fix: `hotfix-branchname`
- Bug Fix: `fix-branchname`
  In the above examples, replace `branchname` with the name of your branch.

#### Git Commit

- `chmod ug+x .husky/*`
- `git add CONTRIBUTING.md`
- `git commit &nbsp; -m "docs(contributing): update contributing.md for git commit"`

In general the commit pattern mostly looks like this:

- type(scope?): subject #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) (based on the Angular convention) can be:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
- ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert:Commit reverts a previous commit
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests
