# Derbyshire Ducks Website

Official website for the Derbyshire Ducks flag American football team.

## 🦆 About

This is the official website for the Derbyshire Ducks, Derby's premier flag American football team. The site showcases our team, schedule, and provides information for potential new members.

## 🎨 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

## 🎨 Brand Colors

- **Green**: `#026d47` - Primary team color
- **Purple**: `#5952c3` - Secondary team color
- **Gold**: `#ffd701` - Accent color

## 🏗️ Project Structure

The project follows BulletProof React architecture principles:

```
src/
├── components/          # Shared components
│   ├── ui/             # UI components (Button, Card, Input, etc.)
│   └── layout/         # Layout components (Header, Footer, Layout)
├── features/           # Feature-based modules
│   ├── home/          # Home page
│   ├── about/         # About page
│   ├── team/          # Team page
│   ├── schedule/      # Schedule page
│   └── contact/       # Contact page
├── lib/               # Utility functions
├── App.tsx            # Main app component with routing
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📧 Contact

- **Email**: derbyshireducks@gmail.com
- **Instagram**: [@derbyshire_ducks](https://www.instagram.com/derbyshire_ducks)

## 📝 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with team branding
- **Contact Form**: Easy way for interested players to get in touch
- **Schedule Display**: Upcoming games and past results
- **Team Information**: Details about positions and team structure
- **Social Integration**: Links to Instagram and email

## 🔧 Customization

To update content:

1. **Schedule**: Edit `src/features/schedule/components/schedule-page.tsx`
2. **Team Info**: Edit `src/features/team/components/team-page.tsx`
3. **About Content**: Edit `src/features/about/components/about-page.tsx`
4. **Contact Info**: Edit `src/features/contact/components/contact-page.tsx`

## 📄 License

© 2025 Derbyshire Ducks. All rights reserved.
