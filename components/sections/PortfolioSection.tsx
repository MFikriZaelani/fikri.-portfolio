"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ProjectItem,
  CertificateItem,
  TimelineItem,
  TechItem,
} from "@/data/portfolio";

interface PortfolioSectionProps {
  projects: ProjectItem[];
  certificates: CertificateItem[];
  techStack: TechItem[];
  education: TimelineItem[];
  experience: TimelineItem[];
}

type TabType = "project" | "certificate" | "stack" | "education" | "experience";

const TABS: { id: TabType; label: string }[] = [
  { id: "project", label: "Projects" },
  { id: "certificate", label: "Certificates" },
  { id: "stack", label: "Tech Stack" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
];

export default function PortfolioSection({
  projects,
  certificates,
  techStack,
  education,
  experience,
}: PortfolioSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("project");
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header reveal from-top">
          <h2 className="portfolio-title">Portfolio Showcase</h2>
          <p className="portfolio-subtitle">
            Explore my journey through projects, certifications, technical
            expertise, education, and experience.
          </p>
        </div>

        {/* Tab Switcher Capsule Container */}
        <div className="tabs-capsule-wrapper reveal from-bottom">
          <div className="tabs-capsule">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-pill-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        {/* Projects Panel */}
        <div className={`tab-panel ${activeTab === "project" ? "active" : ""}`}>
          <div className="portfolio-card-grid">
            {projects.map((item, index) => {
              const animationClass = (() => {
                const mod = index % 3;
                if (mod === 0) return "from-left";
                if (mod === 1) return "from-bottom";
                return "from-right";
              })();
              return (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.id}`}
                  className={`portfolio-card reveal ${animationClass}`}
                  style={{ textDecoration: "none" }}
                >
                  {/* Image Thumbnail Frame */}
                  <div className="card-thumb-frame">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={225}
                        className="card-thumb-img"
                      />
                    ) : (
                      <div className="ph-thumb">preview</div>
                    )}
                  </div>

                  {/* Card Main Info */}
                  <div className="card-info">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-desc">{item.description}</p>
                    <div className="tag-row">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Footer */}
                  <div className="card-footer">
                    <span className="card-link-text">
                      {item.linkText || "No Link"}
                    </span>
                    <span className="card-details-btn">
                      Details <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Certificates Panel */}
        <div
          className={`tab-panel ${activeTab === "certificate" ? "active" : ""}`}
        >
          <div className="portfolio-card-grid">
            {certificates.map((cert, index) => {
              const animationClass = (() => {
                const mod = index % 3;
                if (mod === 0) return "from-left";
                if (mod === 1) return "from-bottom";
                return "from-right";
              })();
              return (
                <div
                  key={cert.id}
                  className={`portfolio-card reveal ${animationClass}`}
                >
                  <div
                    className="card-thumb-frame"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "8px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={180}
                        height={180}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "auto",
                          maxWidth: "180px",
                          maxHeight: "180px",
                        }}
                        unoptimized
                      />
                    ) : (
                      <span style={{ fontSize: "2.5rem" }}>🎗️</span>
                    )}
                    {!cert.image && (
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "0.65rem",
                          color: "#71717a",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {cert.issuer}
                      </span>
                    )}
                  </div>
                  <div className="card-info">
                    <h4 className="card-title">{cert.title}</h4>
                    <p className="card-desc">
                      {cert.issuer} — {cert.year}
                    </p>
                  </div>
                  <div className="card-footer">
                    <span className="card-link-text">Certified ✓</span>
                    <button
                      className="card-details-btn"
                      onClick={() => setSelectedCertificate(cert)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "inherit",
                        font: "inherit",
                        padding: 0,
                      }}
                    >
                      View <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Panel */}
        <div className={`tab-panel ${activeTab === "stack" ? "active" : ""}`}>
          <div className="stack-grid">
            {techStack.map((tech) => (
              <div key={tech.name} className="stack-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="stack-item-icon"
                  width={40}
                  height={40}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="stack-item-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Panel */}
        <div
          className={`tab-panel ${activeTab === "education" ? "active" : ""}`}
        >
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.id} className="t-item">
                <div className="t-year">{edu.year}</div>
                <h4>{edu.title}</h4>
                <p>{edu.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Panel */}
        <div
          className={`tab-panel ${activeTab === "experience" ? "active" : ""}`}
        >
          <div className="timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="t-item">
                <div className="t-year">{exp.year}</div>
                <h4>{exp.title}</h4>
                <p>{exp.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Image Modal */}
      {selectedCertificate && selectedCertificate.image && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate view"
            >
              ✕
            </button>
            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              width={800}
              height={600}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                width: "auto",
                height: "auto",
              }}
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}
