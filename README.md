# TS Environment Technology - Modern Replica

A modern, responsive website replica of [TS Environment Technology](https://tsenvironment.com/) built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

-   **Modern Design**: Clean, professional design with environmental theme colors
-   **Responsive Layout**: Fully responsive across all devices
-   **TypeScript**: Full type safety throughout the application
-   **shadcn/ui**: Modern, accessible UI components
-   **Performance Optimized**: Built with Next.js 15 for optimal performance
-   **SEO Ready**: Proper metadata and semantic HTML structure

## 🛠️ Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **Icons**: Lucide React
-   **Animations**: Framer Motion (ready for implementation)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── footer.tsx            # Footer component
│   ├── header.tsx            # Header component
│   ├── hero.tsx              # Hero section
│   ├── projects.tsx          # Projects section
│   └── services.tsx          # Services section
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design Features

### Color Scheme

-   **Primary**: Environmental green tones
-   **Secondary**: Complementary blue accents
-   **Background**: Clean, light backgrounds with subtle gradients
-   **Dark Mode**: Ready for implementation

### Components

-   **Header**: Sticky navigation with dropdown menus
-   **Hero**: Eye-catching hero section with call-to-action
-   **Services**: Card-based service showcase
-   **Projects**: Interactive project gallery
-   **Footer**: Comprehensive footer with contact information

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tsenvironment-replica
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

### Home Page (`/`)

-   Hero section with main message
-   Services overview
-   Featured projects
-   Company statistics

### About Page (`/about`)

-   Company story and history
-   Key facts and achievements
-   Mission and vision
-   Certifications

### Contact Page (`/contact`)

-   Contact form
-   Contact information
-   Business hours
-   Location details

## 🎯 Key Features Replicated

### From Original Website

-   ✅ Company branding and messaging
-   ✅ Service offerings (Consulting, Training, ESG)
-   ✅ Featured projects showcase
-   ✅ Contact information
-   ✅ Professional navigation structure

### Modern Improvements

-   ✅ Responsive design
-   ✅ Modern UI/UX patterns
-   ✅ Improved typography
-   ✅ Better visual hierarchy
-   ✅ Enhanced accessibility
-   ✅ Performance optimizations

## 🔧 Customization

### Colors

Edit `src/app/globals.css` to modify the color scheme:

```css
:root {
    --primary: oklch(0.25 0.15 160); /* Environmental green */
    --secondary: oklch(0.95 0.02 120); /* Light background */
    /* ... other colors */
}
```

### Content

Update content in respective component files:

-   `src/components/hero.tsx` - Hero section content
-   `src/components/services.tsx` - Services information
-   `src/components/projects.tsx` - Project details
-   `src/components/footer.tsx` - Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints:

-   **Mobile**: < 768px
-   **Tablet**: 768px - 1024px
-   **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

-   Netlify
-   Railway
-   DigitalOcean App Platform
-   AWS Amplify

## 📄 License

This project is a replica for educational/demonstration purposes. The original TS Environment Technology website content and branding belong to their respective owners.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact the development team.

---

**Note**: This is a modern replica of the TS Environment Technology website. All original content and branding rights belong to TS Environment Technology PLC.

---

_Last updated: August 14, 2024 - Staging branch deployment trigger_
