import React from "react";
import "./FounderMessage.css";
import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import founderImg from "/founder.jpg";

const FounderMessage = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/about/page/founders-messages`);
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Failed to load founder message data", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <NewFooter />
    </>
  );

  const renderSlateContent = (content) => {
    if (!content) return null;
    let parsedContent;
    try {
      parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
    } catch (e) {
      // If parsing fails, treat as HTML string
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    if (!Array.isArray(parsedContent)) return <div dangerouslySetInnerHTML={{ __html: parsedContent }} />;

    return parsedContent.map((node, index) => {
      switch (node.type) {
        case 'paragraph':
          return (
            <p key={index} className="mb-3">
              {node.children.map((child, i) => {
                let text = child.text;
                if (child.bold) text = <strong key={i}>{text}</strong>;
                if (child.italic) text = <em key={i}>{text}</em>;
                if (child.underline) text = <u key={i}>{text}</u>;
                return <React.Fragment key={i}>{text}</React.Fragment>;
              })}
            </p>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <Navbar />
      <h4
        className="display-4 fw-bold col-12 col-lg-12 text-lg-left text-center my-4 mx-lg-5 m-0"
        dangerouslySetInnerHTML={{ __html: data.heading || "Message from the Founder & Chairman" }}
      />
      <section className="founder-section">
        <div className="founder-content">
          <p className="founder-subtitle">{data.founderTitle?.toUpperCase()}</p>
          <h1 className="founder-name">{data.founderName}</h1>
          <p className="founder-org">{data.founderOrg}</p>
        </div>
        <div className="founder-image-wrapper">
          <img src={data.founderImage || founderImg} alt="Founder" className="founder-image" />
        </div>
      </section>
      <div className="founder-message-page">
        <div className="container p-0">
          <section className="founder-message-section text-dark">
            <div className="message-wrapper">
              <div className="story-paragraph">
                {renderSlateContent(data.messageContent)}
              </div>
              <p className="signature">
                Warm regards,
                <br />
                <strong>{data.signatureName}</strong>
                <br />
                {data.signatureTitle}
                <br />
                {data.signatureOrg}
              </p>
            </div>
          </section>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default FounderMessage;
