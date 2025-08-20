# Ahmet Batuhan Baykal - Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 📱 **Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🔧 **TypeScript** - Full type safety and better development experience

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Personal information and philosophy
- **Experience** - Work experience and professional background
- **Education** - Academic background and certifications
- **Projects** - Showcase of featured work
- **Skills** - Technical expertise and proficiency levels
- **Contact** - Contact form and information
- **Header/Footer** - Navigation and additional links

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project-bolt-sb1-v6tmsntu
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

This portfolio has been customized for Ahmet Batuhan Baykal with the following information:

- **Name**: Ahmet Batuhan Baykal
- **Title**: Software Engineer & Full-Stack Developer
- **Location**: Istanbul, Turkey
- **GitHub**: https://github.com/batuhanbaykal
- **LinkedIn**: https://www.linkedin.com/in/batuhan-baykal-b74263240/

### Styling

- Colors and themes can be customized in `tailwind.config.js`
- Custom CSS is in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Images

- Replace placeholder images with your own
- Update image URLs in the respective component files
- Optimize images for web use

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form and info
│   ├── Education.tsx   # Education and certifications
│   ├── Experience.tsx  # Work experience
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure your domain

### GitHub Pages

1. Build your project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch
3. Configure GitHub Pages in your repository settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.
