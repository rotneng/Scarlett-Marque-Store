import React, { useState, useEffect } from "react";
// FIXED: Changed 'lucide-material' to 'lucide-react'
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
    brandGreen: "#003320",
    white: "#ffffff",
    muted: "rgba(255, 255, 255, 0.6)",
  };

  const styles = {
    footer: {
      backgroundColor: colors.brandGreen,
      color: colors.white,
      padding: isMobile ? "60px 5% 30px" : "80px 8% 40px",
      fontFamily: '"Helvetica Neue", sans-serif',
      borderTop: "1px solid rgba(255,255,255,0.1)",
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
      letterSpacing: "4px",
      textTransform: "uppercase",
    },
    addressText: {
      fontSize: "0.85rem",
      lineHeight: "1.6",
      color: colors.muted,
      letterSpacing: "1px",
    },
    heading: {
      fontSize: "0.9rem",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: "20px",
    },
    socialContainer: {
      display: "flex",
      gap: "20px",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    socialIcon: {
      color: colors.white,
      transition: "opacity 0.3s ease",
      cursor: "pointer",
    },
    copyright: {
      textAlign: "center",
      fontSize: "0.7rem",
      letterSpacing: "2px",
      color: colors.muted,
      textTransform: "uppercase",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      paddingTop: "30px",
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
            <span style={{ marginTop: "10px", display: "block" }}>
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
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/share/1Dq3x3bYRA/?mibextid=wwXIfr&u=https%3A%2F%2Fwww.facebook.com%2F_thescarlettmarque%2F"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
            >
              <Facebook size={22} />
            </a>
            {/* TikTok Link */}
            <a
              href="https://tiktok.com/@scarlettmarqueng"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
            >
              <Music2 size={22} />
            </a>
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/2349036830073"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
            >
              <MessageCircle size={22} />
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