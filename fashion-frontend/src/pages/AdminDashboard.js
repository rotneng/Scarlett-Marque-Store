import React from "react";
import { useNavigate } from "react-router-dom";
import { PackagePlus, Users, LogOut, ArrowRight } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const colors = {
    brandGreen: "#003320",
    white: "#ffffff",
    cardBg: "rgba(255, 255, 255, 0.03)",
    border: "rgba(255, 255, 255, 0.1)",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: colors.brandGreen,
      color: colors.white,
      fontFamily: '"Helvetica Neue", sans-serif',
      padding: "120px 5% 60px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    title: {
      fontSize: "2rem",
      letterSpacing: "8px",
      textTransform: "uppercase",
      margin: "0 0 10px 0",
    },
    subtitle: {
      fontSize: "0.8rem",
      letterSpacing: "3px",
      opacity: 0.6,
      textTransform: "uppercase",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      width: "100%",
      maxWidth: "900px",
    },
    card: {
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.border}`,
      padding: "40px",
      textAlign: "left",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "200px",
    },
    cardHover: {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: colors.white,
    },
    iconBox: {
      marginBottom: "20px",
      opacity: 0.8,
    },
    cardLabel: {
      fontSize: "1.2rem",
      letterSpacing: "4px",
      textTransform: "uppercase",
      fontWeight: "600",
    },
    logoutBtn: {
      marginTop: "60px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "transparent",
      border: `1px solid ${colors.border}`,
      color: colors.white,
      padding: "12px 25px",
      cursor: "pointer",
      fontSize: "0.7rem",
      letterSpacing: "2px",
      textTransform: "uppercase",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Control Center</h1>
        <p style={styles.subtitle}>Scarlett Marque Administrative Suite</p>
      </div>

      <div style={styles.grid}>
        <div
          style={styles.card}
          onClick={() => navigate("/admin/add-product")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.cardHover.backgroundColor;
            e.currentTarget.style.borderColor = styles.cardHover.borderColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = styles.card.backgroundColor;
            e.currentTarget.style.borderColor = styles.card.border;
          }}
        >
          <div style={styles.iconBox}>
            <PackagePlus size={32} strokeWidth={1.5} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={styles.cardLabel}>Archive Inventory</span>
            <ArrowRight size={20} />
          </div>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/admin/add-staff")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.cardHover.backgroundColor;
            e.currentTarget.style.borderColor = styles.cardHover.borderColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = styles.card.backgroundColor;
            e.currentTarget.style.borderColor = styles.card.border;
          }}
        >
          <div style={styles.iconBox}>
            <Users size={32} strokeWidth={1.5} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={styles.cardLabel}>Label Creatives</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

      <button
        style={styles.logoutBtn}
        onClick={handleLogout}
        onMouseOver={(e) => (e.target.style.borderColor = colors.white)}
        onMouseOut={(e) => (e.target.style.borderColor = colors.border)}
      >
        <LogOut size={16} /> Exit Portal
      </button>
    </div>
  );
};

export default AdminDashboard;
