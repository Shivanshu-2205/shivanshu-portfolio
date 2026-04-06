# Shivanshu Maurya — Portfolio v2
## Engineered Intelligence

Premium Next.js 14 + React portfolio with split-hero photo layout and scroll animations.

### Stack
- **Next.js 14** App Router · **React 18** · **TypeScript**
- **Tailwind CSS** · **Framer Motion** · Google Fonts (Syne, DM Mono, Instrument Serif)

### Key Features
- **Split Hero** — text left, photo right with parallax scroll
- **Photo frame** with animated scan-line + corner brackets + ambient glow
- **Scroll progress bar** at the top of the page
- **Scroll-triggered reveals** on every section (fade + slide)
- **Parallax** — hero text and photo drift at different speeds on scroll
- **Interactive particle canvas** (reacts to mouse)
- **Custom cursor** (dot + lagging ring, magnifies on links)
- **Floating stat cards** beside your photo
- **Noise grain overlay** for texture depth

### ▶ Setup

```bash
npm install
npm run dev
# → http://localhost:3000
```

### 📸 Adding Your Photo

1. Drop your photo as `photo.jpg` into `/public/`
2. Open `components/Hero.tsx`
3. Find the comment `{/* Uncomment ↓ ... */}`
4. Uncomment the `<Image>` line and remove the placeholder `<div>` above it

```tsx
// Replace placeholder with:
<Image src="/photo.jpg" alt="Shivanshu Maurya" fill className="object-cover object-top" priority />
```

### 🎨 Customise

| What | Where |
|------|-------|
| Email / socials | `components/Contact.tsx`, `components/Hero.tsx` |
| Resume file | Drop `resume.pdf` in `/public/` |
| Accent colour | `tailwind.config.ts` → `accent` |
| Project details | `components/Projects.tsx` |
| Stack items | `components/Stack.tsx` |

### 🚀 Deploy to Vercel

```bash
git init && git add . && git commit -m "init"
# Push to GitHub, connect repo on vercel.com — zero config needed
```
