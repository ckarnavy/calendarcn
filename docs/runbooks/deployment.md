# Deployment Runbook

## Overview

CalendarCN builds as a TanStack Start client application with Vite. This runbook covers generic build verification and hosting handoff steps without assuming a specific provider.

## Pre-Deployment

```bash
pnpm lint          # Must pass
pnpm typecheck     # Must pass
pnpm format:check  # Must pass
pnpm build         # Must succeed
```

## Deployment Steps

1. Merge PR to `main` via GitHub
2. Build the app with `pnpm build`
3. Deploy the generated output using your chosen static/Start-compatible host
4. Verify the deployed site loads, routes, and preserves search-param state correctly

## Rollback

```bash
# Revert the merge commit
git revert <merge-commit-sha>
git push origin main
# Re-run the deployment pipeline for your host
```

## Troubleshooting

### Build Fails In CI Or Hosting

1. Check the build logs for the specific error
2. Try reproducing locally: `pnpm build`
3. Common causes: missing environment variables, type errors not caught locally

### Site Loads But Looks Broken

1. Check browser console for JavaScript errors
2. Verify CSS variables are loading (inspect `:root` styles)
3. Test in incognito mode (clear cache issues)
4. Compare with preview deployment from the PR

### Performance Issues

1. Check your host or bundle analyzer output
2. Look for unnecessary re-renders with React DevTools Profiler
3. Verify memoization is working (check useMemo/useCallback deps)
