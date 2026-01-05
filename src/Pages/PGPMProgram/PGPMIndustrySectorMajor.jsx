import { useRef } from "react";
import { Briefcase, BarChart3, MessageSquareText, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import "./PGPMIndustrySectorMajor.css";

const majors = [
    {
        title: "Product Management",
        icon: <Briefcase size={28} />,
        items: [
            "Strategic Product Development and Execution – Part 1: Mastering the product lifecycle from initial ideation to MVP development.",
            "Technology Product Sales and Marketing: Developing go-to-market strategies and scaling tech products in competitive markets.",
            "Strategic Product Development and Execution – Part 2: Advanced roadmapping, feature prioritization, and growth hacking techniques.",
            "Stakeholder Management and Contextualization: Navigating cross-functional dynamics and aligning business goals with technical constraints.",
        ],
        color: "#E3F2FD", // Light Blue
        iconColor: "#1565C0",
    },
    {
        title: "Analytics",
        icon: <BarChart3 size={28} />,
        items: [
            "Business Analytics Foundations: Core statistical concepts and data-driven decision-making frameworks for modern enterprises.",
            "Data Visualization & Storytelling: Creating impactful dashboards and narratives using industry-standard tools like Tableau and PowerBI.",
            "Predictive Analytics: Building sophisticated models to forecast trends, customer behavior, and optimize business outcomes.",
            "Applied Analytics with Industry Use Cases: Solving real-world problems across finance, retail, and healthcare sectors using advanced analytical techniques.",
        ],
        color: "#E8F5E9", // Light Green
        iconColor: "#2E7D32",
    },
    {
        title: "Consulting",
        icon: <MessageSquareText size={28} />,
        items: [
            "Structured Problem Solving: Utilizing MECE and other logical frameworks to deconstruct complex business challenges.",
            "Business Strategy & Case Frameworks: Mastering competitive analysis, strategic positioning, and market entry strategies.",
            "Client Engagement & Communication: Developing executive presence and persuasive presentation skills for high-stakes environments.",
            "Consulting Simulations: Hands-on experience with end-to-end consulting projects and real-world client interactions.",
        ],
        color: "#FFF3E0", // Light Orange
        iconColor: "#EF6C00",
    },
    {
        title: "Data Science & AI",
        icon: <BrainCircuit size={28} />,
        items: [
            "Machine Learning & Deep Learning Foundations: Implementing neural networks and advanced algorithms for complex pattern recognition.",
            "Natural Language Processing: Building systems that understand, interpret, and generate human language for various applications.",
            "Generative AI & Large Language Models: Exploring the frontier of AI with GPT, prompt engineering, and model fine-tuning.",
            "AI Strategy and Governance: Managing ethical considerations, data privacy, and organizational AI adoption frameworks.",
        ],
        color: "#e2ffe0ff",
        iconColor: "#1c790aff",
    },
];

const Card = ({ major, index, total, containerRef }) => {
    const cardRef = useRef(null);

    // const { scrollYProgress } = useScroll({
    //     target: cardRef,
    //     offset: ["start end", "start start"],
    // });

    const topOffset = 140 + index;


    return (
        <motion.div
            ref={cardRef}
            className="major-card"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
            }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1, // Stagger effect
                },
            }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="card-content" style={{ borderColor: major.color }}>
                <div
                    className="icon-box"
                    style={{ backgroundColor: major.color, color: major.iconColor }}
                >
                    {major.icon}
                </div>
                <div className="card-header">
                    <h3>{major.title}</h3>
                    <ul>
                        {major.items.map((item, i) => (
                            <li key={i}>
                                <span className="bullet" style={{ backgroundColor: major.iconColor }}></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default function PGPMIndustrySectorMajor() {
    const containerRef = useRef(null);

    return (
        <section className="industry-section" ref={containerRef}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Industry Sector Major
                </motion.h2>

                <div className="card-stack">
                    {majors.map((major, index) => (
                        <Card
                            key={index}
                            major={major}
                            index={index}
                            total={majors.length}
                            containerRef={containerRef}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
