import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const GalleryTeaser = () => {
  const [featured, setFeatured] = useState([]);

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    lightGray: "#f4f4f4",
  };

  const samples = [
    {
      _id: "p1",
      name: "The Sculptural Blazer",
      images: [
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500&auto=format&fit=crop&q=60",
      ],
    },
    {
      _id: "p2",
      name: "Atelier Silk Drape",
      images: [
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000",
      ],
    },
    {
      _id: "p3",
      name: "Structured Wool Overcoat",
      images: [
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000",
      ],
    },
  ];

  useEffect(() => {
    const fetchTeaser = async () => {
      const urls = [
        "https://scarlett-marque-store.onrender.com/api/products/all",
        "http://localhost:5000/api/products/all",
      ];

      let success = false;
      for (const url of urls) {
        try {
          const res = await axios.get(url);
          if (res.data && res.data.length > 0) {
            setFeatured(res.data.slice(0, 3));
            success = true;
            break;
          }
        } catch (err) {
          console.warn(`Teaser fetch failed for ${url}`);
        }
      }
      if (!success) setFeatured(samples);
    };

    fetchTeaser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    section: {
      padding: "160px 8%",
      backgroundColor: colors.white,
      color: colors.brandGreen,
      textAlign: "center",
      fontFamily: '"Helvetica Neue", sans-serif',
    },
    titleWrapper: { marginBottom: "80px" },
    label: {
      display: "block",
      fontSize: "0.7rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      opacity: 0.6,
      marginBottom: "15px",
    },
    title: {
      fontSize: "2.8rem",
      letterSpacing: "12px",
      textTransform: "uppercase",
      fontWeight: "800",
      margin: 0,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "50px",
      marginBottom: "80px",
    },
    card: {
      textAlign: "left",
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
    },
    imageWrapper: {
      width: "100%",
      aspectRatio: "3/4",
      overflow: "hidden",
      backgroundColor: colors.lightGray,
      marginBottom: "25px",
    },
    image: { width: "100%", height: "100%", objectFit: "cover" },
    productName: {
      fontSize: "0.9rem",
      letterSpacing: "3px",
      textTransform: "uppercase",
      fontWeight: "700",
      margin: "0 0 8px 0",
    },
    archiveTag: {
      fontSize: "0.7rem",
      letterSpacing: "2px",
      opacity: 0.5,
      textTransform: "uppercase",
    },
    btn: {
      display: "inline-block",
      padding: "20px 50px",
      border: `1px solid ${colors.brandGreen}`,
      color: colors.brandGreen,
      backgroundColor: "transparent",
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "4px",
      fontSize: "0.75rem",
      fontWeight: "700",
      transition: "all 0.5s ease",
    },
  };

  return (
    <section id="gallery" style={styles.section}>
      <motion.div
        style={styles.titleWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span style={styles.label}>Curated Works</span>
        <h2 style={styles.title}>The Selection</h2>
      </motion.div>

      <div style={styles.grid}>
        {featured.map((product, index) => (
          <motion.div
            key={product._id || index}
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div style={styles.imageWrapper}>
              <motion.img
                src={
                  product.images?.[0] || "https://via.placeholder.com/600x800"
                }
                alt={product.name}
                style={styles.image}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.archiveTag}>
              Scarlett Marque Archive № {index + 1}
            </p>
          </motion.div>
        ))}
      </div>

      <Link
        to="/products"
        style={styles.btn}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = colors.brandGreen;
          e.target.style.color = colors.white;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = colors.brandGreen;
        }}
      >
        Explore Full Store
      </Link>
    </section>
  );
};

export default GalleryTeaser;
