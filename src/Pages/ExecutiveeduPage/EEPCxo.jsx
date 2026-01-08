import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const tableData = [
    {
        CXORole: "CEO",
        ProgramName: "Enterprise Leadership Program (ELP)",
        FocusArea: "Shaping visionary CEOs for global impact",
        link: "/program/CXO"
    },
    {
        CXORole: "CFO",
        ProgramName: "Strategic Finance Leadership Program (SFLP)",
        FocusArea: "Driving financial stewardship and corporate value creation",
        link: "/program/CFO"
    },
    {
        CXORole: "CHRO",
        ProgramName: "People & Culture Leadership Program (PCLP)",
        FocusArea: "Transforming talent into organizational advantage",
        link: "/program/CHRO"
    },
    {
        CXORole: "CIO",
        ProgramName: "Information & Digital Leadership Program (IDLP)",
        FocusArea: "Leading enterprise intelligence and digital ecosystems",
        link: "/program/CIO"
    },
    {
        CXORole: "CMO",
        ProgramName: "Brand & Market Leadership Program (BMLP)",
        FocusArea: "Architecting growth through customer-centric strategies",
        link: "/program/CMO"
    },
    {
        CXORole: "COO",
        ProgramName: "Operational Excellence Leadership Program (OELP)",
        FocusArea: "Mastering scale, efficiency, and execution agility",
        link: "/program/COO"
    },
    {
        CXORole: "CPO (Product)",
        ProgramName: "Product Innovation Leadership Program (PILP)",
        FocusArea: "Building market-winning products and portfolios",
        link: "/program/CPO"
    },
    {
        CXORole: "CSO (Strategy)",
        ProgramName: "Corporate Strategy Leadership Program (CSLP)",
        FocusArea: "Crafting competitive advantage and long-term vision",
        link: "/program/CSO"
    },
    {
        CXORole: "CTO (Technology)",
        ProgramName: "Technology & Innovation Leadership Program (TILP)",
        FocusArea: "Engineering disruption and digital transformation",
        link: "/program/CTO"
    },
];
function EEPCxo() {
    const navigate = useNavigate()
    return (
        <div className='captital-campus-content-sec mt-4'>
            <h1 className='display-5 fw-bold'>UCU <span style={{ color: "#5ac501" }}> CXO Leadership Academy</span></h1>
            <p className='pt text-justifys'>The <strong> CXO Leadership Academy @ UCU </strong> is a premier executive education platform designed exclusively for senior professionals and aspiring boardroom leaders. Anchored in UCU’s philosophy of industry co-creation and global relevance, the Academy curates specialized programs for each C-suite role—CEO, CFO, CHRO, CIO, CMO, COO, CPO, CSO, and CTO—ensuring participants gain the strategic acumen, leadership agility, and domain mastery required to excel at the highest levels of corporate leadership.
            </p>
            <h3>
                Key Features:
            </h3>
            <ul className="text-justifys">
                <li className='mb-2 pt'><strong>Role-Specific Programs : </strong> Tailored learning journeys aligned to the unique responsibilities of each CXO function.</li>
                <li className='mb-2 pt'><strong>Boardroom Readiness : </strong> Immersive modules on enterprise strategy, governance, digital transformation, and stakeholder management.</li>
                <li className='mb-2 pt'><strong>Leadership Labs : </strong> Experiential simulations, case studies, and strategic dialogues that replicate boardroom decision-making.</li>

            </ul>
            <p className='my-4 pt text-justifys'>The Academy is not just about preparing leaders—it is about <strong> accelerating transformation. </strong> By combining academic rigor with corporate relevance, the CXO Leadership Academy @ UCU positions itself as the definitive destination for professionals ready to step into enterprise leadership and shape the future of business.</p>
            <h3 className='mb-4'>CXO Leadership Programs – UCU Chennai</h3>
            <div className="EEPCxo-responsive-table-wrapper">
                <table className="EEPCxo-placement-table placement-table w-100 overflow-hidden">
                    <thead>
                        <tr>
                            <th>CXO Role</th>
                            <th>Program Name</th>
                            <th>Focus Area</th>
                            <th>More</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.CXORole}</td>
                                <td>{row.ProgramName}</td>
                                <td>{row.FocusArea}</td>
                                <td className='text-center'>
                                    <Button onClick={() => navigate(`/cxo-series/${row.CXORole}`)} className="EEP-cxo-table-btn" style={{ backgroundColor: "#5ac501", border: "none" }}>view more </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EEPCxo