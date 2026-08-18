"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ logo = "fikri." }: { logo?: string }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollPosition = window.scrollY + 180;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (id && scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className="nav-capsule">
        <Link href="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <div className="logo">{logo}</div>
        </Link>

        {/* Desktop Links */}
        <ul className="navlinks">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                className={`nav-link ${activeSection === item.id && isHomePage ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button (3 lines) */}
        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </nav>

      {/* Mobile Drawer Overlay & Menu */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="logo">{logo}</div>
          <button
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <ul className="mobile-navlinks">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id && isHomePage ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span className="nav-num">0{NAV_ITEMS.indexOf(item) + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
