# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` (React + TypeScript).
- Pages: `src/pages/` (e.g., `Index.tsx`, `NotFound.tsx`). Routes are declared in `src/App.tsx` using `react-router-dom`.
- Components: `src/components/` (feature components like `Navbar.tsx`, `Hero.tsx`).
- UI Kit: `src/components/ui/` (shadcn/ui primitives, kebab-case filenames, PascalCase exports).
- Hooks: `src/hooks/` (e.g., `use-mobile.tsx`).
- Utilities: `src/lib/utils.ts`.
- Static assets: `public/`. Entry HTML: `index.html`.
- Path alias: use `@/*` for imports from `src/*` (see `tsconfig.json`).

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server with HMR.
- `npm run build`: Production build to `dist/`.
- `npm run build:dev`: Development-mode build for quick checks.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint (TypeScript + React rules).

## Coding Style & Naming Conventions
- Language: TypeScript, React function components.
- Filenames: components `PascalCase.tsx` (e.g., `Footer.tsx`); UI primitives in `ui/` use kebab-case (e.g., `alert-dialog.tsx`); hooks `use-*.ts(x)`; utilities `camelCase.ts`.
- Imports: prefer `@/...` over deep relative paths.
- Linting: ESLint configured in `eslint.config.js` (includes react-hooks). Fix issues or justify in PR.

## Testing Guidelines
- No test runner configured yet. For changes, include manual verification steps (route, expected behavior, screenshots for UI).
- Recommended future setup: Vitest + React Testing Library; name tests `*.test.ts(x)` near the code.

## Commit & Pull Request Guidelines
- Commits: concise, imperative; prefer Conventional Commits when possible (`feat:`, `fix:`, `chore:`, `refactor:`). Group related changes.
- PRs must include: summary, linked issue (if any), screenshots/GIFs for UI, steps to validate locally (`npm run dev`, route to page), and any risks/rollbacks.

## Security & Configuration Tips
- Do not commit secrets. Store runtime config via environment when introduced.
- Keep imports using the `@` alias consistent. Avoid circular deps.
- Tailwind lives in `tailwind.config.ts`; add classes conservatively and prefer existing UI primitives.

## Architecture Overview
- Stack: Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, React Router, TanStack Query, Sonner/Toaster for toasts.
- App shell: providers and routes in `src/App.tsx`; app bootstrapped in `src/main.tsx`.
