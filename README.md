## Getting Started

Run following on root of project:

```bash
yarn install
yarn dev
```

---

## What's Inside?

This Turborepo includes the following apps and packages:

### **📦 Apps**

* **`web`** - A Next.js app for the frontend ([Next.js Docs](https://nextjs.org/docs))
* **`api`** - An Express.js app for the backend ([Express.js Docs](https://expressjs.com))

### **📚 Shared Packages**

* **`@repo/ui`** - A React component library shared across the monorepo
* **`@repo/eslint-config`** - Shared ESLint configuration for consistent linting across packages
* **`@repo/typescript-config`** - Shared TypeScript configurations for consistency

---

## 🚀 Key Features

* **Monorepo Efficiency**: Manage multiple apps and packages with a single codebase.
* **Next.js Frontend**: Fast and SEO-friendly frontend with TypeScript support.
* **Express.js Backend**: Robust API backend with full TypeScript support.
* **Reusable Components**: Centralized UI library for consistent design and reduced code duplication.
* **Consistent Code Quality**: Shared ESLint and TypeScript configurations.
* **Optimized Builds**: Blazing-fast build speeds with Turborepo caching.

---

## 📦 Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/your-repo/turborepo-starter.git
cd turborepo-starter
yarn install
```

---

## 📄 Scripts

Here are some useful scripts for development:

* **`yarn dev`** - Start both the Next.js frontend and Express.js backend
* **`yarn build`** - Build all apps and packages
* **`yarn lint`** - Run ESLint across the entire monorepo
* **`yarn check-types`** - Run TypeScript type checking

---

## 📁 Directory Structure

```
apps/
├── web/        # Next.js frontend
└── api/        # Express.js backend
packages/
├── ui/         # Shared React component library
├── supabase/   # Database 
├── eslint-config/ # Shared ESLint config
└── typescript-config/ # Shared TypeScript config
```

---

## 📂 Setup Database

This section is for users who have just cloned the repository and need to set up the local database. This project uses Supabase for database management, with migrations handled through the Supabase CLI. Follow these steps to get your database up and running.


---

## 📂 Contributing

If you find a bug or have a feature request, please open an issue or submit a pull request.

---

## 🤝 License

This project is licensed under the MIT License.
