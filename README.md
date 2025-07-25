# Bilingual QR-Scan Digital Menu

A beautiful, mobile-first digital menu for cafés and restaurants with seamless English/Albanian language switching.

## 🌟 Features

- **Bilingual Support**: Instant switching between English 🇬🇧 and Albanian 🇦🇱
- **Mobile-First Design**: Optimized for one-handed mobile use
- **Beautiful UI**: Warm, cozy color palette with smooth animations
- **QR-Code Ready**: Fast loading, perfect for table scanning
- **Categories**: Starters, Main Courses, Desserts, Drinks
- **Interactive Elements**: Call Waiter & Request Bill buttons
- **Responsive**: Works perfectly on all screen sizes

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cafe-menu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # App header with branding
│   ├── LanguageToggle.tsx # Language switcher
│   ├── CategoryList.tsx  # Category navigation
│   ├── MenuItemCard.tsx  # Individual menu items
│   └── StickyBottomBar.tsx # Call waiter/bill buttons
├── data/
│   └── menuData.ts      # Menu content (bilingual)
├── types/
│   └── menu.ts          # TypeScript interfaces
└── App.tsx              # Main application component
```

## 🔧 Customization

### Adding New Menu Items

Edit `src/data/menuData.ts`:

```typescript
{
  id: 'new-item',
  name: {
    en: 'English Name',
    al: 'Albanian Name'
  },
  description: {
    en: 'English description',
    al: 'Albanian description'
  },
  price: 12.50,
  imageUrl: 'https://your-image-url.com/image.jpg' // Optional
}
```

### Adding New Categories

Add to the `categories` array in `menuData.ts`:

```typescript
{
  id: 'new-category',
  name: {
    en: 'New Category',
    al: 'Kategori e Re'
  },
  items: [/* your items */]
}
```

### Changing Restaurant Information

Update the `titles` object in `src/components/Header.tsx`:

```typescript
const titles = {
  en: {
    name: 'Your Restaurant Name',
    subtitle: 'Your • Restaurant • Tagline'
  },
  al: {
    name: 'Emri i Restorantit',
    subtitle: 'Tagline • Në • Shqip'
  }
};
```

### Adding Real Images

Replace the placeholder URLs in `menuData.ts` with your own images:

1. **Option 1**: Use external URLs (Pexels, Unsplash, your CDN)
2. **Option 2**: Add images to `public/images/` and reference as `/images/your-image.jpg`

## 🎨 Design System

### Colors
- **Primary**: Amber (#F59E0B)
- **Secondary**: Orange (#EA580C)
- **Accent**: Coffee brown tones
- **Background**: Warm gradients

### Typography
- Clean, readable fonts
- Proper contrast ratios
- Mobile-optimized sizing

## 📱 Mobile Optimization

- Touch-friendly button sizes (44px minimum)
- Optimized for one-handed use
- Fast loading with lazy image loading
- Smooth animations with reduced motion support

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import from GitHub
2. Framework preset: Vite
3. Deploy

## 🔧 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vite** for build tooling

## 📄 License

MIT License - feel free to use for your restaurant!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Ready to serve!** 🍽️"# FamilyPizza" 
# FamilyPizza
