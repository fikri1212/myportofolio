# Portfolio - Fikri Rizky

Website portofolio profesional untuk Fresh Graduate Teknik Informatika dengan peminatan Data Science.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deploy**: Vercel

## ✨ Fitur

- 🌙 Dark Mode / Light Mode
- 📱 Responsive (Mobile & Desktop)
- ⚡ Animasi Framer Motion
- 🎨 Modern & Minimalis UI
- 🔍 SEO Friendly
- 🚀 Siap Deploy ke Vercel

## 🛠️ Instalasi & Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Proyek

```
portfolio-fikri/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout + metadata
│   │   └── page.tsx          # Main page
│   ├── components/
│   │   └── sections/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── Education.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   └── useActiveSection.ts
│   └── lib/
│       ├── data.ts           # ← EDIT INI untuk update konten
│       └── utils.ts
├── public/
│   ├── images/
│   │   └── profile.jpg       # ← Letakkan foto profil di sini
│   └── cv-fikri-rizky.pdf    # ← Letakkan file CV di sini
├── tailwind.config.ts
├── next.config.mjs
└── vercel.json
```

## 🎨 Kustomisasi Konten

Edit file `src/lib/data.ts` untuk mengubah:
- Info pribadi (nama, email, nomor HP, GitHub, LinkedIn)
- Deskripsi "About Me"
- Skills dan level keahlian
- Daftar proyek
- Pengalaman kerja/proyek
- Data pendidikan

## 📸 Menambah Foto Profil

1. Letakkan foto profil di `public/images/profile.jpg`
2. Di `src/components/sections/Hero.tsx`, ganti bagian placeholder dengan:

```tsx
import Image from "next/image";

// Ganti div placeholder dengan:
<Image
  src="/images/profile.jpg"
  alt="Fikri Rizky"
  fill
  className="object-cover"
  priority
/>
```

## 📄 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy ke production
vercel --prod
```

Atau hubungkan repository GitHub ke Vercel dashboard untuk auto-deploy.

## 🔗 Link Sosial

Edit di `src/lib/data.ts`:
```ts
github: "https://github.com/USERNAME_ANDA",
linkedin: "https://linkedin.com/in/USERNAME_ANDA",
email: "email@anda.com",
phone: "+62 8xx-xxxx-xxxx",
```
