# Haiyan Hossain - Full Stack Developer Portfolio

A professional, modern portfolio website built with Next.js 14, React 18, and Tailwind CSS showcasing projects, skills, and blog articles.

## 🌐 Live Demo

Your portfolio is deployed and live! Visit your website to see it in action.

## ✨ Features

### 📱 Responsive Design
- Mobile-first approach
- Works perfectly on all devices (mobile, tablet, desktop)
- Fast loading and smooth performance

### 🎨 Professional Design
- Clean, modern light theme
- Professional typography (Segoe UI)
- Beautiful color scheme with blue accents
- Smooth animations and transitions

### 📋 Sections
1. **Navigation Header** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching introduction
3. **About Section** - Professional bio and comprehensive skills listing
4. **Projects Section** - Showcase of 6 featured projects
5. **Blog Section** - Latest articles and technical content
6. **Footer** - Complete contact information and social links

### 🛠️ Technology Stack
- **Frontend**: React 18, Next.js 14, Tailwind CSS
- **Styling**: CSS3, Responsive Design
- **Fonts**: Segoe UI (Professional)
- **Performance**: Optimized for fast loading

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/haiyanhossain/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization Guide

### Update Your Information

#### In `pages/index.js`
- Change page title and meta description
- Update OG (Open Graph) tags for social sharing

#### In `components/Hero.js`
- Update your name
- Change professional title
- Modify introduction text

#### In `components/About.js`
- Update your bio
- Modify the about section text
- Update Frontend, Backend, and Tools skills lists

#### In `components/Projects.js`
- Add your real projects
- Update project descriptions
- Modify technologies used
- Add project links (GitHub, live demo, etc.)

#### In `components/Blog.js`
- Add your blog posts
- Update titles and excerpts
- Modify dates and read times
- Add blog post links

#### In `components/Footer.js`
- Update your email address
- Add your GitHub profile URL
- Add your LinkedIn profile URL
- Add your Twitter/X profile URL
- Modify contact information

## 📦 Project Structure

```
portfolio/
├── pages/
│   ├── _app.js              # Main app wrapper
│   └── index.js             # Home page
├── components/
│   ├── Header.js            # Navigation header
│   ├── Hero.js              # Welcome section
│   ├── About.js             # About & Skills
│   ├── Projects.js          # Projects showcase
│   ├── Blog.js              # Blog section
│   └── Footer.js            # Footer & Contact
├── styles/
│   └── globals.css          # Global styles
├── public/
│   └── favicon.ico          # Website icon
├── package.json             # Dependencies
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
└── postcss.config.js        # PostCSS config
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Configure environment variables if needed
5. Click "Deploy"

Vercel will automatically detect Next.js and deploy with optimal settings.

### Deploy to GitHub Pages

1. Update `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  reactStrictMode: true,
};
```

2. Build the project:
```bash
npm run build
```

3. The `out` folder contains static files ready for deployment

### Build for Production

```bash
npm run build
npm run start
```

## 🎯 SEO Optimization

- Meta tags for search engines
- Open Graph tags for social sharing
- Mobile-friendly responsive design
- Fast loading performance
- Semantic HTML structure

## 📝 License

MIT License - Feel free to use this portfolio template for your own projects!

## 🤝 Support

For questions, issues, or suggestions, please open an issue on GitHub.

## 📞 Contact

- Email: hello@example.com
- GitHub: [github.com/haiyanhossain](https://github.com/haiyanhossain)
- LinkedIn: [linkedin.com/in/haiyanhossain](https://linkedin.com/in/haiyanhossain)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
