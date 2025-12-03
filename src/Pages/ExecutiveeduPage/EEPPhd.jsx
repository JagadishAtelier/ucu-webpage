import { Download, MailCheck } from 'lucide-react';
import React from 'react';

function EEPPhd() {
    return (
        <div className='captital-campus-content-sec mt-4'>

            {/* Title Section */}
            <div className="eep-phd-title-box">
                <h1 className="eep-phd-title">
                    <span>Program Overview</span>
                </h1>
            </div>

            {/* Overview Section */}
            <div className="eep-phd-card">
                <p className=" pt">The <strong>Executive PhD in Management (EFPM) at UCU </strong> is a doctoral-level program designed for senior professionals, entrepreneurs, and policy leaders who wish to deepen their research capabilities while continuing their careers. Unlike traditional PhDs, the EFPM is tailored for executives who bring rich professional experience and seek to generate impactful, practice-oriented research that addresses complex business and societal challenges.</p>

                <p className="pt">This program blends <strong> academic rigor with industry relevance, </strong> enabling participants to evolve into thought leaders, policy influencers, and global strategists. It is structured to allow professionals to pursue advanced scholarship without stepping away from their leadership responsibilities.</p>
            </div>


            {/* Key Features */}
            <div className="eep-phd-section">
                <h3 className="eep-phd-heading">Key Features</h3>
                <ul className="eep-phd-list">
                    <li className='pt'><strong>Flexible Format : </strong> Part-time, hybrid design with online modules, research residencies, and immersive workshops.</li>
                    <li className='pt'><strong>Duration : </strong> 3–5 years, depending on research trajectory and dissertation progress.</li>
                    <li className='pt'><strong>Specializations : </strong> Strategy, Finance, Marketing, Human Resources, Operations, Analytics, and Innovation.</li>
                    <li className='pt'><strong>Global Exposure : </strong> Opportunities for international residencies and collaborations with partner universities.</li>
                    <li className='pt'><strong>Faculty Mentorship : </strong> Guided by UCU’s academic faculty and industry practitioners with global research credentials.</li>
                    <li className='pt'><strong>Research Integration : </strong> Action-oriented projects linked to live organizational challenges.</li>
                </ul>
            </div>

            {/* Who Should Apply */}
            <div className="eep-phd-section">
                <h3 className="eep-phd-heading">Who Should Apply</h3>
                <ul className="eep-phd-list">
                    <li className='pt'>Senior executives with <strong> 10+ years of professional experience </strong> in corporate, entrepreneurial, or policy-making roles.</li>
                    <li className='pt'>Leaders seeking to <strong> transition into academia, consulting, or policy advisory. </strong></li>
                    <li className='pt'>Professionals aiming to <strong> publish impactful research </strong> and contribute to management thought leadership.</li>
                </ul>
            </div>

            {/* Learning Journey (Timeline Style) */}
            <div className="eep-phd-section">
                <h3 className="eep-phd-heading">Learning Journey</h3>
                <ul className="eep-phd-timeline">
                    <li className='pt'><strong>Foundation Phase : </strong> Advanced coursework in management theory, research methods, and analytics.</li>
                    <li className='pt'><strong>Specialization Phase : </strong> Deep dives into chosen domains with seminars and case-based learning.</li>
                    <li className='pt'><strong>Research Phase : </strong> Proposal development, fieldwork, and dissertation writing under faculty supervision.</li>
                    <li className='pt'><strong>Defense & Dissemination : </strong> Formal dissertation defense, followed by publication and industry dissemination.</li>
                </ul>
            </div>

            {/* Outcomes */}
            <div className="eep-phd-section">
                <h3 className="eep-phd-heading">Outcomes & Value</h3>
                <ul className="eep-phd-list">
                    <li className='pt'><strong>For the Scholar : </strong> Development of a strong research identity, publication opportunities, and academic credibility.</li>
                    <li className='pt'><strong>For the Organization : </strong> Neutral, research-driven insights to solve strategic challenges and accelerate innovation.</li>
                    <li className='pt'><strong>For Society : </strong> Contributions to policy, governance, and sustainable business practices.</li>
                </ul>
                <p className="eep-phd-text">Graduates of the EFPM will emerge as <strong> scholar-practitioners—leaders </strong> who combine executive experience with doctoral-level research to influence boardrooms, classrooms, and policy platforms.</p>
            </div>

            {/* Why UCU */}
            <div className="eep-phd-section">
                <h3 className="eep-phd-heading">Why UCU EFPM?</h3>
                <ul className="eep-phd-list">
                    <li className='pt'><strong>Industry Co-Creation : </strong> Research themes aligned with corporate and societal priorities.</li>
                    <li className='pt'><strong>Global Benchmarking : </strong> Inspired by leading programs at ISB, IIMs, and ESCP Business School.</li>
                    <li className='pt'><strong>Career Measured : </strong> Designed to enhance both professional trajectory and intellectual capital.</li>
                    <li className='pt'><strong>Thought Leadership : </strong> Aimed at producing publications, whitepapers, and case studies that shape management practice.</li>
                </ul>
            </div>

            {/* CTA Section */}
            <div className="eep-phd-cta">
                <h3>Call to Action</h3>
                <p className="fw-bold pt">Elevate your leadership journey into scholarship.</p>

                <div className="eep-phd-btn-group">
                    <button className="eep-phd-btn">
                        <MailCheck />
                        Apply Now
                    </button>

                    <button className="eep-phd-btn">
                        <Download />
                        Download EFPM Brochure
                    </button>
                </div>
            </div>

        </div>
    );
}

export default EEPPhd;
