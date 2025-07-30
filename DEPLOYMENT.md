# 🚀 Vercel Deployment Guide

## Automatic Deployment Setup

The Amatist Chemicals landing page is now ready for automatic deployment on Vercel.

### 📋 Prerequisites
- GitHub account with the repository: [https://github.com/eldikeren/amatist](https://github.com/eldikeren/amatist)
- Vercel account (free tier available)

### 🔧 Setup Steps

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Repository**
   - Click "New Project"
   - Select "Import Git Repository"
   - Find and select `eldikeren/amatist`
   - Click "Import"

3. **Configure Project**
   - **Project Name**: `amatist-chemicals` (or your preferred name)
   - **Framework Preset**: Other (Static Site)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty (not needed for static site)
   - **Output Directory**: Leave empty (not needed for static site)

4. **Environment Variables** (Optional)
   - No environment variables needed for this static site

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### 🔄 Automatic Deployment

Once set up, Vercel will automatically:
- Deploy every time you push to the `main` branch
- Create preview deployments for pull requests
- Provide you with a unique URL (e.g., `https://amatist-chemicals.vercel.app`)

### 🌐 Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your project dashboard on Vercel
   - Navigate to "Settings" → "Domains"
   - Add your custom domain (e.g., `amatist.co.il`)

2. **Configure DNS**
   - Follow Vercel's DNS configuration instructions
   - Point your domain to Vercel's nameservers

### 📱 Features Included

The deployed site includes:
- ✅ **Hebrew/English Language Support**
- ✅ **Floating Navigation Menu**
- ✅ **Responsive Design**
- ✅ **Product Details with Expandable Information**
- ✅ **Contact Form with Validation**
- ✅ **Particles.js Animation**
- ✅ **Mobile-Optimized Layout**

### 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `index.html` - Main landing page
- `styles.css` - Styling and responsive design
- `script.js` - Interactive features and animations

### 📞 Contact Information

The site displays the correct contact information:
- **Phone**: +972-52-641-4492
- **Email**: batdar@inter.net.il
- **Address**: זרובבל יעקב 17, תל אביב־יפו

### 🎨 Design Features

- **Color Scheme**: Dark blue + turquoise + purple accents
- **Typography**: Assistant/Alef fonts for Hebrew
- **Animations**: Smooth scroll, fade-in effects, hover animations
- **Icons**: Font Awesome icons throughout

### 🔄 Updates

To update the site:
1. Make changes to your local files
2. Commit and push to GitHub
3. Vercel will automatically redeploy

```bash
git add .
git commit -m "Update description"
git push
```

### 📊 Performance

The site is optimized for:
- Fast loading times
- Mobile responsiveness
- SEO optimization
- Accessibility compliance

---

**Deployment Status**: ✅ Ready for Vercel deployment
**Repository**: [https://github.com/eldikeren/amatist](https://github.com/eldikeren/amatist) 