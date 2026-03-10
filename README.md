# PYRONIX 2K26 - React Version

This is a complete React conversion of the PYRONIX 2K26 symposium website. The website features a modern, neon-themed design with smooth animations and interactive components.

## Project Structure

```
YATRA-react/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              - Navigation bar component
│   │   ├── Footer.tsx              - Footer component
│   │   ├── Hero.tsx                - Hero section with countdown timer
│   │   └── EventGrid.tsx           - Event grid display component
│   ├── pages/
│   │   ├── Home.tsx                - Home/landing page
│   │   ├── Events.tsx              - Events listing page
│   │   ├── FunEvents.tsx           - Fun events page
│   │   ├── Passes.tsx              - Pass registration page
│   │   ├── Coordinators.tsx        - Coordinators page
│   │   ├── FAQ.tsx                 - FAQ page
│   │   └── Contact.tsx             - Contact page
│   ├── styles/
│   │   ├── global.css              - Global styles and animations
│   │   ├── navbar.css              - Navbar styles
│   │   ├── footer.css              - Footer styles
│   │   ├── hero.css                - Hero section styles
│   │   ├── pages.css               - Page-specific styles
│   │   └── passes.css              - Pass card styles
│   ├── App.tsx                     - Main app component with router
│   ├── main.tsx                    - React entry point
│   ├── constants.ts                - Site constants and event database
│   └── utils.ts                    - Utility functions
├── index.html                      - HTML entry point
├── package.json                    - Dependencies and scripts
├── vite.config.ts                  - Vite configuration
└── tsconfig.json                   - TypeScript configuration
```

## Installation

1. Navigate to the YATRA-react directory:
```bash
cd "PYRONIX 2K26\YATRA-react"
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Features

### Pages
- **Home**: Landing page with countdown timer, about section, and featured events
- **Events**: Complete list of technical and non-technical events
- **Fun Events**: Fun and entertainment events
- **Passes**: Pass registration system with three tiers (Ruby, Emerald, Topaz)
- **Coordinators**: Event coordinators information
- **FAQ**: Frequently asked questions
- **Contact**: Contact form and location information

### Components
- **Navbar**: Sticky navigation with mobile responsive hamburger menu
- **Hero Section**: Dynamic countdown timer with neon styling
- **Event Grid**: Animated grid display of events with filtering
- **Footer**: Site footer with copyright information

### Design Features
- Neon Vice City inspired color scheme
- Smooth animations and transitions
- Responsive design for mobile, tablet, and desktop
- Intersection Observer for lazy animations
- Glass morphism effects
- Gradient overlays and glows

## Key Technologies

- **React 19**: UI framework
- **React Router v6**: Client-side routing
- **TypeScript**: Type safety
- **Vite**: Build tool
- **CSS3**: Animations and styling

## Configuration

### Site Constants
Edit `src/constants.ts` to modify:
- Site name and event details (`SITE_INFO`)
- Google Forms URLs for registration (`FORMS`)
- Event database (`EVENT_DATABASE`)
- Pass options (`PASSES`)

### Styling
All styles are in the `src/styles/` directory. Customize colors in `global.css` by modifying the CSS custom properties (variables) defined in `:root`.

## Features Implemented

✅ Responsive Navigation
✅ Countdown Timer
✅ Event Listings with Filtering
✅ Pass Registration System
✅ Contact Form with Local Storage
✅ Smooth Animations
✅ Mobile-Friendly Design
✅ TypeScript Support
✅ Modular Component Structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

### Adding New Pages
1. Create a new component in `src/pages/`
2. Import it in `App.tsx`
3. Add a route in the Routes component

### Styling Components
- Global styles: `src/styles/global.css`
- Component-specific styles: Create corresponding CSS file in `src/styles/`
- Use CSS custom properties for consistency

### State Management
Current implementation uses React hooks for local state. For more complex state management, consider adding Redux or Zustand.

## Deployment

The project can be deployed to:
- Vercel
- Netlify
- GitHub Pages (with client-side routing configuration)
- Any static hosting service

Build output will be in the `dist/` directory.

## License

This project is proprietary to Kongunadu College of Engineering and Technology.

## Contact

For issues or contributions, contact the development team.
