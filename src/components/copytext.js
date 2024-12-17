import React, { useState } from "react";

function CopyText({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy) // Copy text to clipboard
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Show feedback for 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <p
        onClick={handleCopy}
        style={{
          display: "inline-block",
          cursor: "pointer", // Show pointer cursor
          padding: "0.5rem",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "1rem",
          transition: "background-color 0.3s ease", // Smooth hover effect
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6e6e6")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#f9f9f9")}
      >
        {textToCopy} 📋
      </p>
      {copied && (
        <span style={{ display: "block", marginTop: "0.5rem", color: "green" }}>
          Address Copied!
        </span>
      )}
    </div>
  );
}

export default CopyText;
