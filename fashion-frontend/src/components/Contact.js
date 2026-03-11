import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    border: "rgba(0, 51, 32, 0.15)",
  };

  const contactLinks = [
    {
      label: "WhatsApp",
      value: "Scarlett Marque",
      url: "https://wa.me/+2349036830073",
    },
    {
      label: "Instagram",
      value: "@_thescarlettmarque",
      url: "https://www.instagram.com/_thescarlettmarque?igsh=bjF6ZmR3OW80YzZ2",
    },
    {
      label: "Email",
      value: "thescarlettmarqueNg@gmail.com",
      url: "mailto:thescarlettmarqueNg@gmail.com",
    },
     {
      label: "Facebook",
      value: "@_thescarlettmarque",
      url: "https://www.facebook.com/share/1Dq3x3bYRA/?mibextid=wwXIfr&u=https%3A%2F%2Fwww.facebook.com%2F_thescarlettmarque%2F",
    },
     {
      label: "TikTok",
      value: "@scarlettmarque",
      url: "https://www.tiktok.com/@scarlettmarqueng?_t=ZM-8xfAh5tVWo4&_r=1",
    },
    { label: "Phone", value: "+234 903 683 0073", url: "tel:+2349036830073" },
  ];

  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: colors.white,
      color: colors.brandGreen,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 10%",
      fontFamily: '"Helvetica Neue", sans-serif',
      boxSizing: "border-box",
    },
    rowContainer: {
      display: "flex",
      flexDirection: window.innerWidth > 992 ? "row" : "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "80px",
      maxWidth: "1400px",
      width: "100%",
    },
    infoSide: {
      flex: "1",
      maxWidth: "500px",
      textAlign: window.innerWidth > 992 ? "left" : "center",
    },
    listSide: {
      flex: "1.2",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "0.8rem",
      letterSpacing: "6px",
      textTransform: "uppercase",
      opacity: 0.5,
      marginBottom: "20px",
      display: "block",
    },
    title: {
      fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
      fontWeight: "800",
      letterSpacing: "8px",
      textTransform: "uppercase",
      lineHeight: "0.9",
      margin: "0 0 30px 0",
    },
    description: {
      fontSize: "1rem",
      opacity: 0.7,
      lineHeight: "1.8",
      maxWidth: "400px",
      margin: window.innerWidth > 992 ? "0" : "0 auto",
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 0",
      borderBottom: `1px solid ${colors.border}`,
      textDecoration: "none",
      color: colors.brandGreen,
      transition: "all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    itemLabel: {
      fontSize: "0.7rem",
      letterSpacing: "4px",
      textTransform: "uppercase",
      opacity: 0.4,
      marginBottom: "8px",
      display: "block",
    },
    itemValue: {
      fontSize: "1.3rem",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.rowContainer}>
        <motion.div
          style={styles.infoSide}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span style={styles.label}>Private Client</span>
          <h2 style={styles.title}>
            Direct
            <br />
            Channels
          </h2>
          <p style={styles.description}>
            Our atelier is available for bespoke tailoring, archive access, or
            private viewing appointments via our digital concierge.
          </p>
        </motion.div>

        <motion.div
          style={styles.listSide}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              style={{
                ...styles.listItem,
                borderTop: index === 0 ? `1px solid ${colors.border}` : "none",
              }}
              whileHover={{
                paddingLeft: "20px",
                backgroundColor: "rgba(0, 51, 32, 0.02)",
              }}
            >
              <div>
                <span style={styles.itemLabel}>{link.label}</span>
                <div style={styles.itemValue}>{link.value}</div>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight
                  size={28}
                  strokeWidth={1}
                  style={{ opacity: 0.3 }}
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
