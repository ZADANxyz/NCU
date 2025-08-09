# AI Rules for New Covenant University Application

This document outlines the core technologies used in this project and provides guidelines for their usage.

## Tech Stack Overview

*   **React:** The primary JavaScript library for building user interfaces.
*   **TypeScript:** Used for type safety across the entire codebase, enhancing maintainability and catching errors early.
*   **Vite:** The build tool for a fast development experience and optimized production builds.
*   **React Router:** Manages client-side routing, with all main routes defined in `src/App.tsx`.
*   **Tailwind CSS:** The utility-first CSS framework for all styling. Prioritize Tailwind classes for responsive and consistent design.
*   **shadcn/ui & Radix UI:** A collection of accessible and customizable UI components. shadcn/ui components are pre-built on Radix UI primitives.
*   **Lucide React:** Provides a comprehensive set of customizable SVG icons.
*   **Supabase:** The backend-as-a-service for authentication, database interactions, and serverless edge functions.
*   **Tanstack Query (React Query):** Manages server state, including data fetching, caching, and synchronization.
*   **React Hook Form & Zod:** Used together for robust form management and validation.
*   **Sonner / Radix UI Toast:** For displaying user notifications and feedback.
*   **Hugging Face Transformers.js:** Integrated for client-side AI/ML tasks, specifically for image background removal.

## Library Usage Guidelines

*   **React:** All UI should be built using React components.
*   **TypeScript:** Always use TypeScript for new files and when modifying existing ones. Ensure strong typing for props, state, and functions.
*   **React Router:** Define all top-level routes within `src/App.tsx`.
*   **Tailwind CSS:** Apply styling exclusively through Tailwind CSS classes. Avoid inline styles or separate CSS files unless absolutely necessary for complex custom animations or third-party library overrides.
*   **shadcn/ui & Radix UI:**
    *   Utilize existing shadcn/ui components whenever possible.
    *   **Do not modify the source files of shadcn/ui components** (e.g., files in `src/components/ui/`). If a component needs custom behavior or styling beyond what Tailwind allows, create a new component file (e.g., `src/components/MyCustomButton.tsx`) and compose or wrap the shadcn/ui component within it.
*   **Lucide React:** Use Lucide React for all icons.
*   **Supabase:**
    *   For authentication (login, signup, user sessions), use the `@supabase/supabase-js` client.
    *   For database operations (fetching, inserting, updating data), use the Supabase client.
    *   For server-side logic or API calls that require secrets (e.g., Google Places API key), implement them as Supabase Edge Functions.
*   **Tanstack Query:** Use `useQuery` and `useMutation` hooks for managing asynchronous data operations and their states.
*   **React Hook Form & Zod:** Combine these for all form implementations. Define schemas with Zod for validation and use React Hook Form for state management and submission.
*   **Sonner / Radix UI Toast:** Use the `useToast` hook (from `src/hooks/use-toast.ts`) for displaying user notifications.
*   **Hugging Face Transformers.js:** Use the `pipeline` function for running pre-trained AI models directly in the browser, as demonstrated in `src/utils/backgroundRemoval.ts`.
*   **Google Maps:** For embedding maps, use `iframe` elements. If more interactive map features are required, the `@googlemaps/google-maps-services-js` library is available for client-side API interactions.

## File Structure Guidelines

*   **Components:** All reusable UI components should reside in `src/components/`.
*   **Pages:** Top-level views corresponding to routes should be in `src/pages/`.
*   **Utilities:** Helper functions and services should be placed in `src/utils/`.
*   **Contexts:** React Context providers should be in `src/contexts/`.
*   **Hooks:** Custom React hooks should be in `src/hooks/`.
*   **Integrations:** Third-party service integrations (like Supabase client) should be in `src/integrations/`.