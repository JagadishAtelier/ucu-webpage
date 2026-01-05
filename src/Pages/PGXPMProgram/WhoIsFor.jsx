import React from "react";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";
import "./WhoIsFor.css";

const data = [
    {
        icon: <Briefcase size={32} />,
        text: "Functional managers looking to move up the corporate ladders in senior and general management roles",
    },
    {
        icon: <Award size={32} />,
        text: "High Potential & Identified Business Leaders of an Organization",
    },
    {
        icon: <Users size={32} />,
        text: "Next-Gen Family Business Owners, Entrepreneurs and Start-Up Owners looking to expand their Enterprise",
    },
    {
        icon: <TrendingUp size={32} />,
        text: "Senior Officers looking to transition into the industry",
    },
];

export default function WhoIsFor() {
    return (
        <section className="who-is-for-section container mb-5">
            <h2 className="section-heading text-center mb-5">
                Who is the <span style={{ color: "#0b1c3d" }}>PGXPM For?</span>
            </h2>

            <div className="who-is-grid">
                {data.map((item, index) => (
                    <div key={index} className="who-card">
                        <div className="icon-wrapper">{item.icon}</div>
                        <p className="card-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
