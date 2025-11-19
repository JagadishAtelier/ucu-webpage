import { ArrowLeftCircle, BadgeCheck, GraduationCap, RefreshCcw, Rocket, Target, TestTube2, Timer } from 'lucide-react'
import React from 'react'

function IndustryApproachContent() {
    return (
        <div className="captital-campus-content-sec mt-5">
            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><Rocket style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Industry First. Future Ready. Always.</p>
            </div>
            <p className=''>At Universal Corporate University (UCU), Chennai, we don’t just follow industry trends — we set them. Our programs are engineered for the boardroom, built with the boardroom, and benchmarked against global best practices. Here's how we lead the charge:</p>
            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><Timer style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Strategy Powered by 100+ CXOs:</p>
            </div>

            <p>Our Business Advisory Council, HR Leadership Panels (CHROs, TA Heads, L&D Experts), and Young CXO Council bring together over 100 top-tier industry leaders from global MNCs. These visionaries co-create UCU’s curriculum, ensuring every module is a direct response to what the market demands — not what academia assumes. - In addition, UCU is establishing sector-specific and program-led advisory councils in domains such as Sales, Product Management, Cybersecurity, Brand Management, Digital Marketing, FinTech, Global Capability Centres (GCCs), and more — enabling deep vertical alignment and precision-driven curriculum design for each specialized track.</p>

            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><GraduationCap style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Faculty of Titans:</p>
            </div>

            <p>UCU’s Professors of Practice and industry trainers hail from the world’s most respected firms in Consulting, Finance, Product Management, and Technology. They don’t just teach — they transfer wisdom, war stories, and winning strategies.</p>
            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><BadgeCheck style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Day-Zero Industry Readiness:</p>
            </div>

            <p>Our learners don’t wait to be industry-ready — they arrive that way. Every program is infused with real-world simulations, case-led learning, and leadership grooming, ensuring fresh graduates hit the ground sprinting and experienced professionals ascend to strategic roles.</p>
            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><Target style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Sector-Specific Leadership Tracks:</p>
            </div>
            <p>Whether it’s FinTech, Mobility, Sustainability, BFSI, IT/ITES, Manufacturing, Consulting, Data & Analytics, or Semiconductors — our curated programs are precision-built to meet the leadership needs of tomorrow’s enterprises.</p>
            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><TestTube2 style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Faculty Certification with Corporate DNA:</p>
            </div>
            <p>UCU’s pioneering Faculty Certification initiative reimagines academic excellence by blending traditional pedagogy with corporate acumen. We certify educators to teach with the pulse of the industry — not just the pages of a textbook.</p>
            <div className='d-flex gap-2 align-items-center mb-3'>
                <div className='p-2 rounded-circle' style={{ backgroundColor: "#5ac501" }}><RefreshCcw style={{ color: "white" }} /></div>
                <p className='fs-5 fw-bold mb-0'>Continuous Learning for Continuous Relevance:</p>
            </div>
            <p>For working professionals, UCU is a lifelong partner. Our executive learning modules ensure you stay ahead of the curve — with the latest tools, trends, and transformations shaping your sector.</p>

        </div>
    )
}

export default IndustryApproachContent