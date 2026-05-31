import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fikri Rizky Candra, S.Kom | Data Science & Web Developer",
  description:
    "Fresh Graduate Teknik Informatika dengan peminatan Data Science. Spesialis Machine Learning, Data Analysis, dan Pengembangan Web.",
  keywords: [
    "Fikri Rizky Candra, S.Kom",
    "Data Science",
    "Machine Learning",
    "Web Developer",
    "Teknik Informatika",
    "UPI YPTK Padang",
    "Python",
    "PHP",
    "Portfolio",
  ],
  authors: [{ name: "Fikri Rizky Candra, S.Kom" }],
  creator: "Fikri Rizky Candra, S.Kom",
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Fikri Rizky Candra, S.Kom | Data Science & Web Developer",
    description:
      "Fresh Graduate Teknik Informatika dengan peminatan Data Science.",
    siteName: "Portfolio Fikri Rizky Candra, S.Kom",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikri Rizky Candra, S.Kom | Data Science & Web Developer",
    description:
      "Fresh Graduate Teknik Informatika dengan peminatan Data Science.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
