export const siteConfig = {
  name: "Fikri Rizky Candra, S.Kom",
  title: "Fresh Graduate Teknik Informatika | Data Science",
  email: "fikririzky12@gmail.com", // Ganti dengan email asli
  phone: "+6281283376011", // Ganti dengan nomor WhatsApp asli
  github: "https://github.com/fikririzky", // Ganti dengan GitHub asli
  linkedin: "https://linkedin.com/in/fikririzky", // Ganti dengan LinkedIn asli
  cvUrl: "/CV-ATS-Fikri-Rizky-Candra-SKom.pdf", // Letakkan file CV di folder public/
  location: "Padang Panjang, Sumatera Barat, Indonesia",
  university: "Universitas Putra Indonesia YPTK Padang",
  major: "Teknik Informatika (S1)",
  specialization: "Data Science",

  about: `Saya merupakan lulusan Teknik Informatika yang memiliki minat pada bidang Data Science, Data Mining, Machine Learning, dan Pengembangan Aplikasi Web. Memiliki kemampuan dalam analisis data, pengolahan database, serta pengembangan aplikasi berbasis web menggunakan berbagai teknologi modern. Mampu bekerja secara individu maupun tim, cepat belajar, dan memiliki kemampuan problem solving yang baik.`,

  stats: [
    { label: "Proyek Selesai", value: "10+", icon: "FolderOpen" },
    { label: "Teknologi", value: "11+", icon: "Code2" },
    { label: "Algoritma ML", value: "5+", icon: "Brain" },
    { label: "Tahun Belajar", value: "4+", icon: "GraduationCap" },
  ],
};

export const skills = {
  programming: [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "PHP", level: 80, icon: "🐘" },
    { name: "JavaScript", level: 75, icon: "⚡" },
    { name: "Java", level: 65, icon: "☕" },
    { name: "HTML & CSS", level: 90, icon: "🎨" },
  ],
  datascience: [
    { name: "Machine Learning", level: 80, icon: "🤖" },
    { name: "Data Mining", level: 82, icon: "⛏️" },
    { name: "Data Analysis", level: 85, icon: "📊" },
    { name: "Data Visualization", level: 78, icon: "📈" },
  ],
  database: [
    { name: "MySQL", level: 82, icon: "🗄️" },
  ],
  tools: [
    "Microsoft Excel",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Google Colab",
    "VS Code",
    "Git",
    "Jupyter Notebook",
    "XAMPP",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Sistem Klasifikasi Pelanggaran Lalu Lintas",
    description:
      "Sistem berbasis web untuk mengklasifikasikan jenis pelanggaran lalu lintas menggunakan algoritma Naive Bayes. Sistem ini membantu petugas dalam mengidentifikasi dan mengkategorikan pelanggaran dengan akurasi tinggi.",
    tags: ["PHP", "MySQL", "Naive Bayes", "Data Mining"],
    category: "Data Science",
    icon: "🚦",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Implementasi Algoritma Naive Bayes",
      "Akurasi klasifikasi tinggi",
      "Interface web yang intuitif",
      "Manajemen database terintegrasi",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Dashboard Analisis Data",
    description:
      "Dashboard interaktif untuk visualisasi dan analisis data menggunakan Python. Menampilkan insight mendalam dari dataset dengan berbagai grafik dan metode machine learning untuk prediksi.",
    tags: ["Python", "Machine Learning", "Data Visualization", "Pandas"],
    category: "Machine Learning",
    icon: "📊",
    color: "from-violet-500 to-purple-500",
    highlights: [
      "Visualisasi data interaktif",
      "Model prediksi ML",
      "Analisis statistik mendalam",
      "Export laporan otomatis",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Sistem Informasi Berbasis Web",
    description:
      "Aplikasi web full-stack dengan fitur CRUD lengkap, autentikasi user, dan manajemen data terintegrasi. Dibangun menggunakan PHP native dengan arsitektur MVC dan database MySQL.",
    tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    category: "Web Dev",
    icon: "🌐",
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Sistem autentikasi aman",
      "Arsitektur MVC",
      "Responsive design",
      "CRUD operations lengkap",
    ],
    github: "#",
    demo: "#",
  },
];

export const experiences = [
  {
    title: "Pengembangan Sistem Klasifikasi Pelanggaran Lalu Lintas",
    description:
      "Merancang dan mengimplementasikan sistem klasifikasi menggunakan Algoritma Naive Bayes. Melakukan preprocessing data, training model, evaluasi performa, dan integrasi ke dalam aplikasi web berbasis PHP dan MySQL.",
    technologies: ["PHP", "MySQL", "Naive Bayes", "Data Mining"],
    type: "project",
    year: "2025-2026",
  },
  {
    title: "Pengembangan Aplikasi Web Berbasis PHP dan MySQL",
    description:
      "Membangun aplikasi web full-stack dengan fitur manajemen data lengkap. Menerapkan best practices dalam pengembangan web termasuk validasi input, keamanan SQL injection prevention, dan optimasi query database.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "project",
    year: "2025",
  },
  {
    title: "Analisis dan Pengolahan Data Menggunakan Python",
    description:
      "Melakukan eksplorasi data, pembersihan data, analisis statistik, dan visualisasi menggunakan library Python seperti Pandas, NumPy, Matplotlib, dan Scikit-learn untuk menghasilkan insight yang bermakna.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    type: "project",
    year: "2025",
  },
];

export const education = [
  {
    degree: "S1 Teknik Informatika",
    school: "Universitas Putra Indonesia YPTK Padang",
    IPK : "3.55 / 4.00",
    period: "2022 – 2026",
    specialization: "Peminatan: Data Science",
    description:
      "Menempuh pendidikan sarjana dengan fokus pada Data Science, Machine Learning, dan Pengembangan Perangkat Lunak. Aktif dalam berbagai proyek akademik dan praktikum pemrograman.",
    achievements: [
      "Peminatan Data Science",
      "Proyek Tugas Akhir: Sistem Klasifikasi dengan Naive Bayes",
      "Penguasaan berbagai bahasa pemrograman",
    ],
  },
];
