import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    accentGray: "#f4f4f4",
  };

  const styles = {
    section: {
      padding: isMobile ? "80px 6%" : "140px 8%",
      backgroundColor: colors.white,
      color: colors.brandGreen,
      fontFamily: '"Helvetica Neue", sans-serif',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    rowContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "center" : "flex-start",
      gap: isMobile ? "50px" : "80px",
      maxWidth: "1100px",
      width: "100%",
    },
    imageWrapper: {
      flex: isMobile ? "0 0 auto" : "0 0 320px",
      width: isMobile ? "100%" : "320px",
      maxWidth: "400px",
      position: "relative",
    },
    imageFrame: {
      width: "100%",
      aspectRatio: "3/4",
      overflow: "hidden",
      backgroundColor: colors.accentGray,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    textSide: {
      flex: "1",
      textAlign: isMobile ? "center" : "left",
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start",
    },
    label: {
      fontSize: "0.7rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      opacity: 0.5,
      marginBottom: "20px",
      display: "block",
    },
    heading: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      fontWeight: "800",
      letterSpacing: "4px",
      textTransform: "uppercase",
      lineHeight: "1.2",
      marginBottom: "30px",
    },
    content: {
      fontSize: "0.95rem",
      lineHeight: "1.8",
      maxWidth: "550px",
      opacity: 0.8,
    },
    signatureContainer: {
      marginTop: "40px",
      borderTop: `1px solid ${colors.brandGreen}22`,
      paddingTop: "25px",
      display: "inline-block",
      textAlign: isMobile ? "center" : "left",
    },
    signature: {
      fontFamily: "serif",
      fontStyle: "italic",
      fontSize: "1.4rem",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.rowContainer}>
        <motion.div
          style={styles.imageWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div style={styles.imageFrame}>
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
              alt="Atelier Textile"
              style={styles.image}
            />
          </div>
          <span
            style={{
              position: "absolute",
              bottom: "-30px",
              left: isMobile ? "50%" : "0",
              transform: isMobile ? "translateX(-50%)" : "none",
              fontSize: "0.55rem",
              letterSpacing: "2px",
              opacity: 0.4,
              whiteSpace: "nowrap",
            }}
          >
            FIG. 01 — ARCHIVE TEXTILE
          </span>
        </motion.div>

        <div style={styles.textSide}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span style={styles.label}>EST. 2018 — OUR STORY</span>
            <h2 style={styles.heading}>
              Empowering the <br />
              <span style={{ fontWeight: "300" }}>Female Form.</span>
            </h2>

            <div style={styles.content}>
              <p>
                Scarlett Marque is a contemporary fashion house dedicated
                exclusively to the art of female clothing. Our atelier is driven
                by a single purpose: to define modern femininity through
                structural precision and fluid movement.
              </p>
              <p style={{ marginTop: "15px" }}>
                Moving beyond the constraints of seasonal trends, we craft
                enduring silhouettes that celebrate strength and grace. Each
                design is an architectural study of the female
                silhouette—utilizing the world's finest textiles to create
                garments that are as resilient as they are refined.
              </p>
            </div>

            <div style={styles.signatureContainer}>
              <div style={styles.signature}>Scarlett Marque</div>
              <span
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "2px",
                  opacity: 0.5,
                  display: "block",
                }}
              >
                JOS, NIGERIA
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
