import React from "react";
import { useLocation } from "react-router-dom";

function OverviewAbout() {
    const { pathname } = useLocation();
    const isPGDM = pathname.includes("pgdm");
    const isPGPM = pathname.includes("pgpm");
    return (
        <div >
            <h1 className="display-4 fw-bold col-12 col-lg-12"><span style={{ color: "#5ac501" }}>About </span>Programs</h1>

            {/* PGDM CONTENT */}
            {isPGDM && (
                <>
                    <p style={{ textAlign: "justify" }}>
                        The UCU Post Graduate Diploma in Management (PGDM) is a comprehensive
                        two-year management program designed for learners aiming to build strong
                        foundational and advanced skills in business. The program follows an
                        AICTE-approved curriculum with a unique blend of academic rigor, industry
                        relevance, and leadership-focused pedagogy. With a diverse cohort and
                        case-based learning, the PGDM ensures deep peer interaction and holistic
                        professional development.
                    </p>

                    <p style={{ textAlign: "justify" }}>
                        In addition to a strong academic structure, the PGDM at UCU emphasizes
                        experiential learning, industry exposure, and hands-on problem solving.
                        Through internships, live corporate projects, expert-led workshops, and
                        immersive classroom experiences, learners gain practical insights across
                        domains. The program equips students with analytical, strategic, and
                        managerial competencies, enabling them to excel in dynamic business
                        environments and pursue leadership roles across industries.
                    </p>
                </>
            )}

            {/* PGPM CONTENT */}
            {isPGPM && (
                <>
                    <p style={{ textAlign: "justify" }}>
                        The UCU Post Graduate Program in Management (PGPM) is the institution’s
                        flagship full-time MBA program offered in an intensive one-year format.
                        It is specifically designed for ambitious, high-potential professionals
                        who aspire to transition into leadership and managerial roles. The PGPM
                        is an AICTE-approved postgraduate certificate in management, featuring an
                        industry-aligned curriculum, innovative pedagogy, and a diverse cohort
                        that enhances learning through strong peer interaction.
                    </p>

                    <p style={{ textAlign: "justify" }}>
                        In addition to academic rigor, the PGPM at UCU emphasizes industry
                        immersion, experiential learning, and real-world application. Through
                        hands-on projects, expert-led sessions, and strong corporate engagement,
                        learners gain practical insights and leadership capabilities that prepare
                        them to excel in competitive business environments. This holistic
                        approach ensures that every participant graduates with the confidence,
                        competence, and skills needed to drive meaningful impact in their
                        careers.
                    </p>
                </>
            )}
            {!isPGDM && !isPGPM && (
                <>
                    <p className="font-weight-normal" style={{ textAlign: "justify" }}>The one-year PGDM is meticulously designed for high-potential professionals with less than three years of work experience, poised to lead in fast-evolving global and emerging markets. With a sharp focus on industry integration and outcome-driven learning, the program blends academic rigor with real-world relevance.</p>
                    <p className="font-weight-normal" style={{ textAlign: "justify" }}>Co-created and continuously evolved by CXOs and domain leaders from our Advisory Councils—including the Business Advisory Council and HR Leadership Forum—the curriculum is anchored in the realities of modern enterprise. It is delivered by a distinguished faculty of global academicians and senior industry practitioners, ensuring every classroom session is infused with strategic insight and operational depth.</p>
                    <p className="font-weight-normal" style={{ textAlign: "justify" }}>Students are mentored by our trailblazing young professionals—fast-track achievers from top corporations—who bring peer-to-peer relevance and career clarity. From Day One, learners are immersed in a corporate-ready environment, with structured exposure to business challenges, leadership frameworks, and placement-aligned development.</p>
                </>
            )}

        </div>
    );
}

export default OverviewAbout;
