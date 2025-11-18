import React from 'react'
import founderImg from "/founder.jpg";
import CppMindMap from './CppMindMap';
function CPPIntroduction() {
    return (
        <div className="captital-campus-content-sec mt-4">
            <h1 className='display-4 fw-bold' style={{ color: "#5ac501" }}>Introduction</h1>
            <p className="story-paragraph">India’s most visionary companies are increasingly recognizing the potential of Universal Corporate University (UCU Chennai)—an emerging business school built on the pillars of industry alignment, inclusive access, and global ambition. Though pre-launch, UCU has already captured attention for its bold vision and differentiated, career-first approach to business education.</p>

            <p className="story-paragraph">UCU’s placement architecture is being meticulously designed by experts with a track record of enabling over 8,000 successful placements. Drawing on deep industry insight, this ecosystem is engineered to equip high-potential learners—especially those from untapped, high-potential backgrounds—with the skills and agility to thrive in diverse, high-growth roles across emerging sectors.</p>

            <p className="story-paragraph">Backed by a robust pipeline of corporate partnerships, government alliances, and global academic engagement, UCU is poised to become a launchpad for next-generation business talent—rooted in India, yet engineered for global impact. Our commitment transcends education; it is a mission of career transformation at scale.</p>

            <section className="founder-section">
                <div className="founder-image-wrapper">
                    <img src={founderImg} alt="Founder" className="founder-image" />
                </div>
                <div className="founder-content">
                    <p className="founder-subtitle">Invitation to Participate in UCU Campus Placement 2026</p>
                    <h1 className="founder-name">Dr. M. Balaji (Bala)</h1>
                    <p className="founder-org">Founder & CEO</p>
                </div>
            </section>

            <section className="founder-message-section text-dark">
                <div className="message-wrapper">
                    <h3 className='mt-4'>From the Desk of the Founder & Chairman</h3>
                    <p className="story-paragraph">Dear Esteemed Corporate Partners,</p>
                    <p className="story-paragraph">
                        It is with immense pride and purpose that I invite you to participate in
                        <strong> Universal Corporate University’s (UCU) Campus Placement Season 2026. </strong>
                        UCU is not just a business school—it is a movement to redefine management education in India by aligning it directly with the evolving needs of industry.
                    </p>
                    <p className="story-paragraph">
                        As Founder and Chairman, I have spent over 35 years bridging academia and industry, placing more than 7,000 students across top institutions, and building learning ecosystems that respond to corporate realities. Along this journey, we have also transformed more than
                        <strong> 25,000 corporate professionals and management graduates </strong>
                        through our executive education programs—empowering them to lead, adapt, and thrive in dynamic business environments. UCU was born from this experience—a university forged not in ivory towers, but in boardrooms, CXO conclaves, and the crucible of real-world leadership.
                    </p>
                    <CppMindMap />

                    <p className="story-paragraph mt-4">
                        <strong>Diverse program offerings</strong> including
                    </p>
                    <ul>
                        <p><li>Full-time MBA programs for freshers and early-career professionals</li></p>
                        <p><li>Flexi and executive learning programs for experienced professionals</li></p>
                        <p><li>Part-time diplomas and career modules for continuous upskilling</li></p>
                    </ul>
                    <p className="story-paragraph mt-4">
                        <strong>Specializations in both traditional and emerging domains,</strong> such as:
                    </p>
                    <ul>
                        <p><li>Marketing, Finance, Operations</li></p>
                        <p><li>Sales, Product Management, Digital Marketing & AI, Cybersecurity, FinTech, Business Consulting</li></p>
                        <p><li>Sector-focused tracks in GCCs, Semiconductors, Healthcare, Pharma, and Life Sciences</li></p>
                    </ul>

                    <p className="story-paragraph">
                        <strong>Experiential learning </strong>
                        through simulations, live projects, structured mentoring, and placement readiness from Day One.
                    </p>
                    <p className="story-paragraph">
                        <strong>A collaborative talent supply ecosystem, </strong>
                        where corporate partners help shape not just hiring outcomes but the very DNA of our graduates.
                    </p>

                    <p className="story-paragraph">
                        At UCU, we don’t just teach business—we build business leaders. Our students are immersed in real-world challenges, trained to think critically, lead ethically, and adapt swiftly. Every learner is empowered by industry experts, visiting faculty, and subject matter specialists to become a high-impact contributor from day one.
                    </p>
                    <p className="story-paragraph">As India steps into its next economic chapter, UCU is proud to lead the way—one industry-aligned learner at a time. We extend our heartfelt gratitude to our existing partners and warmly invite new collaborators to join us in shaping the next generation of business and technology leaders.</p>
                    <p className="story-paragraph">Together, let us unlock untapped talent, create lasting impact, and set new benchmarks in inclusive professional development.</p>
                    <p className="signature">
                        Warm regards,
                        <br />
                        <strong>Dr. M. Balaji (Bala)</strong>
                        <br />
                        Founder & Chairman
                        <br />
                        Universal Corporate University, Chennai
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CPPIntroduction