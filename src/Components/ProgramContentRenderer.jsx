import React from "react";

export default function ProgramContentRenderer({ sections = [] }) {
  if (!sections.length) return null;

  return (
    <div className="container py-5">
      {sections.map((section, index) => (
        <section key={`${section.title}-${index}`} className="mb-5">
          {section.title && (
            <h2 className="display-6 fw-bold mb-3">
              {section.title}
            </h2>
          )}
          <RenderContent section={section} />
        </section>
      ))}
    </div>
  );
}

function RenderContent({ section }) {
  const { contentType, contentData } = section;

  if (contentType === "content" || contentType === "imageText" || contentType === "cta") {
    return (
      <div className="row g-4 align-items-center">
        {contentData?.image && (
          <div className="col-12 col-lg-5">
            <img src={contentData.image} alt={contentData.imageAlt || section.title || ""} className="img-fluid rounded-4" />
          </div>
        )}
        <div className={contentData?.image ? "col-12 col-lg-7" : "col-12"}>
          {contentData?.eyebrow && <p className="text-uppercase fw-semibold small mb-2">{contentData.eyebrow}</p>}
          {contentData?.subtitle && <h3 className="h4 mb-3">{contentData.subtitle}</h3>}
          {contentData?.body && <p style={{ textAlign: "justify" }}>{contentData.body}</p>}
          {contentData?.buttonText && contentData?.link && (
            <a href={contentData.link} className="btn btn-dark mt-2">{contentData.buttonText}</a>
          )}
        </div>
      </div>
    );
  }

  if (contentType === "cardGrid") {
    const cards = contentData?.cards || [];
    return (
      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="h-100 rounded-4 border p-4 bg-white">
              {card.image && <img src={card.image} alt={card.title || ""} className="img-fluid rounded-3 mb-3" />}
              <h3 className="h5 fw-bold">{card.title}</h3>
              <p className="mb-0 text-muted">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (contentType === "statGrid") {
    const stats = contentData?.stats || [];
    return (
      <div className="row g-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="rounded-4 border p-4 bg-white text-center">
              <h3 className="display-6 fw-bold">{stat.value}</h3>
              <p className="fw-semibold mb-1">{stat.label}</p>
              <p className="small text-muted mb-0">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (contentType === "timeline") {
    const steps = contentData?.steps || [];
    return (
      <div className="row g-3">
        {steps.map((step, index) => (
          <div key={index} className="col-12 col-md-6">
            <div className="rounded-4 border p-4 bg-white h-100">
              {step.label && <p className="small fw-semibold text-muted mb-2">{step.label}</p>}
              <h3 className="h5 fw-bold">{step.title}</h3>
              <p className="mb-0 text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (contentType === "accordion") {
    const items = contentData?.items || [];
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <details key={index} className="rounded-3 border p-3 mb-2 bg-white">
            <summary className="fw-semibold">{item.title}</summary>
            <p className="mt-2 mb-0 text-muted">{item.content}</p>
          </details>
        ))}
      </div>
    );
  }

  if (contentType === "list") {
    const items = Array.isArray(contentData) ? contentData : [];
    return (
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }

  if (contentType === "table") {
    const headers = contentData?.headers || [];
    const rows = contentData?.rows || [];
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>{headers.map((header, index) => <th key={index}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (contentType === "text") return <p>{contentData}</p>;
  if (contentType === "image") return <img src={contentData} alt={section.title || ""} className="img-fluid rounded-4" />;

  return null;
}
