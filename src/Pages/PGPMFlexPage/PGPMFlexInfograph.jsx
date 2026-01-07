import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Laptop,
  UserCheck
} from "lucide-react";

const PGPMFlexInfographic = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const pillars = [
  {
    title: "Leadership Development",
    icon: <Users size={28} />,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Delivered by CXOs and academicians from UCU and leading institutes worldwide",
    icon: <GraduationCap size={28} />,
    gradient: "linear-gradient(135deg, #5ac501 0%, #72be44 100%)"
  },
  {
    title: "Application oriented hands-on learning",
    icon: <Laptop size={28} />,
    gradient: "linear-gradient(135deg, #0b1c3d 0%, #1e3a8a 100%)"
  },
  {
    title: "Dedicated 1:1 mentorship by dedicated professional from leading corporates",
    icon: <UserCheck size={28} />,
    gradient: "linear-gradient(135deg, #0b1c3d 0%, #1e3a8a 100%)"
  },
];

  return (
    <section className="pgxpm-360-section">
      <div className="container py-lg-5 py-0">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pgxpm-360-title">
            <span className="brand-text">PGPM Flex </span> HOLISTIC Development
          </h2>
          <p className="pgxpm-360-subtitle">
            co-powered by Industry
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="pillars-grid pgpm-flex-pillar-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`pillar-card ${activeIndex === index ? 'active' : ''} pgpm-flex-pillar-item `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="pillar-card-inner">
                {/* Icon Circle */}
                <div
                  className="pillar-icon-wrapper"
                  style={{ background: pillar.gradient }}
                >
                  {pillar.icon}
                </div>

                {/* Content */}
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  {/* <p className="pillar-description">{pillar.description}</p> */}
                </div>

                {/* Decorative Element */}
                <div className="pillar-decoration" style={{ background: pillar.gradient }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default PGPMFlexInfographic;