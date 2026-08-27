# Beginner Guide

## What Is A Website Project?

A website project is a group of files that work together:

- **HTML** provides the document structure.
- **CSS** controls appearance and layout.
- **JavaScript** controls behavior.
- **React** helps organize JavaScript into reusable components.
- **TypeScript** adds names and rules for the data used by JavaScript.

This project uses React and TypeScript, so most page work happens in `.tsx` files.

## What Is React?

React lets you describe what the screen should look like using components. A component is a reusable function that returns JSX.

For example:

```tsx
function Greeting() {
  return <h1>Hello</h1>
}
```

JSX looks like HTML, but it is written inside TypeScript. React turns it into browser elements.

## What Is A Component?

A component is a named piece of the interface. This project has components such as `SiteHeader`, `HomePage`, and `PageTemplate`.

A component can:

- display text and images
- use other components
- receive data through props
- respond to user actions

`PageTemplate` receives a title, introduction, and sections. That lets several pages share one layout.

## What Is TypeScript?

TypeScript is JavaScript with optional type information. The type on `PageTemplate` describes the shape of the data it expects:

```tsx
{
  title: string
  intro?: string
  sections: Array<{ heading: string; paragraphs: string[] }>
}
```

This tells you that `title` must be text, `intro` is optional text, and `sections` is a list of objects containing a heading and a list of paragraphs.

When TypeScript reports an error, read it as a helpful description of what does not match the expected shape.

## What Is CSS?

CSS selects elements and gives them visual rules:

```css
.brand {
  color: #a92525;
  font-size: 1.5rem;
}
```

This selects the element with the `brand` class and changes its text color and size.

A class begins with a dot in CSS and appears as `className="brand"` in JSX. React uses `className` instead of HTML's `class` attribute.

## What Is A Route?

A route connects a browser URL to a React component:

```tsx
<Route path="/symptoms" element={<SymptomsPage />} />
```

When the browser visits `/symptoms`, React renders `SymptomsPage`.

## A Safe Editing Loop

1. Start the site with `npm run dev`.
2. Open the local URL in your browser.
3. Make one small change.
4. Save the file.
5. Check the browser.
6. Read the terminal for errors.
7. Run `npm run lint`.
8. Run `npm run build` before committing.

Small changes are easier to understand and easier to undo.

## How To Learn The Repository

When you do not understand something:

1. Find where it appears in the browser.
2. Search for its visible text in `src/App.tsx`.
3. Inspect the nearby JSX.
4. Search for its CSS class in `src/App.css`.
5. Change one small thing and observe the result.

This is a normal developer workflow. You learn by connecting visible behavior to the code that controls it.

## Common Terms

- **Dependency**: a package installed by npm, such as React.
- **Component**: a reusable React function.
- **JSX**: HTML-like syntax inside a React file.
- **Prop**: data passed from one component to another.
- **Route**: a URL-to-component mapping.
- **Build**: the optimized files created for deployment.
- **Lint**: an automated check for common coding mistakes.
- **Repository**: a project folder tracked by Git.
- **Commit**: a named saved change in Git.
