import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./ProgramBanner.css";

const ProgramBanner = () => {
  const location = useLocation();

  // Extract last part of URL for dynamic title
  const pathParts = location.pathname.split("/").filter(Boolean);
  const pageTitle = pathParts[pathParts.length - 1] || "Home";

  // Convert slug-like text into readable format
  const formatTitle = (text) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section className="program-banner">
      <div className="overlay">
        <Container className="text-center">
          <p className="breadcrumb">
            Home <span className="divider">›</span>{" "}
            {pathParts.length > 1 ? formatTitle(pathParts[pathParts.length - 2]) : "Program"}{" "}
            <span className="divider">›</span>{" "}
            <span className="current">{formatTitle(pageTitle)}</span>
          </p>
          <h1 className="program-title">{formatTitle(pageTitle)}</h1>
        </Container>
      </div>
    </section>
  );
};

export default ProgramBanner;
