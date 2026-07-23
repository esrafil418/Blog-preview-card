# Frontend Mentor - Blog preview card solution

This is my solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). This challenge helped me practice HTML, CSS, and Tailwind CSS by building a card component.

## Overview

### The challenge

Users should be able to:

- See the card with a blog preview
- See hover and focus states for interactive elements (the title changes color)

### Screenshot

![Screenshot](public/Screenshot%202026-07-19%20085853.png)

### Links

- Solution URL: [frontendmentor.io](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS)
- Live Site URL: [my-blog-preview](https://my-blog-preview.surge.sh/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - For styling
- Custom fonts (Figtree)

## 📚 What I learned

While building this project, I practiced several useful Tailwind CSS techniques and improved my understanding of responsive layouts:

- Used `min-h-screen` with `flex items-center justify-center` on the `<main>` element to perfectly center the card both vertically and horizontally.
- Created a bold card shadow using `shadow-[8px_8px_0px_0px_#000000]` to match the design exactly.
- Styled the image with `rounded-xl h-full overflow-hidden` to maintain clean rounded corners and prevent overflow.
- Built the "Learning" badge using `text-sm font-bold bg-[#f6d050] rounded-md px-3 py-1 inline-block`, which keeps the badge only as wide as its content.
- Used `text-sm text-black/80` to create a subtle visual hierarchy for the publication date.
- Improved readability by applying `leading-relaxed max-w-xs` to the description text.
- Used Flexbox (`flex items-center`) to align the author's avatar and name neatly in a single row.
- Learned how to use Tailwind CSS v4's `@theme` directive to define a custom font (`Figtree`) and use it throughout the project.
- Practiced recreating a design from Figma with pixel-accurate spacing, typography, border radius, and shadows using Tailwind CSS utilities.
