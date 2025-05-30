# IPTV Streaming App

A modern IPTV streaming web app built with **Next.js 13**, **React 18**, and **HLS.js**.  
Easily stream live TV channels with a clean UI and smooth playback.

## 🚀 Features

- ⚡️ Fast Next.js 13 app (supports SSR & static export)
- 📺 HLS (.m3u8) stream support via HLS.js
- 🖼️ Channel poster & info display
- 🎛️ Responsive video player
- 🛡️ CORS-friendly setup
- 🌓 Dark background for immersive viewing

## 🛠️ Tech Stack

- [Next.js 13](https://nextjs.org/)
- [React 18](https://react.dev/)
- [HLS.js](https://github.com/video-dev/hls.js/)
- [Video.js](https://videojs.com/) (optional)

## 📦 Installation

```sh
git clone https://github.com/yourusername/iptv.git
cd iptv
npm install
```

## 🧑‍💻 Development

```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Production Build

```sh
npm run build
npm start
```

## ☁️ Deploy to Vercel

1. Push your code to GitHub.
2. [Import your repo to Vercel](https://vercel.com/import).
3. No need to change build command (Vercel auto-detects Next.js):
   - **Build Command:** `npm run build`
   - **Output Command:** `npm start`

## 📁 Project Structure

```
components/
  VideoPlayer.js   # Main video player component
pages/
  index.js         # Home page
public/            # Static assets
next.config.js     # Next.js config
package.json
```

## ✨ Credits

- [iptv-org](https://github.com/iptv-org/iptv) for channel sources
- [HLS.js](https://github.com/video-dev/hls.js)
- [Next.js](https://nextjs.org/)

---

**Enjoy streaming!** 🚀
