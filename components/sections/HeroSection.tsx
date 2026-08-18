"use client";

import Image from "next/image";
import Typewriter from "@/components/Typewriter";

interface HeroSectionProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  handle: string;
  typewriterRoles?: string[];
  heroDescription: string;
  heroTags: string[];
  heroSubtitle1: string;
  heroSubtitle2: string;
  photoUrl: string;
}

export default function HeroSection({
  eyebrow,
  titleLine1,
  titleLine2,
  handle,
  typewriterRoles = [
    "Frontend Developer",
    "Backend Developer",
    "AI/ML Enthusiast",
  ],
  heroDescription,
  heroTags,
  heroSubtitle1,
  heroSubtitle2,
  photoUrl,
}: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-left reveal from-left">
          <div className="hero-available">
            <span className="status-dot"></span>
            {eyebrow}
          </div>

          <h1 className="hero-headline">
            <span className="headline-line1">{titleLine1}</span>
            <span className="headline-line2">{titleLine2}</span>
          </h1>

          {/* Typewriter Effect Row */}
          <div className="hero-handle">
            <Typewriter roles={typewriterRoles} prefix={handle} />
          </div>

          <p className="hero-desc">{heroDescription}</p>

          <div className="hero-badges">
            {heroTags.map((tag) => (
              <span key={tag} className="badge-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-links">
            <div className="hero-link-item">{heroSubtitle1}</div>
            <div className="hero-link-item">{heroSubtitle2}</div>
          </div>
        </div>

        {/* Right Lanyard ID Card Pass Column */}
        <div className="hero-right reveal from-right">
          <div className="lanyard-wrapper">
            {/* Hanging Ribbon Strap */}
            <div className="lanyard-strap">
              <div className="strap-text-loop">
                <span>PORTFOLIO</span>
              </div>
            </div>

            {/* Metal Ring Clip */}
            <div className="lanyard-clip">
              <div className="clip-ring"></div>
              <div className="clip-hook"></div>
            </div>

            {/* Floating ID Card Badge */}
            <div className="id-card-badge">
              <div className="badge-photo-frame">
                <Image
                  src={photoUrl}
                  alt="Profile Photo"
                  width={340}
                  height={440}
                  className="badge-photo"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Cue at Bottom Center */}
      <div className="hero-scroll-cue">
        <span>SCROLL</span>
        <span className="arrow">↓</span>
      </div>
    </section>
  );
}
