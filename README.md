# 🚚 Truck GPS - Poids Lourds Application

Monorepo for professional, real-world GPS dedicated to trucks (PL), built with open-source tools.

## Structure

- `backend/`: Node.js NestJS REST API
- `frontend/`: Vue3 (Options API) + Vite + PWA
- `shared/`: Shared Typescript types, logic
- `db/`: SQL migrations, seed data

## Getting Started

### 1. Install PNPM

```bash
npm install -g pnpm
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run everything (dev)

```bash
docker compose up --build
```

## Quality Standards

- Typescript everywhere
- ESLint + Prettier enforced
- Tests automated (Vitest + Jest)
- Clean, modular, maintainable code
- Auto-generated documentation (Swagger, JSDoc)
- Strict security, validation, error handling

## CI / CD

GitHub Actions: lint, build, test, coverage.

## Licence

Open Source, free APIs only.
