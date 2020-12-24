import React from "react";
import "./index.css";

export const NotFound = () => {
  return (
    <section className="error-message view-content">
      <h1 className="error-code">404</h1>
      <p className="error-description">Page not found</p>
      <a href="/" className="error-link">
        Go to homepage
      </a>
    </section>
  );
};

