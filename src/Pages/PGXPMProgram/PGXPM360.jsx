import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Users } from 'lucide-react';
import './PGXPM360.css';

const PGXPM360 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const pillars = [
    {
      title: "Leadership Competencies",
      icon: <Users size={28} />,
      description: "Master strategic thinking, executive presence, and team influence to drive organizational transformation.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Functional Skills",
      icon: <Brain size={28} />,
      description: "Acquire deep technical expertise across finance, operations, marketing, and technology domains.",
      gradient: "linear-gradient(135deg, #5ac501 0%, #72be44 100%)"
    },
    {
      title: "Business Perspectives",
      icon: <TrendingUp size={28} />,
      description: "Understand global markets, business finance, and strategic decision-making frameworks.",
      gradient: "linear-gradient(135deg, #0b1c3d 0%, #1e3a8a 100%)"
    }
  ];

  return (
    <div className="pgxpm-360-section py-0">
      <div className="container py-0">
        {/* Section Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pgxpm-360-title">
            <span className="brand-text">PGXPM</span> 360° Development
          </h2>
          <p className="pgxpm-360-subtitle">
            A holistic approach to executive education
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="pillars-grid mt-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`pillar-card ${activeIndex === index ? 'active' : ''}`}
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
                  <p className="pillar-description">{pillar.description}</p>
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
    </div>
  );
};

export default PGXPM360;