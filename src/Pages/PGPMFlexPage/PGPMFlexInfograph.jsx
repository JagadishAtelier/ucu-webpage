import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Laptop,
  UserCheck
} from "lucide-react";
import { Container } from 'react-bootstrap';

const PGPMFlexInfographic = () => {

  const pillars = [
    {
      title: "Leadership Development",
      icon: <Users size={32} />,
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "#1d4ed8",
      bgLight: "#eff6ff"
    },
    {
      title: "Delivered by CXOs and academicians from UCU and leading institutes worldwide",
      icon: <GraduationCap size={32} />,
      gradient: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
      color: "#15803d",
      bgLight: "#f0fdf4"
    },
    {
      title: "Application oriented hands-on learning",
      icon: <Laptop size={32} />,
      gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
      color: "#b45309",
      bgLight: "#fffbeb"
    },
    {
      title: "Dedicated 1:1 mentorship by dedicated professional from leading corporates",
      icon: <UserCheck size={32} />,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      color: "#6d28d9",
      bgLight: "#f5f3ff"
    },
  ];

  return (
    <section className="PGPMFLEX-info-section">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="PGPMFLEX-info-title">
            <span className="brand-text">PGPM Flex </span> HOLISTIC Development
          </h2>
          <p className="PGPMFLEX-info-subtitle">
            Co-powered by Industry Leaders
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="PGPMFLEX-info-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="PGPMFLEX-info-card"
              style={{
                '--card-gradient': pillar.gradient,
                '--card-color': pillar.color,
                '--card-bg-light': pillar.bgLight
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="PGPMFLEX-info-icon-box">
                {pillar.icon}
              </div>
              <div className="PGPMFLEX-info-content">
                <h3 className="PGPMFLEX-info-card-title">{pillar.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PGPMFlexInfographic;