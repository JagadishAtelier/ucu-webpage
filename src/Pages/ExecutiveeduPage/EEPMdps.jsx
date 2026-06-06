import { Clock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { getMDPsData } from "../../Api/MDPsApi";

const fallbackData = {
  title: "About the Program",
  paragraphs: [
    "UCU's Management Development Programs (MDPs) are intensive, short-duration learning experiences crafted for working professionals who seek to stay ahead in a rapidly changing business environment. Spanning 1 to 5 days, these programs deliver focused insights into contemporary management practices, emerging industry trends, and practical tools that can be applied immediately in the workplace.",
    "Designed with a balance of academic rigor and industry relevance, MDPs cover critical areas such as leadership effectiveness, operational excellence, financial decision-making, people management, and strategic innovation. Each program blends interactive sessions, case studies, and real-world applications to ensure participants gain actionable knowledge in a compact timeframe.",
    "With expert faculty and seasoned industry practitioners leading the sessions, UCU's MDPs provide professionals with the opportunity to sharpen their skills, refresh their perspectives, and strengthen their readiness for higher responsibilities. These programs are conducted in a professional format, with structured feedback mechanisms to continuously enhance learning outcomes.",
  ],
  monthTitle: "October 2025",
  programs: [
    { dateLabel: "18", month: "OCT", programTitle: "Acquiring Leadership Qualities Early in Life", time: "9:30 am - 11:00 am", fees: "200.00", brochureUrl: "", applyLink: "/contact-us" },
    { dateLabel: "19", month: "OCT", programTitle: "Seven Habits of Successful Teens", time: "9:30 am - 11:00 am", fees: "200.00", brochureUrl: "", applyLink: "/contact-us" },
    { dateLabel: "20", month: "OCT", programTitle: "Managing Mental Health", time: "9:30 am - 11:00 am", fees: "200.00", brochureUrl: "", applyLink: "/contact-us" },
  ],
};

function openLink(link) {
  if (!link) return;
  if (link.startsWith("http") || link.startsWith("mailto:") || link.startsWith("tel:")) {
    window.open(link, "_blank", "noopener,noreferrer");
    return;
  }
  window.location.href = link;
}

function EEPMdps() {
  const [mdpsData, setMdpsData] = useState(fallbackData);

  useEffect(() => {
    let mounted = true;

    getMDPsData().then((data) => {
      if (!mounted || !data) return;
      setMdpsData({
        ...fallbackData,
        ...data,
        paragraphs: data.paragraphs?.length ? data.paragraphs : fallbackData.paragraphs,
        programs: data.programs?.length ? data.programs : fallbackData.programs,
      });
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="captital-campus-content-sec mt-4">
      <h1 className="display-5 fw-bold">
        {mdpsData.title?.includes("About") ? "About " : ""}
        <span style={{ color: "#5ac501" }}>
          {mdpsData.title?.includes("About") ? " the Program" : mdpsData.title}
        </span>
      </h1>
      {(mdpsData.paragraphs || []).map((paragraph, index) => (
        <p className="pt text-justifys" key={index}>{paragraph}</p>
      ))}
      <div className="my-4">
        <Button className="cmp-mont-btn py-2">{mdpsData.monthTitle || "Programs"}</Button>
        <div>
          {(mdpsData.programs || []).map((item, index) => (
            <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between align-items-center cmp-data-hr-line" key={`${item.programTitle}-${index}`}>
              <div className="d-flex gap-3 align-items-center flex-column flex-lg-row flex-md-row">
                <div className="d-flex flex-row flex-md-column flex-lg-column items-center justify-center text-center">
                  <p className="m-0 cmp-date-text px-3 py-2">{item.dateLabel || item.date || ""}</p>
                  <p className="m-0 cmp-month-text px-3 py-lg-1 py-md-1 py-2">{item.month || ""}</p>
                </div>
                <div className="d-flex flex-column gap-2 text-center text-lg-start text-md-start">
                  <p className="fs-5 fw-bold cmp-courseHead m-0">{item.programTitle}</p>
                  <div className="d-flex mx-auto m-lg-0 m-md-0 flex-wrap align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-md-start gap-3">
                    {item.time && (
                      <div className="d-flex align-items-center gap-1 pe-3" style={{ borderRight: "1px solid gray" }}>
                        <Clock size={18} style={{ color: "gray" }} />
                        <p className="m-0" style={{ color: "gray" }}>{item.time}</p>
                      </div>
                    )}
                    {item.fees && (
                      <div className="d-flex align-items-center gap-1 pe-3" style={{ borderRight: "1px solid gray" }}>
                        <BiRupee size={18} style={{ color: "gray" }} />
                        <p className="m-0" style={{ color: "gray" }}>{item.fees}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 flex-lg-row flex-md-column flex-column cmp-btns-div mt-4 mt-md-0 mt-lg-0">
                <Button
                  className="px-lg-5 py-lg-2 mt-0 mt-md-0 mt-lg-0 text-black cmp-apply-btn fs-6 fw-light"
                  style={{ backgroundColor: "white", border: "1px solid black" }}
                  onClick={() => openLink(item.applyLink || "/contact-us")}
                >
                  Apply Now
                </Button>
                <Button
                  className="px-lg-2 py-lg-2 mt-0 mt-md-0 mt-lg-0 cmp-download-btn fs-6 fw-light"
                  style={{ backgroundColor: "#5ac501", border: "none" }}
                  disabled={!item.brochureUrl && !item.pdf}
                  onClick={() => openLink(item.brochureUrl || item.pdf)}
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EEPMdps;
