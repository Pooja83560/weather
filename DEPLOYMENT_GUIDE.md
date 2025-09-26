# 🚀 Weather Chat App - Deployment Guide

## 📱 About This App
A modern weather agent chat interface with:
- Dark theme with geometric message bubbles
- Real-time streaming weather API integration
- Responsive design for all devices
- Clean, professional UI

## 🌐 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import this repository
5. **Framework Preset:** Vite
6. Click "Deploy"
7. Your app will be live at: `https://your-project-name.vercel.app`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select this repository
4. **Build command:** `npm run build`
5. **Publish directory:** `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages
1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. The workflow in `.github/workflows/deploy.yml` will auto-deploy

## 🛠️ Local Development
```bash
npm install
npm run dev
```
App will run on `http://localhost:5173/`

## 📊 Tech Stack
- **Frontend:** React 18 + TypeScript
- **Styling:** CSS Modules with dark theme
- **Build Tool:** Vite
- **API:** Streaming weather agent integration

## 🎯 Features
- Real-time weather queries with streaming responses
- Modern geometric UI design
- Fully responsive (mobile-first)
- Professional dark theme
- TypeScript for type safety

---
**Live Demo:** [Your deployment URL here]  
**Repository:** [Your GitHub repo URL here]