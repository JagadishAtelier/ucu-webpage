import React from "react";
import { Container } from "react-bootstrap";
import { motion } from 'framer-motion';
import {
  User,
  Globe,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css";

const CRPFWFlow = () => {
  const steps = [
    {
      id: "01",
      title: "Student-Centric Learning",
      text: "UCU University follows a student-first academic model with personalized mentoring, outcome-driven curriculum design, and continuous academic support.",
      icon: <User size={32} />,
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "#1d4ed8",
      bgLight: "#eff6ff"
    },
    {
      id: "02",
      title: "Global Academic Exposure",
      text: "The university offers globally aligned programs, international collaborations, and curriculum standards benchmarked against leading universities worldwide.",
      icon: <Globe size={32} />,
      gradient: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
      color: "#15803d",
      bgLight: "#f0fdf4"
    },
    {
      id: "03",
      title: "Industry & Faculty Expertise",
      text: "Programs are delivered by experienced academicians and industry professionals, ensuring practical knowledge alongside strong theoretical foundations.",
      icon: <Users size={32} />,
      gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
      color: "#b45309",
      bgLight: "#fffbeb"
    },
    {
      id: "04",
      title: "Flexible Learning Structure",
      text: "UCU provides flexible learning pathways with structured timelines, blended learning models, and continuous evaluation for consistent academic progress.",
      icon: <Clock size={32} />,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      color: "#6d28d9",
      bgLight: "#f5f3ff"
    },
    {
      id: "05",
      title: "Career & Growth Focus",
      text: "With a strong focus on employability, UCU integrates skill development, internships, and career guidance to support long-term professional growth.",
      icon: <TrendingUp size={32} />,
      gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
      color: "#b91c1c",
      bgLight: "#fef2f2"
    }
  ];

  return (
    <section className="PGPMFLEX-info-section pb-5">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-left mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="PGPMFLEX-info-title">
            Process <span style={{ color: "#5ac501" }}>Flow</span>
          </h2>
          <p className="PGPMFLEX-info-subtitle text-left mx-0">Academic Excellence & Professional Growth</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="PGPMFLEX-info-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="PGPMFLEX-info-card h-100" // Added h-100 for equal height
              style={{
                '--card-gradient': step.gradient,
                '--card-color': step.color,
                '--card-bg-light': step.bgLight
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="PGPMFLEX-info-icon-box">
                {step.icon}
              </div>
              <div className="PGPMFLEX-info-content">
                <h3 className="PGPMFLEX-info-card-title">{step.title}</h3>
                <p className="PGPMFLEX-info-card-desc mt-3 text-muted">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CRPFWFlow;
