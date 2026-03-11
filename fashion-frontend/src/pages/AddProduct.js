import React, { useState, useEffect } from "react";
import axios from "axios";
import { X, UploadCloud } from "lucide-react";

const AddProduct = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(filePreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0)
      return alert("Please upload at least one image.");

    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("description", formData.description);

    selectedFiles.forEach((file) => {
      data.append("images", file);
    });

    try {
      await axios.post("http://localhost:5000/api/products/add", data);
      alert("Piece successfully archived.");
      setFormData({ name: "", price: "", category: "", description: "" });
      setPreviews([]);
      setSelectedFiles([]);
    } catch (err) {
      console.error(err);
      alert("Archive entry failed. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    inputBg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.2)",
  };

  const styles = {
    page: {
      padding: isMobile ? "100px 5% 60px" : "140px 10% 80px",
      backgroundColor: colors.brandGreen,
      minHeight: "100vh",
      color: colors.white,
      fontFamily: '"Helvetica Neue", sans-serif',
    },
    formCard: {
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      padding: isMobile ? "30px 20px" : "50px",
      border: `1px solid ${colors.border}`,
      borderRadius: "4px",
    },
    title: {
      fontSize: isMobile ? "1.5rem" : "2.2rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "40px",
    },
    inputGroup: {
      marginBottom: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    label: {
      fontSize: "0.75rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      opacity: 0.8,
    },
    input: {
      backgroundColor: colors.inputBg,
      border: `1px solid ${colors.border}`,
      padding: "15px",
      color: colors.white,
      fontSize: "1rem",
      outline: "none",
      borderRadius: "2px",
    },
    imageUploadArea: {
      border: `2px dashed ${colors.border}`,
      padding: "40px 20px",
      textAlign: "center",
      cursor: "pointer",
      marginBottom: "20px",
    },
    previewGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      gap: "15px",
      marginTop: "20px",
    },
    previewImg: {
      width: "100%",
      aspectRatio: "1/1",
      objectFit: "cover",
      border: `1px solid ${colors.white}`,
    },
    submitBtn: {
      width: "100%",
      backgroundColor: loading ? "#444" : colors.white,
      color: colors.brandGreen,
      border: "none",
      padding: "18px",
      fontSize: "0.9rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "3px",
      cursor: loading ? "not-allowed" : "pointer",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>New Piece Entry</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Product Name</label>
            <input
              name="name"
              required
              value={formData.name}
              placeholder="e.g., Midnight Velvet Blazer"
              style={styles.input}
              onChange={handleInputChange}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "20px",
            }}
          >
            <div style={styles.inputGroup}>
              <label style={styles.label}>Price (USD)</label>
              <input
                name="price"
                type="number"
                required
                value={formData.price}
                placeholder="0.00"
                style={styles.input}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Category</label>
              <select
                name="category"
                required
                value={formData.category}
                style={styles.input}
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                <option value="outerwear">Outerwear</option>
                <option value="essentials">Essentials</option>
                <option value="couture">Couture</option>
              </select>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Detailed Description</label>
            <textarea
              name="description"
              required
              value={formData.description}
              rows="4"
              style={{ ...styles.input, resize: "none" }}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Visual Assets</label>
            <label htmlFor="fileInput" style={styles.imageUploadArea}>
              <UploadCloud
                size={40}
                style={{ marginBottom: "10px", opacity: 0.5 }}
              />
              <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                CLICK TO SELECT IMAGES
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                id="fileInput"
                onChange={handleFileChange}
              />
            </label>

            <div style={styles.previewGrid}>
              {previews.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Preview"
                  style={styles.previewImg}
                />
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading} style={styles.submitBtn}>
            {loading ? "Archiving..." : "Publish to Archive"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
