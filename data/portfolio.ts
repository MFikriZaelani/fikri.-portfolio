export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  link?: string;
  linkText?: string;
  technologiesCount?: number;
  keyFeaturesCount?: number;
  keyFeatures?: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
  link?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  name: string;
  url: string;
}

export const portfolioData = {
  profile: {
    fullName: "Muhamad Fikri Zaelani",
    name: "Fullstack Developer",
    titleLine1: "Fullstack",
    titleLine2: "Developer",
    logo: "fikri.",
    eyebrow: "MY PORTFOLIO",
    handle: "",
    typewriterRoles: [
      "Frontend Developer",
      "Backend Developer",
      "AI/ML Enthusiast",
    ],
    role: "Fullstack Developer & AI/ML Enthusiast",
    heroDescription:
      "Spesialis fullstack developer dengan passion mendalam pada integrasi Machine Learning dan pengolahan data.",
    bio: "Informatics Engineering student at UIN Sunan Gunung Djati Bandung who has a passion for web development and continues to look for opportunities to learn and innovate. Focused on providing high-quality web solutions and determined to make a positive impact in the world of technology.",
    quote: '"Great things grow from consistent small efforts."',
    stats: {
      projectsCount: "44 Repository",
      certificatesCount: "16",
      completedWorksCount: "6",
    },
    heroTags: ["Typescript", "React.js", "Tailwind"],
    heroSubtitle1: "↓ explore my work below",
    heroSubtitle2: "↗ open to full-time & freelance opportunities",
    photoUrl: "/foto.png",
    cvUrl:
      "https://drive.google.com/file/d/1eKzChQwlgk_SyjZ4SREtzdC-efUjkNxN/view?usp=sharing",
    email: "fikrimuhamadzael@gmail.com",
  },
  projects: [
    {
      id: "p1",
      title: "Project Portofolio",
      description:
        "Portofolio adalah kumpulan dokumen, karya, proyek, atau pencapaian terbaik seseorang yang disusun secara sistematis.",
      longDescription:
        "Portofolio adalah kumpulan dokumen, karya, proyek, atau pencapaian terbaik seseorang yang disusun secara sistematis untuk menunjukkan kemampuan, pengalaman, dan kualitas diri di bidang tertentu. Ini berfungsi sebagai bukti nyata (bukan sekadar klaim) saat melamar kerja, beasiswa, atau proyek.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      image: "/portfolio.png",
      link: "#",
      linkText: "No Link",
      technologiesCount: 3,
      keyFeaturesCount: 3,
      keyFeatures: [
        "Website full animasi",
        "keren dan elegant",
        "fitur lengkap",
      ],
    },
    {
      id: "p2",
      title: "Chatbot KBIH",
      description:
        "Sistem chatbot layanan informasi KBIH cerdas berbasis AI/Machine Learning untuk membantu jemaah.",
      longDescription:
        "Sistem cerdas berbasis kecerdasan buatan (NLP & Machine Learning) yang menyajikan informasi bimbingan ibadah haji & umrah secara otomatis, akurat, dan cepat interaktif.",
      tags: ["Python", "Machine Learning", "NLP"],
      image: "/chatbot-kbih.png",
      link: "#",
      linkText: "No Link",
      technologiesCount: 3,
      keyFeaturesCount: 3,
      keyFeatures: [
        "Respons interaktif otomatis",
        "Pemrosesan bahasa alami (NLP)",
        "Dukungan basis data jemaah",
      ],
    },
    {
      id: "p3",
      title: "Traveler Web App",
      description:
        "Platform sistem pemesanan dan eksplorasi destinasi wisata interaktif berbasis web.",
      longDescription:
        "Aplikasi web modern untuk merencanakan perjalanan wisata, pemesanan tiket, serta rekomendasi tempat wisata interaktif.",
      tags: ["React", "Node.js", "Express"],
      image: "/traveler.png",
      link: "#",
      linkText: "No Link",
      technologiesCount: 3,
      keyFeaturesCount: 3,
      keyFeatures: [
        "Pencarian destinasi interaktif",
        "Sistem pemesanan online",
        "Desain responsif & modern",
      ],
    },
    {
      id: "p4",
      title: "D'larisan Chicken App",
      description:
        "Platform web pemesanan Fried Chicken yang dilengkapi dengan integrasi payment gateway untuk transaksi secara otomatis dan cepat.",
      longDescription:
        "D'larisan Chicken App adalah platform web e-commerce dan manajemen restoran modern yang dirancang khusus untuk mempermudah pemesanan menu fried chicken secara online.",
      tags: ["Fullstack", "Web App", "Dashboard"],
      image: "/chicken.png",
      link: "#",
      linkText: "No Link",
      technologiesCount: 3,
      keyFeaturesCount: 3,
      keyFeatures: [
        "Store Management Dashboard",
        "Automated Payment Gateway",
        "Interactive Menu & Ordering",
      ],
    },
    {
      id: "p5",
      title: "TTS Informatika",
      description:
        "Platform game web Teka-Teki Silang interaktif yang dirancang sebagai media pembelajaran seru untuk mengasah pengetahuan seputar istilah Teknik Informatika.",
      longDescription:
        "TTS Informatika adalah platform edukasi interaktif berbasis web yang dikembangkan khusus untuk mahasiswa dan pelajar Teknik Informatika. Mengusung konsep gamification, aplikasi ini menyajikan permainan Teka-Teki Silang modern yang melatih ingatan.",
      tags: ["Web App", "Interactive Game", "JavaScript"],
      image: "/tts.png",
      link: "#",
      linkText: "No Link",
      technologiesCount: 3,
      keyFeaturesCount: 3,
      keyFeatures: [
        "Interactive Crossword Gameplay",
        "Responsive UI",
        "Educational Content",
      ],
    },
    {
      id: "p6",
      title: "Creative Music Hub",
      description:
        "Dashboard pembuatan musik berbasis AI interaktif yang terintegrasi dengan payment gateway untuk akses fitur premium.",
      longDescription:
        "Creative Music Hub adalah platform web interaktif yang memungkinkan pengguna menciptakan musik berbasis Artificial Intelligence (AI) secara cepat dan intuitif.",
      tags: ["React", "Payment Gateway", "AI / Machine Learning"],
      image: "/cmh.png",
      link: "#",
      linkText: "No Link",
      technologiesCount: 3,
      keyFeaturesCount: 3,
      keyFeatures: [
        "AI Music Generation",
        "Payment Gateway",
        "Interactive Dashboard",
      ],
    },
  ] as ProjectItem[],
  certificates: [
    {
      id: "c1",
      title: "CCNA: Introduction To Networks",
      issuer: "Cisco Networking Academy",
      year: "2024",
      image: "/ccna.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c2",
      title: "Database Programming with SQL",
      issuer: "Oracle",
      year: "2024",
      image: "/sql-oracle.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c3",
      title: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      year: "2024",
      image: "/linux.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c4",
      title: "Memulai Pemrograman Dengan Java",
      issuer: "Dicoding Indonesia",
      year: "2024",
      image: "/java-dicoding.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c5",
      title: "Microsoft Office Specialist — Excel",
      issuer: "Microsoft",
      year: "2024",
      image: "/excel.jpeg",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c6",
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      year: "2024",
      image: "/frontend-dicoding.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c7",
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia",
      year: "2024",
      image: "/backend-dicoding.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c8",
      title:
        "Certified International Specialist in Data Engineering (Foundation)",
      issuer: "International Certification Body",
      year: "2024",
      image: "/cisde.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c9",
      title: "Sertifikat Pelatihan Pendamping Proses Produk Halal",
      issuer: "Lembaga Sertifikasi Halal",
      year: "2024",
      image: "/halal.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
    {
      id: "c10",
      title: "Database Design",
      issuer: "Oracle",
      year: "2024",
      image: "/design-oracle.png",
      link: "https://drive.google.com/drive/folders/1m4UOy8wx0aIOO_tHBHaus7tQAYJ7myNa?usp=sharing",
    },
  ] as CertificateItem[],
  techStack: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
  ] as TechItem[],
  education: [
    {
      id: "e1",
      year: "Aug 2022 — Sekarang",
      title: "UIN Sunan Gunung Djati Bandung",
      subtitle: "S1 — Teknik Informatika",
    },
    {
      id: "e2",
      year: "Aug 2019 — Jul 2022",
      title: "SMKN Rajapolah",
      subtitle: "Teknik Komputer & Jaringan",
    },
  ] as TimelineItem[],
  experience: [
    {
      id: "ex1",
      year: "Jan 2025 — Mar 2025",
      title: "Frontend Web Developer — PT. Yukmari Project Indonesia",
      subtitle:
        "Internship · Membangun antarmuka web responsif dan interaktif.",
    },
    {
      id: "ex2",
      year: "Feb 2025 — Jun 2025",
      title: "Full-stack Developer — Coding Camp powered by DBS Foundation",
      subtitle:
        "Mengembangkan aplikasi web full-stack dari frontend hingga backend.",
    },
    {
      id: "ex3",
      year: "Okt 2023 — Sekarang",
      title: "Core Member — Google Developer Students Club",
      subtitle:
        "Aktif berkontribusi dalam kegiatan pengembangan teknologi kampus.",
    },
    {
      id: "ex4",
      year: "May 2021 — Jul 2021",
      title: "Field Service Technician — PT Galunggung Access Solutions",
      subtitle: "Internship · Pemeliharaan dan instalasi jaringan di lapangan.",
    },
    {
      id: "ex5",
      year: "2024 — 2025",
      title: "Ketua BSO BAJAX (Jaringan Komputer)",
      subtitle:
        "Bidang Nalar Himatif UIN SGD — Organisasi kemahasiswaan bidang jaringan komputer.",
    },
    {
      id: "ex6",
      year: "2025 — 2026",
      title: "Ketua Organisasi PMII Rayon Sains dan Teknologi",
      subtitle:
        "Cabang Kabupaten Bandung — Memimpin organisasi mahasiswa bidang sains dan teknologi.",
    },
  ] as TimelineItem[],
  socials: [
    {
      label: "01",
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhamad-fikri-zaelani-725677296/",
    },
    { label: "02", name: "GitHub", url: "https://github.com/MFikriZaelani" },
    {
      label: "03",
      name: "Instagram",
      url: "https://www.instagram.com/fikrzln",
    },
    { label: "04", name: "TikTok", url: "https://www.tiktok.com/@civisavicor" },
    {
      label: "05",
      name: "Medium",
      url: "https://medium.com/@fikrimuhamadzael",
    },
    {
      label: "06",
      name: "YouTube",
      url: "https://youtube.com/@fikrizaelani894",
    },
  ] as SocialLink[],
  whatsappNumber: "62859144618393",
};
