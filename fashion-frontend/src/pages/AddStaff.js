import React, { useState, useEffect } from "react";
import { UserPlus, UploadCloud, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddStaff = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

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
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload a portrait image.");

    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/staff/add", data);
      alert("Creative successfully registered to the label.");

      setFormData({ name: "", role: "" });
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Failed to register staff. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    inputBg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.15)",
  };

  const styles = {
    page: {
      padding: isMobile ? "80px 5% 60px" : "120px 10% 80px",
      backgroundColor: colors.brandGreen,
      minHeight: "100vh",
      color: colors.white,
      fontFamily: '"Helvetica Neue", sans-serif',
    },
    backBtn: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: colors.white,
      textDecoration: "none",
      fontSize: "0.8rem",
      letterSpacing: "2px",
      marginBottom: "30px",
      textTransform: "uppercase",
    },
    formContainer: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      padding: isMobile ? "30px 20px" : "50px",
      border: `1px solid ${colors.border}`,
      borderRadius: "2px",
    },
    title: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      letterSpacing: "6px",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "10px",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "0.75rem",
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "2px",
      marginBottom: "40px",
      textTransform: "uppercase",
    },
    inputGroup: {
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    label: {
      fontSize: "0.7rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      opacity: 0.7,
    },
    input: {
      backgroundColor: colors.inputBg,
      border: `1px solid ${colors.border}`,
      padding: "12px",
      color: colors.white,
      fontSize: "1rem",
      outline: "none",
    },
    uploadBox: {
      border: `1px dashed ${colors.border}`,
      padding: "30px",
      textAlign: "center",
      cursor: "pointer",
      backgroundColor: "rgba(255,255,255,0.02)",
      transition: "0.3s",
      position: "relative",
      overflow: "hidden",
      minHeight: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    previewImg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.6,
    },
    submitBtn: {
      width: "100%",
      padding: "15px",
      backgroundColor: loading ? "#333" : colors.white,
      color: colors.brandGreen,
      border: "none",
      fontWeight: "bold",
      letterSpacing: "3px",
      textTransform: "uppercase",
      cursor: loading ? "not-allowed" : "pointer",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.page}>
      <Link to="/" style={styles.backBtn}>
        <ArrowLeft size={16} /> Dashboard
      </Link>

      <div style={styles.formContainer}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <UserPlus size={40} strokeWidth={1} />
        </div>
        <h1 style={styles.title}>Register Staff</h1>
        <p style={styles.subtitle}>Add a new creative to the label</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              name="name"
              required
              value={formData.name}
              style={styles.input}
              placeholder="e.g. Julian Vane"
              onChange={handleInputChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Professional Role</label>
            <input
              name="role"
              required
              value={formData.role}
              style={styles.input}
              placeholder="e.g. Head of Atelier"
              onChange={handleInputChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Profile Image</label>
            <label htmlFor="staffFile" style={styles.uploadBox}>
              {preview ? (
                <img src={preview} alt="Preview" style={styles.previewImg} />
              ) : (
                <>
                  <UploadCloud size={24} style={{ marginBottom: "10px" }} />
                  <p style={{ fontSize: "0.65rem", letterSpacing: "1px" }}>
                    UPLOAD PORTRAIT (4:5 RATIO)
                  </p>
                </>
              )}
              <input
                id="staffFile"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
          </div>

          <button type="submit" disabled={loading} style={styles.submitBtn}>
            {loading ? "ARCHIVING..." : "Confirm Entry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
