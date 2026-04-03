# UI Library – Storybook Design System

A modern Component-Driven UI Library built using React/Next.js and Storybook.
This project demonstrates how scalable frontend systems are built in real-world companies by developing reusable components in isolation.

## 🚀 Features
**✅ Level 1 – Component Development (Core Requirement)**
- Storybook setup integrated into Next.js project
- Components built and tested in isolation
- Created reusable UI components:
  - Button
  - Input Field
  - Product Card
- Independent Storybook UI dashboard (runs without main app)

**✅ Level 2 – Component Variants & Controls**
- Dynamic props (args) configured in Storybook
- Interactive control panel for live component changes
- Button supports:
  - Primary
  - Secondary
  - Disabled states
- Improved component reusability and flexibility

**✅ Level 3 – Deployment & Design System**
- Storybook built as a static application
- Deployed as a standalone design system
- Accessible via live URL
- Enables team collaboration and UI review without running main app

## 🧠 Key Design Decisions
- **Component-Driven Development:** Built components independently before integrating into UI
- **Separation of Concerns:** Components are isolated from application logic
- **Reusable Architecture:** Components designed with props for scalability
- **Storybook as Source of Truth:** Acts as a visual documentation system
- **Design Consistency:** Ensures UI uniformity across the application

## 📂 Project Structure
```text
your-project/
│
├── .storybook/                 # Storybook configuration
│   ├── main.ts
│   └── preview.tsx             # Modified as TSX to support internal React context hooks
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx
│   │   │
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.stories.tsx
│   │   │
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductCard.stories.tsx
│
├── public/
├── package.json
├── README.md
├── prompts.md
```

## 🛠️ Technologies Used
- **Framework:** Next.js / React
- **Component Dev Tool:** Storybook
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## 🧪 How to Run Locally

1️⃣ **Clone the repository:**
```bash
git clone <your-repo-url>
cd your-project
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Run Storybook:**
```bash
npm run storybook
```
👉 **Storybook runs at:** http://localhost:6006

## 🚀 Deployment

Storybook is deployed as a static site:
```bash
npm run build-storybook
```

Then deployed using Vercel with:
- **Build Command:** `npm run build-storybook`
- **Output Directory:** `storybook-static`

### 🌐 Live Design System
[https://vercel.com/krishnakohli2004-1655s-projects/storybook](https://vercel.com/krishnakohli2004-1655s-projects/storybook)

## 🤖 AI Assistance Disclaimer
AI tools were used for:
- Understanding Storybook setup and configuration
- Debugging build and dependency issues
- Structuring reusable components
- Improving project architecture and documentation

All implementation decisions were tested, modified, and understood manually.
Detailed prompt usage is documented in `prompts.md`.

---
**👨‍💻 Author**

**Krishna Kumar**
*Frontend Developer Intern – Prodesk*
