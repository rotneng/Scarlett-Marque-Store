import React, { useState, useEffect } from "react";
import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const colors = {
    footerBg: "#111111",
    white: "#ffffff",
    muted: "rgba(255, 255, 255, 0.5)",
  };

  const styles = {
    footer: {
      backgroundColor: colors.footerBg,
      color: colors.white,
      padding: isMobile ? "60px 5% 40px" : "100px 8% 40px",
      fontFamily: '"Helvetica Neue", sans-serif',
      borderTop: "1px solid rgba(255,255,255,0.05)",
      width: "100%",
      display: "block",
      boxSizing: "border-box",
      margin: 0,
    },
    container: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "40px",
      marginBottom: "60px",
      textAlign: isMobile ? "center" : "left",
    },
    brandSection: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    logoText: {
      fontSize: "1.2rem",
      fontWeight: "800",
      letterSpacing: "5px",
      textTransform: "uppercase",
    },
    addressText: {
      fontSize: "0.8rem",
      lineHeight: "1.8",
      color: colors.muted,
      letterSpacing: "1px",
    },
    heading: {
      fontSize: "0.75rem",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "3px",
      marginBottom: "20px",
    },
    socialContainer: {
      display: "flex",
      gap: "25px",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    socialIcon: {
      color: colors.white,
      transition: "opacity 0.3s ease",
      cursor: "pointer",
      opacity: 0.7,
    },
    copyright: {
      textAlign: "center",
      fontSize: "0.65rem",
      letterSpacing: "2px",
      color: colors.muted,
      textTransform: "uppercase",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      paddingTop: "30px",
      margin: 0,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brandSection}>
          <div style={styles.logoText}>SCARLETT MARQUE</div>
          <div style={styles.addressText}>
            Longwa Phase 3, Before Solomon Lar Amusement Park, House 11, Shop
            No. 3, Jos, Nigeria
            <br />
            Lagos, Nigeria
            <br />
            <span
              style={{
                marginTop: "15px",
                display: "block",
                color: colors.white,
              }}
            >
              thescarlettmarqueNg@gmail.com
            </span>
          </div>
        </div>

        <div>
          <div style={styles.heading}>Information</div>
          <div style={styles.addressText}>
            Privacy Policy
            <br />
            Terms of Service
            <br />
            Shipping & Returns
          </div>
        </div>

        <div>
          <div style={styles.heading}>Follow The Label</div>
          <div style={styles.socialContainer}>
            <a
              href="https://instagram.com/_thescarlettmarque?igsh=bjF6ZmR3OW80YzZ2"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/share/1Dq3x3bYRA/?mibextid=wwXIfr&u=https%3A%2F%2Fwww.facebook.com%2F_thescarlettmarque%2F"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://tiktok.com/@scarlettmarqueng"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <Music2 size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/2349036830073"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        © 2026 Scarlett Marque. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
