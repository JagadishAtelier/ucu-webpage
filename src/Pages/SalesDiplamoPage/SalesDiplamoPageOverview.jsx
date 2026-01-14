// import React from "react";
// Reuse or placeholder components
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import SalesDiplamoPageFeatures from "./SalesDiplamoPageFeatures";
import SalesDiplamoPageWho from "./SalesDiplamoPageWho";
import { UserPlus, Target, Building2, Download, FileText, CheckCircle2 } from "lucide-react";
import SalesDiplamoRoadMap from "./SalesDiplamoRoadMap";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse vibrant styles

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
                {/* Intro Section */}
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#5ac501" }}> UCU Diploma Programs</span>
                    </h1>
                    <p className="lead text-secondary mb-4" style={{ textAlign: "justify" }}>
                        <strong>Fast-track your career with industry-integrated diplomas.</strong>
                    </p>
                    <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
                        UCU’s Diploma Programs are crafted to be truly distinctive — designed to fast‑track careers by equipping learners with sharp, industry‑ready skills that deliver immediate impact. Targeted at fresh graduates and early professionals with 0–3 years of experience, these programs offer a powerful alternative to a full‑time MBA.
                    </p>

                    <div className="p-4 rounded-4 mb-5" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderLeft: '5px solid #22c55e' }}>
                        <p className="mb-0" style={{ textAlign: "justify", color: '#166534', fontWeight: '500' }}>
                            Instead of broad general management, participants dive straight into functional expertise across high‑demand domains such as Sales & Marketing, Finance, Analytics, and more.
                        </p>
                    </div>

                    <p style={{ textAlign: "justify" }}>
                        Each diploma is structured as a job‑ and role‑based offering, ensuring that learners gain practical, career‑aligned capabilities. With UCU’s immersive approach, students not only build technical and functional mastery but also unlock direct pathways to career opportunities in their chosen fields.
                    </p>
                </div>

                {/* Sales Diploma Specific */}
                <div className="row mt-5">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#0d6efd" }}> Sales Diploma</span>
                    </h1>
                    <div className="col-lg-12">
                        <p className="mb-4" style={{ textAlign: "justify" }}>
                            In India’s booming sales landscape—one of the largest and fastest‑growing employment avenues—the demand for skilled professionals has never been greater. UCU rises to this challenge by co‑creating and co‑delivering its 6‑month Sales Diploma in collaboration with leading corporates.
                        </p>

                        <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <div className="d-flex p-3 rounded-4 h-100 align-items-center" style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe' }}>
                                    <div className="me-3 p-3 rounded-circle bg-white text-primary shadow-sm">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1 text-primary">Career Launchpad</h5>
                                        <p className="mb-0 small text-secondary">Equips participants with confidence & competence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex p-3 rounded-4 h-100 align-items-center" style={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5' }}>
                                    <div className="me-3 p-3 rounded-circle bg-white text-warning shadow-sm" style={{ color: '#ea580c' }}>
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ color: '#ea580c' }}>Corporate Connect</h5>
                                        <p className="mb-0 small text-secondary">Co-delivered with leading corporates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who is it for - Colorful Section */}
            <section className="SALESDIP-overview-container py-5">
                <div className="container">
                    <h3 className="section-heading text-center mb-5">
                        Who is this <span style={{ color: "#0b1c3d" }}>Program For?</span>
                    </h3>

                    {/* Reusing PGPM Flex 'Who' style cards if possible or custom vibrant grid */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg overflow-hidden rounded-4">
                                <div className="row g-0">
                                    <div className="col-md-4 bg-primary text-white p-4 d-flex flex-column justify-content-center align-items-center text-center">
                                        <div className="mb-3 p-3 rounded-circle bg-white bg-opacity-25">
                                            <UserPlus size={40} />
                                        </div>
                                        <h4 className="fw-bold">Ideal Profile</h4>
                                    </div>
                                    <div className="col-md-8 p-4 d-flex align-items-center bg-white">
                                        <p className="fs-5 mb-0 text-black-50" style={{ lineHeight: '1.8' }}>
                                            This program is crafted for <strong className="text-dark">high potential freshers</strong> as well as professionals with <strong className="text-dark">0-3 years</strong> of post UG work experience, wanting to launch a career in Sales with top corporates in FMCG/FMCD, IT/ITES, BFSI and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container p-3">
                <SalesDiplamoPageWho />
            </div>

            <div className="container my-5">
                <h3 className="cs-subtitle mb-4">Participant’s Organisations</h3>
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

            {/* Premium Colorful Buttons */}
            <div className="pgxpm-download-actions d-flex flex-column flex-md-row gap-4 mt-5 mb-5 justify-content-center">
                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <FileText size={20} />
                    </div>
                    <span>Download Curriculum</span>
                </button>

                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <Download size={20} />
                    </div>
                    <span>Download Class Profile</span>
                </button>
            </div>

            {/* <PGPMBottomBanner /> */}
        </>
    );
}
