import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import CustomCursor from "@/components/CustomCursor";
import BackgroundGrid from "@/components/BackgroundGrid";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="detail-page-wrapper">
      <CustomCursor />
      <BackgroundGrid />

      <section
        className="portfolio-section project-detail-section"
        style={{ minHeight: "100vh", paddingTop: "50px", paddingBottom: "60px" }}
      >
        <div className="portfolio-container">
          {/* Top Bar with Back Button & Minimal Brand */}
          <div className="detail-top-nav">
            <Link
              href="/#portfolio"
              className="back-btn"
              style={{ textDecoration: "none", margin: 0 }}
            >
              <span className="back-arrow">←</span> Back to Portfolio
            </Link>
            <span className="detail-project-counter">
              {project.id.toUpperCase()} / {portfolioData.projects.length}
            </span>
          </div>

          {/* Detail 2-Column Grid */}
          <div className="project-detail-grid">
            {/* Left Column */}
            <div className="detail-left">
              <h1 className="detail-title">{project.title}</h1>
              <div className="title-divider"></div>

              <p className="detail-long-desc">
                {project.longDescription || project.description}
              </p>

              {/* Stats Mini Cards Row */}
              <div className="detail-stats-row">
                <div className="detail-stat-card">
                  <div className="stat-card-top">
                    <span className="stat-icon">&lt;&gt;</span>
                    <span className="stat-num">
                      {project.technologiesCount || project.tags.length}
                    </span>
                  </div>
                  <span className="stat-lbl">Technologies Used</span>
                </div>

                <div className="detail-stat-card">
                  <div className="stat-card-top">
                    <span className="stat-icon">🥞</span>
                    <span className="stat-num">
                      {project.keyFeaturesCount ||
                        (project.keyFeatures ? project.keyFeatures.length : 3)}
                    </span>
                  </div>
                  <span className="stat-lbl">Key Features</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="detail-links-row">
                <a
                  href={project.link && project.link !== "#" ? project.link : "#"}
                  className="detail-action-btn"
                  target={project.link && project.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <svg
                    width="15"
                    height="15"
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
                  {project.linkText || "Live Demo"}
                </a>

                <a
                  href={project.link && project.link !== "#" ? project.link : "#"}
                  className="detail-action-btn"
                  target={project.link && project.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="1.05" y1="12" x2="7" y2="12"></line>
                    <line x1="17" y1="12" x2="22.95" y2="12"></line>
                  </svg>
                  {project.linkText || "Source Code"}
                </a>
              </div>

              {/* Technologies Used Section */}
              <div className="detail-tech-section">
                <h4 className="tech-section-title">
                  <span className="icon">&lt;&gt;</span> Technologies Used
                </h4>
                <div className="tech-badges-row">
                  {project.tags.map((tag) => (
                    <div key={tag} className="tech-badge-item">
                      <span className="box-icon">📦</span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="detail-right">
              {/* Image Preview Box */}
              <div className="detail-image-box">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="detail-main-img"
                    priority
                  />
                ) : (
                  <div className="ph-thumb">preview</div>
                )}
              </div>

              {/* Key Features Card Box */}
              <div className="detail-features-card">
                <h4 className="features-card-title">
                  <span className="icon">🪄</span> Key Features
                </h4>
                <ul className="features-list">
                  {(
                    project.keyFeatures || [
                      "Website full animasi",
                      "keren dan elegant",
                      "fitur lengkap",
                    ]
                  ).map((feat, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
