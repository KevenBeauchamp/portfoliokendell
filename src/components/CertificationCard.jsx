import React from "react";

export default function CertificationCard({ title, issuer, image, link }) {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-icon" />

      <h3 className="skill-title">{title}</h3>
      <p className="skill-issuer">{issuer}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="credential-btn">
          View Credential →
        </button>
      </a>
    </div>
  );
}