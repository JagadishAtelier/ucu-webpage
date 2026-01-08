// import React from "react";
// Reuse or placeholder components
// import IndustryConnect from "../../Pages/PGPMProgram/IndustryConnect";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import SalesDiplamoPageFeatures from "./SalesDiplamoPageFeatures";
import SalesDiplamoPageWho from "./SalesDiplamoPageWho";
import { UserPlus, Target, Building2 } from "lucide-react";
import SalesDiplamoRoadMap from "./SalesDiplamoRoadMap";

const brands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/archive/6/61/20210930181848%21Samsung_old_logo_before_year_2015.svg" },
    { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/960px-Sony_logo.svg.png" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
];
export default function SalesDiplamoPageOverview() {
    return (
        <>
            <div className="container my-1 p-3">
                {/* Placeholder for About Section */}
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#5ac501" }}> UCU Diploma Programs</span>
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                        UCU’s Diploma Programs are crafted to be truly distinctive — designed to fast‑track careers by equipping learners with sharp, industry‑ready skills that deliver immediate impact.
                        Targeted at fresh graduates and early professionals with 0–3 years of experience, these programs offer a powerful alternative to a full‑time MBA. Instead of broad general management, participants dive straight into functional expertise across high‑demand domains such as Sales & Marketing, Finance, Analytics, and more.


                    </p>
                    <p style={{ textAlign: "justify" }}>
                        Each diploma is structured as a job‑ and role‑based offering, ensuring that learners gain practical, career‑aligned capabilities. With UCU’s immersive approach, students not only build technical and functional mastery but also unlock direct pathways to career opportunities in their chosen fields.
                    </p>
                </div>
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#5ac501" }}> Sales Diploma</span>
                    </h1>
                    <p className="mb-0" style={{ textAlign: "justify" }}>
                        In India’s booming sales landscape—one of the largest and fastest‑growing employment avenues—the demand for skilled professionals has never been greater. UCU rises to this challenge by co‑creating and co‑delivering its 6‑month Sales Diploma in collaboration with leading corporates, ensuring unmatched relevance and practical exposure. The program acts as a powerful career launchpad, equipping participants with the confidence, competence, and connections to thrive in high‑growth sales roles.
                    </p>
                </div>
            </div>

            <section className="SALESDIP-overview-container py-0">
                <div className="container">
                    <h3 className=" mb-4">
                        Who is this program for?
                    </h3>

                    <ul className="SALESDIP-overview-list list-unstyled">

                        <li className="SALESDIP-overview-item d-flex align-items-start mb-3">
                            <span className="SALESDIP-overview-icon me-3">
                                <UserPlus size={22} />
                            </span>
                            <p className="SALESDIP-overview-text mb-0">
                                This program is crafted for high potential freshers as well as professionals with 0-3 years of post UG work experience, wanting to launch a career in Sales with top corporates in FMCG/FMCD, IT/ITES, BFSI and more.
                            </p>
                        </li>

                    </ul>
                </div>
            </section>

            <div className="container p-3">
                <SalesDiplamoPageWho />
            </div>
            <div className="container">
                <h3 className="cs-subtitle">Participant’s Organisations</h3>
                <div className="marquee mt-3">
                    <div className="marquee-content">
                        {brands.concat(brands).map((brand, index) => ( // duplicate for smooth loop
                            <div key={index} className="brand-card">
                                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container p-3">
                <SalesDiplamoRoadMap />
            </div>
            <div class="PGPXM-download-btnds d-flex flex-column flex-lg-row gap-3 container">
                <button class="btn custom-download-btn d-flex align-items-center">
                    <i class="fas fa-book-open me-3"></i>
                    <span>Download Curriculum</span>
                </button>

                <button class="btn custom-download-btn d-flex align-items-center">
                    <i class="fas fa-users-cog me-3"></i>
                    <span>Download Class Profile</span>
                </button>
            </div>

            {/* <PGPMBottomBanner /> */}
        </>
    );
}
