# Tic-Tac-Toe

A responsive Next.js app with a modern UI, built using Tailwind CSS. Includes a reusable Navbar and Footer, and placeholder pages for game modes and About.

## Features
- Responsive layout with Navbar and Footer on all pages
- Navbar links: Home, Two Players, Play With System, About
- Footer with navigation links, social media icons (placeholders), and copyright
- Placeholder pages for Two Players, Play With System, and About
- Easy to extend and customize

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended)

### Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure
- `app/components/Navbar.tsx` - Responsive navigation bar
- `app/components/Footer.tsx` - Footer with links and social icons
- `app/page.tsx` - Home page (hero section currently empty)
- `app/two-players/page.tsx` - Two Players mode placeholder
- `app/play-with-system/page.tsx` - Play With System mode placeholder
- `app/about/page.tsx` - About page placeholder
- `app/layout.tsx` - Main layout with Navbar and Footer

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
