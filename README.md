# Next International Starter

<details open>
<summary><strong>English</strong></summary>

Production-ready Next.js template with Mantine UI, next-intl localization, React Query, and OpenAPI code generation via Kubb.

## Why This Template

This repository is a cleaned template extracted from a real project and prepared for reuse:

- Next.js 16 App Router foundation
- FSD-like layering: `app`, `processes`, `widgets`, `shared`
- Localized routes (`/en`, `/ru`) with `next-intl`
- Mantine-based layout and theming out of the box
- Typed API layer and hooks generated from OpenAPI
- Ready starter pages: Home, About, Docs

## Tech Stack

Core:

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

UI:

- [Mantine](https://mantine.dev/)
- [Tabler Icons](https://tabler-icons.io/)

Localization:

- [next-intl](https://next-intl.dev/)

Data and API:

- [TanStack Query](https://tanstack.com/query/latest)
- [Kubb](https://kubb.dev/) (`@kubb/core`, `@kubb/plugin-*`)

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and update values.

```bash
cp .env.example .env
```

Variables:

- `NEXT_PUBLIC_SITE_URL`: public site URL
- `NEXT_PUBLIC_API_URL`: runtime API base URL
- `API_DOCS_URL`: remote OpenAPI endpoint (used when `OPENAPI_PATH=remote`)
- `OPENAPI_PATH`: OpenAPI source for generation

`OPENAPI_PATH` options:

- `./openapi.json` (default local schema)
- `remote` (load schema from `API_DOCS_URL`)

## Scripts

- `npm run dev`: start local development server
- `npm run build`: production build
- `npm run start`: start production server
- `npm run lint`: run ESLint
- `npm run generate`: run Kubb generation

## Quick Start

1. Install dependencies
2. Configure `.env`
3. Run `npm run generate`
4. Run `npm run dev`
5. Open `http://localhost:3000`

## Architecture

Main layers:

- `src/app`: routing, locale layouts, metadata routes
- `src/processes`: app-level providers
- `src/widgets`: page views and layout widgets
- `src/shared`: shared infrastructure (api, i18n, theme)

Current routes:

- `/` -> redirect to default locale
- `/{locale}` -> Home
- `/{locale}/about` -> About
- `/{locale}/docs` -> Docs

## i18n

Config files:

- `src/shared/lib/i18n/routing.ts`
- `src/shared/lib/i18n/navigation.ts`
- `src/shared/lib/i18n/request.ts`

Translations:

- `public/locales/en/*.json`
- `public/locales/ru/*.json`

## API Layer

HTTP client:

- `src/shared/api/client.ts`

Generated output:

- `src/shared/api/generated`

Kubb config:

- `kubb.config.ts`

</details>

<details>
<summary><strong>Русский</strong></summary>

Подробный стартовый шаблон Next.js с Mantine UI, локализацией через next-intl, React Query и генерацией OpenAPI-клиента через Kubb.

## Зачем этот шаблон

Этот репозиторий — очищенный шаблон, выделенный из реального проекта и подготовленный для повторного использования:

- фундамент на Next.js 16 App Router
- FSD-подобное деление: `app`, `processes`, `widgets`, `shared`
- локализованные маршруты (`/en`, `/ru`) через `next-intl`
- готовый базовый макет и тема на Mantine
- типизированный API слой и хуки из OpenAPI
- стартовые страницы: Home, About, Docs

## Технологии

Базовые:

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

UI:

- [Mantine](https://mantine.dev/)
- [Tabler Icons](https://tabler-icons.io/)

Локализация:

- [next-intl](https://next-intl.dev/)

Data и API:

- [TanStack Query](https://tanstack.com/query/latest)
- [Kubb](https://kubb.dev/) (`@kubb/core`, `@kubb/plugin-*`)

## Установка

```bash
npm install
```

## Переменные окружения

Скопируй `.env.example` в `.env` и обнови значения.

```bash
cp .env.example .env
```

Переменные:

- `NEXT_PUBLIC_SITE_URL`: публичный URL сайта
- `NEXT_PUBLIC_API_URL`: базовый URL API для runtime
- `API_DOCS_URL`: удалённый OpenAPI endpoint (используется при `OPENAPI_PATH=remote`)
- `OPENAPI_PATH`: источник OpenAPI для генерации

Варианты `OPENAPI_PATH`:

- `./openapi.json` (локальная схема по умолчанию)
- `remote` (схема берётся из `API_DOCS_URL`)

## Скрипты

- `npm run dev`: запуск dev-сервера
- `npm run build`: production-сборка
- `npm run start`: запуск production-сервера
- `npm run lint`: запуск ESLint
- `npm run generate`: генерация Kubb

## Быстрый старт

1. Установи зависимости
2. Настрой `.env`
3. Запусти `npm run generate`
4. Запусти `npm run dev`
5. Открой `http://localhost:3000`

## Архитектура

Основные слои:

- `src/app`: роутинг, locale layouts, metadata routes
- `src/processes`: app-level providers
- `src/widgets`: page views и layout-виджеты
- `src/shared`: общая инфраструктура (api, i18n, theme)

Текущие маршруты:

- `/` -> редирект на locale по умолчанию
- `/{locale}` -> Home
- `/{locale}/about` -> About
- `/{locale}/docs` -> Docs

## i18n

Конфиги:

- `src/shared/lib/i18n/routing.ts`
- `src/shared/lib/i18n/navigation.ts`
- `src/shared/lib/i18n/request.ts`

Переводы:

- `public/locales/en/*.json`
- `public/locales/ru/*.json`

## API слой

HTTP-клиент:

- `src/shared/api/client.ts`

Сгенерированные файлы:

- `src/shared/api/generated`

Конфиг генерации:

- `kubb.config.ts`

</details>
