import React from "react";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";

const data = [
    {
        icon: <Briefcase size={32} />,
        text: "Professionals with 2+ years of working experience in the private or public sector wanting a business education while working",
    },
    {
        icon: <Award size={32} />,
        text: "2nd generation family business owner aiming to evolve the business",
    },
    {
        icon: <Users size={32} />,
        text: "Start-up owners aiming to give direction to and strategically expand the business",
    },
    {
        icon: <TrendingUp size={32} />,
        text: "Practitioners from non-business fields like doctors, lawyers, CAs and CSs wanting to scale up their practice or equip themselves for exploring interdisciplinary areas",
    },
];

export default function PGPMFlexWho() {
    return (
        <div className="who-is-for-section container mb-lg-3">
            <h2 className="section-heading text-center mb-lg-5 mb-3">
                Who is the <span style={{ color: "#0b1c3d" }}>PGPM Flex For?</span>
            </h2>

            <div className="who-is-grid">
                {data.map((item, index) => (
                    <div key={index} className="who-card">
                        <div className="icon-wrapper">{item.icon}</div>
                        <p className="who-card-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
