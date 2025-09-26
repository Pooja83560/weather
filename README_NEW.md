# 🌤️ Weather Agent Chat

A modern, responsive weather chat application with real-time streaming API integration and a sleek dark UI design.

![Weather Chat App](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite)

## ✨ Features

- 🎨 **Modern Dark UI** - Geometric message bubbles with professional styling
- ⚡ **Real-time Streaming** - Live weather data from AI agent
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🚀 **Fast Performance** - Built with Vite and optimized for speed
- 🔒 **Type Safe** - Full TypeScript implementation
- 🎯 **Clean Architecture** - Modular component structure

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Tech Stack

- **Frontend:** React 18 with TypeScript
- **Styling:** CSS Modules with dark theme design
- **Build Tool:** Vite for fast development and builds
- **API Integration:** Streaming weather agent responses
- **Deployment:** Ready for Vercel, Netlify, or GitHub Pages

## 📱 Demo

The app features:
- Interactive weather queries
- Streaming response display
- Professional dark theme
- Geometric message design
- Responsive layout

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy Options:

**Vercel (Recommended):**
1. Fork this repo to your GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Import project → Deploy

**Netlify:**
1. Fork this repo to your GitHub  
2. Connect to [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🎯 Project Structure

```
src/
├── components/              # React components
│   ├── ConversationArea.tsx        # Main chat container
│   ├── ConversationHistory.tsx     # Message display area  
│   ├── ChatBubble.tsx              # Individual message bubbles
│   ├── InputField.tsx              # Message input form
│   ├── LoadingAnimation.tsx        # Loading animation
│   └── *.module.css               # Component styles
├── services/               # API integration
│   └── api.ts                     # Weather agent API
├── App.tsx                # Main application
└── main.tsx              # Entry point
```

## 📝 License

MIT License - feel free to use this project for learning or portfolio purposes.

---

**🌟 Star this repo if you found it helpful!**