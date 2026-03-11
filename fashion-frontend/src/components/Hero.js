import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    overlay:
      "linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.7) 100%)",
  };

  const styles = {
    heroSection: {
      position: "relative",
      height: "100dvh",
      width: "100%",
      overflow: "hidden",
      backgroundColor: colors.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundWrapper: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
    },
    backgroundImage: {
      width: "100%",
      height: "100%",
      background: `${colors.overlay}, url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    contentContainer: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1400px",
      padding: isMobile ? "0 24px" : "0 60px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    subtitle: {
      display: "block",
      letterSpacing: isSmallMobile ? "4px" : "8px",
      fontSize: isSmallMobile ? "0.6rem" : "0.75rem",
      fontWeight: "500",
      color: colors.brandGreen,
      textTransform: "uppercase",
      marginBottom: "10px",
      opacity: 0.8,
    },
    h1: {
      fontSize: `clamp(${isMobile ? "2rem" : "3.5rem"}, 8vw, 7rem)`,
      fontWeight: "700",
      letterSpacing: isMobile ? "0.2em" : "0.4em",
      color: colors.brandGreen,
      textTransform: "uppercase",
      margin: "0 0 40px 0",
      lineHeight: 1.1,
      textIndent: isMobile ? "0.2em" : "0.4em",
    },
    btnPrimary: {
      background: "transparent",
      color: colors.brandGreen,
      border: `1px solid ${colors.brandGreen}`,
      padding: isMobile ? "16px 40px" : "22px 80px",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontSize: isMobile ? "0.65rem" : "0.75rem",
      fontWeight: "600",
      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      outline: "none",
    },
  };

  return (
    <section id="hero" style={styles.heroSection}>
      <motion.div
        style={styles.backgroundWrapper}
        initial={{ scale: 1.15, filter: "blur(5px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={styles.backgroundImage} />
      </motion.div>

      <div style={styles.contentContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            style={styles.subtitle}
            initial={{ opacity: 0, letterSpacing: "2px" }}
            animate={{
              opacity: 1,
              letterSpacing: isSmallMobile ? "4px" : "8px",
            }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Established 2026
          </motion.span>

          <motion.h1 style={styles.h1}>
            Scarlett <br /> Marque
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="gallery" smooth={true} duration={1000} offset={-80}>
              <motion.button
                whileHover={{
                  backgroundColor: colors.brandGreen,
                  color: colors.white,
                  letterSpacing: "5px",
                  paddingLeft: "45px",
                  paddingRight: "40px",
                }}
                whileTap={{ scale: 0.97 }}
                style={styles.btnPrimary}
              >
                View Archive
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
