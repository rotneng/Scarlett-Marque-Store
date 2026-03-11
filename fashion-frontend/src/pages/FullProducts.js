import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FullProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    accent: "#f9f9f9",
  };

  const sampleProducts = [
    {
      _id: "1",
      name: "Structured Atelier Blazer",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000",
      ],
    },
    {
      _id: "2",
      name: "Silk Drape Evening Gown",
      images: [
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000",
      ],
    },
    {
      _id: "3",
      name: "Minimalist Wool Trousers",
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000",
      ],
    },
    {
      _id: "4",
      name: "Heritage Cashmere Coat",
      images: [
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000",
      ],
    },
    {
      _id: "5",
      name: "Sculptural Midi Dress",
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000",
      ],
    },
    {
      _id: "6",
      name: "Signature Leather Tote",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000",
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/all");
        setProducts(res.data.length > 0 ? res.data : sampleProducts);
        setTimeout(() => setLoading(false), 1000);
      } catch (err) {
        setProducts(sampleProducts);
        setLoading(false);
      }
    };

    fetchProducts();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const styles = {
    container: {
      paddingTop: isMobile ? "100px" : "150px",
      paddingLeft: "6%",
      paddingRight: "6%",
      backgroundColor: colors.white,
      minHeight: "100vh",
      color: colors.brandGreen,
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      paddingBottom: isMobile ? "80px" : "120px",
      overflowX: "hidden",
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: isMobile ? "60px" : "100px",
      borderBottom: `1px solid rgba(0, 51, 32, 0.08)`,
      paddingBottom: "20px",
    },
    title: {
      fontSize: isMobile ? "1.8rem" : "3.5rem",
      letterSpacing: isMobile ? "8px" : "18px",
      textTransform: "uppercase",
      fontWeight: "300",
      margin: 0,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? "60px" : "100px 50px",
    },
    imgWrapper: {
      aspectRatio: "3/4",
      overflow: "hidden",
      backgroundColor: colors.accent,
      marginBottom: "24px",
      position: "relative",
      cursor: "pointer",
    },
    productInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    productName: {
      fontSize: "0.8rem",
      letterSpacing: "3.5px",
      textTransform: "uppercase",
      fontWeight: "600",
      margin: 0,
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.container}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            style={{
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{
                height: "1px",
                backgroundColor: colors.brandGreen,
                width: "120px",
                marginBottom: "20px",
                transformOrigin: "left",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div style={styles.topBar}>
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "3px",
                    opacity: 0.5,
                    marginBottom: "8px",
                  }}
                >
                  COLLECTION 01
                </p>
                <h1 style={styles.title}>The Archive</h1>
              </div>
              {!isMobile && (
                <RouterLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: colors.brandGreen,
                    fontSize: "0.65rem",
                    letterSpacing: "3px",
                    opacity: 0.6,
                  }}
                >
                  RETURN
                </RouterLink>
              )}
            </div>

            <div style={styles.grid}>
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <div style={styles.imgWrapper}>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div style={styles.productInfo}>
                    <h3 style={styles.productName}>{product.name}</h3>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight
                        size={16}
                        strokeWidth={1}
                        style={{ opacity: 0.4 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullProducts;
