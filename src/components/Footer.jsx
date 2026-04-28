export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.5rem",
        fontSize: "0.8rem",
        color: "rgba(128, 128, 128, 0.7)",
        borderTop: "1px solid rgba(128, 128, 128, 0.12)",
      }}
    >
      © {year} Taehoon Yoon · All rights reserved.
    </footer>
  );
}
