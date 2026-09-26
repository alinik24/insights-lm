# Agent workflow

GitHub is canonical; no local checkout is expected. Use `repo-dev insights-lm` or clone `alinik24/insights-lm`, then verify origin, default branch, dirty state, and HEAD. Run `./bootstrap.ps1`, `npm run doctor`, and `npm run build` before bounded changes. Test, commit, push, verify the remote commit, and use `repo-release insights-lm` when the repository is inactive. Never place private `.env` values in Git.
