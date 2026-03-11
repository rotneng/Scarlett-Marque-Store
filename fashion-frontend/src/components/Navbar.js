import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1100;

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      width: "100%",
      height: isMobile ? "70px" : "90px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isTablet ? "0 3%" : "0 5%",
      zIndex: 1000,
      transition: "all 0.4s ease",
      backgroundColor:
        scrolled || mobileOpen ? colors.brandGreen : "transparent",
      borderBottom: scrolled ? `1px solid rgba(255,255,255,0.1)` : "none",
      boxSizing: "border-box",
    },
    logoLink: {
      display: "flex",
      alignItems: "center",
      gap: isTablet ? "8px" : "15px",
      textDecoration: "none",
      zIndex: 1001,
    },
    logoImage: {
      height: isMobile ? "35px" : isTablet ? "40px" : "50px",
      width: "auto",
      objectFit: "contain",
    },
    brandName: {
      color: colors.white,
      fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.3rem",
      fontWeight: "700",
      letterSpacing: isTablet ? "1px" : "3px",
      textTransform: "uppercase",
      margin: 0,
      whiteSpace: "nowrap",
    },
    navLinks: {
      display: isMobile ? (mobileOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      position: isMobile ? "absolute" : "static",
      top: "70px",
      left: 0,
      width: isMobile ? "100%" : "auto",
      height: isMobile ? "calc(100vh - 70px)" : "auto",
      backgroundColor: isMobile ? colors.brandGreen : "transparent",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-end",
      gap: isMobile ? "40px" : isTablet ? "15px" : "30px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    link: {
      color: colors.white,
      textDecoration: "none",
      fontSize: isMobile ? "1.5rem" : isTablet ? "0.7rem" : "0.8rem",
      textTransform: "uppercase",
      letterSpacing: isTablet ? "1px" : "2px",
      cursor: "pointer",
      opacity: 0.9,
      whiteSpace: "nowrap",
    },
    shopBtn: {
      border: `1px solid ${colors.white}`,
      padding: isTablet ? "8px 12px" : "10px 20px",
      color: colors.white,
      textDecoration: "none",
      fontSize: isTablet ? "0.7rem" : "0.8rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "0.3s",
      whiteSpace: "nowrap",
    },
  };

  const navItems = ["hero", "about", "gallery", "staff", "contact"];

  return (
    <nav style={styles.nav}>
      <RouterLink
        to="/"
        style={styles.logoLink}
        onClick={() => setMobileOpen(false)}
      >
        <img src={logoImg} alt="Logo" style={styles.logoImage} />
        <span style={styles.brandName}>SCARLETT MARQUE</span>
      </RouterLink>

      {isMobile && (
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ cursor: "pointer", zIndex: 1001, color: colors.white }}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      )}

      <ul style={styles.navLinks}>
        {isHome ? (
          navItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                style={styles.link}
                onClick={() => setMobileOpen(false)}
              >
                {item === "hero" ? "Home" : item}
              </ScrollLink>
            </li>
          ))
        ) : (
          <li>
            <RouterLink
              to="/"
              style={styles.link}
              onClick={() => setMobileOpen(false)}
            >
              Back to Home
            </RouterLink>
          </li>
        )}
        <li>
          <RouterLink
            to="/products"
            style={styles.shopBtn}
            onClick={() => setMobileOpen(false)}
          >
            Shop Collection
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
