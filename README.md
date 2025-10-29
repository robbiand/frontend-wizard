# 🚀 React + TypeScript + Vite Project

This project is a **React** application built with **Vite** for lightning-fast development, **TypeScript** for type safety, and **Vitest** for testing.  
It also uses **JSON Server** to simulate backend APIs during development.

---

## 🧩 Tech Stack

| Technology | Description |
|-------------|--------------|
| ⚡ [Vite](https://vitejs.dev/) | A blazing-fast build tool for modern frontend development |
| ⚛️ [React](https://react.dev/) | A JavaScript library for building user interfaces |
| 🧠 [TypeScript](https://www.typescriptlang.org/) | A superset of JavaScript that adds static typing |
| 🧪 [Vitest](https://vitest.dev/) | A fast unit testing framework for Vite |
| 🌐 [JSON Server](https://github.com/typicode/json-server) | A mock REST API for simulating backend data |
| 🧹 [ESLint](https://eslint.org/) | A linter to maintain code consistency and quality |

---

## 🛠️ Installation

Make sure you have **Node.js (>=18)** and **npm/pnpm/yarn** installed.

```bash
# Clone the repository
git clone https://github.com/username/repository-name.git

# Navigate to the project folder
cd repository-name

# Install dependencies
npm install
```

---

## 🚀 Running the Project

### Development Mode

Run the following command to start the React app along with two instances of **JSON Server**:

```bash
npm run serve
```

- Frontend: **http://localhost:5173**
- Mock API Step 1: **http://localhost:4001**
- Mock API Step 2: **http://localhost:4002**

---

### Production Build

To create a production-ready build:

```bash
npm run build
```

The output will be available in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

---

### Run JSON Server Only

If you only need one of the mock servers running:

```bash
# Step 1
npm run json:step1

# Step 2
npm run json:step2
```

---

## 🧪 Testing

This project uses **Vitest** with the `jsdom` environment.

Run all tests:

```bash
npm test
```

Or enable watch mode:

```bash
npm run test -- --watch
```

---

## 🧹 Linting

To ensure code consistency and quality, run:

```bash
npm run lint
```

---

## 📁 Project Structure (Example)

```
.
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│   └── style.css
├── data/
│   ├── db-step1.json
│   └── db-step2.json
├── public/
├── tsconfig.json
├── vite.config.ts
└── package.json
```
---

## 🧑‍💻 Author

Made with ❤️ by [**Andrian Robby**](https://github.com/andrianrobby)
