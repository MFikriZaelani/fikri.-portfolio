"use client";

import Image from "next/image";

interface AboutSectionProps {
  fullName?: string;
  bio: string;
  quote?: string;
  photoUrl?: string;
  cvUrl?: string;
  stats?: {
    projectsCount: string;
    certificatesCount: string;
    completedWorksCount: string;
  };
}

export default function AboutSection({
  fullName = "Fikri",
  bio,
  quote = '"Great things grow from consistent small efforts."',
  photoUrl = "/foto.png",
  cvUrl = "https://drive.google.com/file/d/1eKzChQwlgk_SyjZ4SREtzdC-efUjkNxN/view?usp=sharing",
  stats = {
    projectsCount: "44 Repository",
    certificatesCount: "16",
    completedWorksCount: "6",
  },
}: AboutSectionProps) {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Top Grid: Bio & Circular Photo */}
        <div className="about-top-grid">
          {/* Left Column: Headline, Bio, Quote, & Buttons */}
          <div className="about-content reveal from-left">
            <div className="eyebrow">About me</div>
            <h2 className="about-name-headline">{fullName}</h2>

            <p className="about-bio-text">{bio}</p>

            {quote && (
              <div className="about-quote-box">
                <p>{quote}</p>
              </div>
            )}

            <div className="about-btn-row">
              <a
                href={cvUrl}
                className="about-btn about-btn-solid"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <polyline points="9 15 12 18 15 15"></polyline>
                </svg>
                Download CV
              </a>

              <button
                className="about-btn about-btn-outline"
                onClick={scrollToPortfolio}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                View Projects
              </button>
            </div>
          </div>

          {/* Right Column: Circular Photo Frame */}
          <div className="about-photo-column reveal from-right">
            <div className="about-circle-frame">
              <Image
                src={photoUrl}
                alt="Profile Photo"
                width={360}
                height={360}
                className="about-circle-photo"
              />
            </div>
          </div>
        </div>

        {/* Bottom Cards Grid: 3 Stats Cards */}
        <div className="about-stats-grid">
          {/* Card 1: Projects */}
          <div
            className="stat-card reveal from-left"
            onClick={scrollToPortfolio}
            title="Lihat Project"
          >
            <div className="stat-card-top">
              <span className="stat-icon">&lt;&gt;</span>
              <span className="stat-number">{stats.projectsCount}</span>
            </div>
            <div className="stat-card-bottom">
              <span className="stat-label">PROJECTS</span>
              <span className="stat-arrow">↗</span>
            </div>
          </div>

          {/* Card 2: Certificates */}
          <div
            className="stat-card reveal from-top"
            onClick={scrollToPortfolio}
            title="Lihat Sertifikat"
          >
            <div className="stat-card-top">
              <span className="stat-icon">🎗</span>
              <span className="stat-number">{stats.certificatesCount}</span>
            </div>
            <div className="stat-card-bottom">
              <span className="stat-label">CERTIFICATES</span>
              <span className="stat-arrow">↗</span>
            </div>
          </div>

          {/* Card 3: Experience */}
          <div
            className="stat-card reveal from-right"
            onClick={scrollToPortfolio}
            title="Lihat Pengalaman"
          >
            <div className="stat-card-top">
              <span className="stat-icon">⚒</span>
              <span className="stat-number">{stats.completedWorksCount}</span>
            </div>
            <div className="stat-card-bottom">
              <span className="stat-label">EXPERIENCE</span>
              <span className="stat-arrow">↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
