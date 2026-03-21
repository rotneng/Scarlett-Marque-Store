import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sophia Loren",
      text: "The attention to detail in the tailoring is unlike anything I've seen. A true heirloom piece.",
      location: "Milan",
    },
    {
      id: 2,
      name: "James Sterling",
      text: "Scarlett Marque defines modern elegance. The Structured Blazer fits like a second skin.",
      location: "London",
    },
    {
      id: 3,
      name: "Aria Chen",
      text: "Exceptional quality and a seamless shopping experience. The fabric quality is world-class.",
      location: "New York",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    sectionBg: "#fcfcf9",
  };

  const styles = {
    section: {
      padding: "160px 8%",
      backgroundColor: colors.sectionBg,
      color: colors.brandGreen,
      textAlign: "center",
      fontFamily: '"Helvetica Neue", sans-serif',
      overflow: "hidden",
      width: "100%",
      boxSizing: "border-box",
    },
    container: {
      position: "relative",
      height: "280px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "800px",
      margin: "0 auto",
    },
    label: {
      fontSize: "0.7rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      opacity: 0.6,
      display: "block",
      marginBottom: "15px",
    },
    stars: {
      display: "flex",
      gap: "5px",
      justifyContent: "center",
      marginBottom: "25px",
    },
    quote: {
      fontSize: "1.3rem",
      lineHeight: "1.6",
      fontStyle: "italic",
      marginBottom: "30px",
      fontWeight: "300",
      letterSpacing: "0.5px",
    },
    author: {
      fontSize: "0.85rem",
      letterSpacing: "3px",
      textTransform: "uppercase",
      fontWeight: "700",
      display: "block",
    },
    location: {
      fontSize: "0.65rem",
      letterSpacing: "2px",
      opacity: 0.5,
      marginTop: "5px",
      textTransform: "uppercase",
    },
  };

  return (
    <section id="reviews" style={styles.section}>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        style={styles.label}
      >
        Client Voices
      </motion.span>

      <div style={styles.container}>
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            style={{ position: "absolute", width: "100%" }}
          >
            <div style={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={colors.brandGreen}
                  color={colors.brandGreen}
                />
              ))}
            </div>

            <p style={styles.quote}>"{testimonials[index].text}"</p>

            <span style={styles.author}>{testimonials[index].name}</span>
            <span style={styles.location}>{testimonials[index].location}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "40px",
        }}
      >
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: i === index ? 1 : 0.2,
              scale: i === index ? 1.2 : 1,
            }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: colors.brandGreen,
              cursor: "pointer",
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
