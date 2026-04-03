# 🎨 The Storybook Setup – Component Driven Development Project

This document records how AI tools were used during the development of the Storybook Design System project (Week 12 Internship Assignment).

## 🧠 Project Understanding & Component-Driven Development

**Prompt style used:**
> "Explain what Storybook is and how component-driven development works in React/Next.js step by step."

**Purpose:**
- Understand why companies build components in isolation
- Learn the concept of reusable UI components
- Understand difference between page-based vs component-based development
- Learn how Storybook acts as a UI development environment
- Build mindset of scalable frontend architecture

## ⚙️ Storybook Setup & Configuration (Level 1 – Phase 1)

**Prompt style used:**
> "How to install and configure Storybook in an existing Next.js/React project step by step?"

**Purpose:**
- Initialize Storybook using CLI
- Understand `.storybook` folder structure
- Learn purpose of `main.ts` and `preview.tsx`
- Configure Storybook to run independently from main app
- Remove default demo stories safely
- Verify Storybook UI is working on localhost

## 🧩 Component Creation (Level 1 – Phase 2)

**Prompt style used:**
> "How to design reusable React components like Button, Input, and ProductCard using props?"

**Purpose:**
- Build components independent of pages
- Learn prop-based design for reusability
- Structure components in scalable folders
- Understand separation of logic and UI
- Focus on clean and maintainable component architecture

## 📚 Story Creation & Isolation Testing (Level 1 – Phase 3)

**Prompt style used:**
> "How to create Storybook stories for React components and test them in isolation?"

**Purpose:**
- Learn what a "Story" represents
- Render components independently in Storybook
- Create multiple stories for different states
- Validate UI without running full application
- Improve debugging and UI testing workflow

## 🎛️ Component Variants & Args (Level 2 – Phase 1)

**Prompt style used:**
> "How to use args in Storybook to create dynamic and interactive component variants?"

**Purpose:**
- Replace hardcoded values with props
- Enable Storybook controls panel
- Create interactive component variations
- Test different states like primary, secondary, disabled
- Improve flexibility and developer experience

## 🌗 Dark Mode & UI Preview (Level 2 – Phase 2)

**Prompt style used:**
> "How to configure Storybook to preview components in light mode and dark mode?"

**Purpose:**
- Test UI consistency across themes
- Configure background and theme switching
- Ensure components look correct in all modes
- Improve design quality and accessibility awareness

## 🚀 Static Build & Deployment (Level 3 – Phase 1)

**Prompt style used:**
> "How to build Storybook as a static application and deploy it on Vercel?"

**Purpose:**
- Generate static Storybook build using `build-storybook`
- Understand difference between dev and production build
- Configure deployment settings (build command, output directory)
- Deploy design system independently from main app
- Share live UI library with others

## 🐞 Debugging & Build Error Resolution

**Prompt style used:**
> "Why is my Storybook build failing and how do I fix common errors like favicon issues or config errors?"

**Issues Encountered:**
- Storybook build failure (exit code 1)
- Favicon/static directory bugs (`..\public` vs `../public` on Linux)
- Dependency conflicts
- Tailwind styles not loading in Storybook

**Purpose:**
- Debug build issues step by step
- Understand Storybook configuration deeply
- Fix environment and dependency problems
- Learn structured debugging approach

---

## 🧠 Overall Reflection

Using AI as a structured learning assistant helped me:
- Understand component-driven development deeply
- Learn how real-world frontend systems are designed
- Build reusable and scalable UI components
- Debug Storybook setup and build issues independently
- Improve project structure and code organization
- Think like a frontend engineer instead of just building pages

> [!NOTE]
> **Final Note:** AI tools were used to understand concepts, debug issues, and refine component architecture. All components, stories, and configurations were implemented after reasoning and validation to ensure genuine understanding and professional development.
