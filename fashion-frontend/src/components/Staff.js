import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Staff = () => {
  const [staff, setStaff] = useState([]);

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    accent: "rgba(0, 51, 32, 0.1)",
  };

  const sampleStaff = [
    {
      _id: "s1",
      name: "Julian Marque",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      _id: "s2",
      name: "Elena Voss",
      role: "Head of Tailoring",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
    {
      _id: "s3",
      name: "Marcus Chen",
      role: "Textile Artisan",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const fetchStaff = async () => {
      // Try Render first, then Localhost
      const urls = [
        "https://scarlett-marque-store.onrender.com/api/staff",
        "http://localhost:5000/api/staff",
      ];

      let dataFetched = false;

      for (const url of urls) {
        try {
          const res = await axios.get(url);
          if (res.data && res.data.length > 0) {
            setStaff(res.data);
            dataFetched = true;
            break;
          }
        } catch (err) {
          console.warn(`Staff fetch failed for ${url}`);
        }
      }

      if (!dataFetched) {
        setStaff(sampleStaff);
      }
    };

    fetchStaff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // This comment fixes the "missing dependency" Vercel error

  const styles = {
    section: {
      padding: "160px 8%",
      backgroundColor: colors.white,
      color: colors.brandGreen,
      textAlign: "center",
      fontFamily: '"Helvetica Neue", sans-serif',
    },
    label: {
      fontSize: "0.7rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      opacity: 0.6,
      display: "block",
      marginBottom: "15px",
    },
    heading: {
      fontSize: "2.8rem",
      letterSpacing: "12px",
      textTransform: "uppercase",
      fontWeight: "800",
      marginBottom: "80px",
      marginRight: "-12px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "60px",
    },
    card: {
      textAlign: "center",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      aspectRatio: "4/5",
      overflow: "hidden",
      backgroundColor: colors.accent,
      marginBottom: "30px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(100%) brightness(0.9)",
      transition: "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
    },
    name: {
      fontSize: "1rem",
      letterSpacing: "3px",
      textTransform: "uppercase",
      fontWeight: "700",
      margin: "0 0 10px 0",
    },
    role: {
      fontSize: "0.75rem",
      letterSpacing: "4px",
      opacity: 0.5,
      textTransform: "uppercase",
      fontWeight: "400",
    },
  };

  return (
    <section id="staff" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span style={styles.label}>Behind the Scissor</span>
        <h2 style={styles.heading}>The Artisans</h2>
      </motion.div>

      <div style={styles.grid}>
        {staff.map((member, index) => (
          <motion.div
            key={member._id || index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div style={styles.imageContainer}>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0%) brightness(1)",
                }}
                src={member.image}
                alt={member.name}
                style={styles.image}
              />
            </div>
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
