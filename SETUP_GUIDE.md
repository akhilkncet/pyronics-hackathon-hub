# Quick Start Guide for PYRONIX 2K26 React

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Setup Steps

### 1. Navigate to the project directory
```bash
cd "PYRONIX 2K26\YATRA-react"
```

### 2. Install dependencies
```bash
npm install
```

### 3. (Optional) Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` to add your Google Forms URLs and other configuration.

### 4. Start the development server
```bash
npm run dev
```

The application will automatically open at http://localhost:5173

### 5. (Optional) Build for production
```bash
npm run build
npm run preview
```

## Key Features

- 🎨 Neon-themed UI with smooth animations
- ⏱️ Live countdown timer to the event
- 🎪 Event management and filtering
- 🎟️ Pass registration system
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🔒 Type-safe with TypeScript

## Project Structure

- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/styles/` - CSS files
- `src/constants.ts` - Site configuration and event data
- `src/utils.ts` - Utility functions

## Customization

### Update Site Information
Edit `src/constants.ts`:
- `SITE_INFO` - Event details
- `FORMS` - Google Forms URLs
- `EVENT_DATABASE` - Event listings
- `PASSES` - Pass options

### Modify Styling
Edit files in `src/styles/`:
- `global.css` - Global styles and color variables
- Other CSS files for specific components

## Common Issues

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### React Router not working
Make sure `react-router-dom` is installed:
```bash
npm install react-router-dom@^6.24.1
```

## Deployment

### To Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### To Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deployment is automatic

### To GitHub Pages (with client-side routing)
```bash
npm run build
```
Upload `dist` folder contents to GitHub Pages

## Support

For issues or questions, refer to:
- React documentation: https://react.dev
- Vite documentation: https://vitejs.dev
- React Router documentation: https://reactrouter.com

Happy hacking! 🚀
