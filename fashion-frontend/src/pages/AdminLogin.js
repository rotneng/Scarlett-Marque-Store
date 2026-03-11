import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "password123") {
      localStorage.setItem("adminToken", "true");
      navigate("/admin/dashboard");
    } else {
      setError("ACCESS DENIED: INVALID CREDENTIALS");
    }
  };

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    error: "#ff4d4d",
  };

  const styles = {
    page: {
      height: "100vh",
      backgroundColor: colors.brandGreen,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: '"Helvetica Neue", sans-serif',
      color: colors.white,
      padding: "20px",
    },
    card: {
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      padding: "40px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: "4px",
    },
    title: {
      fontSize: "1.2rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      marginBottom: "30px",
    },
    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "20px",
      backgroundColor: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.2)",
      color: colors.white,
      outline: "none",
      textAlign: "center",
      letterSpacing: "2px",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "15px",
      backgroundColor: colors.white,
      color: colors.brandGreen,
      border: "none",
      fontWeight: "800",
      textTransform: "uppercase",
      letterSpacing: "3px",
      cursor: "pointer",
      transition: "opacity 0.3s ease",
    },
    errorText: {
      color: colors.error,
      fontSize: "0.7rem",
      marginTop: "15px",
      letterSpacing: "1px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <Lock size={30} style={{ marginBottom: "20px", opacity: 0.5 }} />
        <h2 style={styles.title}>Staff Portal</h2>

        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="ENTER ACCESS KEY"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.button}>
            Authorize
          </button>
        </form>

        {error && <div style={styles.errorText}>{error}</div>}
      </div>
    </div>
  );
};

export default AdminLogin;