import React, { useState } from 'react'
import './PlacementTab.css'
import PlacementCareerTab from './PlacementCareerTab';
import PlacementHighlights from './PlacementHighlights';
import OurRecuriters from './OurRecuriters';
import PlacementContact from './PlacementContact';
function PlacementTab() {
  const [selectedBtn, setSelectedBtn] = useState("final");
  return (
    <div className='p-3 mx-auto container my-1'>
      <h1 className="display-6 fw-bold col-12 col-lg-12"><span style={{ color: "#5ac501" }} className=''>UCU Chennai:  </span> Gateway to the World of Opportunity
      </h1>

      <p className='text-justifys'> Through its expansive network of 2000+ leading corporations—spanning both national champions and global giants—UCU Chennai unlocks high-impact career pathways for every student. From consulting, banking, and finance to manufacturing, FinTech, IT/ITES, sales & marketing, and global capability centers (GCCs), our industry-first ecosystem ensures access to cutting-edge roles that accelerate your journey toward business leadership</p>

      <h1 className='fs-2 fw-medium mt-5'>Placements process</h1>
      <p>The placement process happens in two hiring cycles:</p>

      <div className='d-flex gap-3 flex-lg-row flex-column'>
        {/* <button className={`placement-btns-intern py-3 ${selectedBtn === "intern" ? "active" : ""}`} onClick={() => setSelectedBtn("intern")}>Internship Placement Process</button>  */}
        <button className={`placement-btns-intern py-3 ${selectedBtn === "final" ? "active" : ""}`} onClick={() => setSelectedBtn("final")}>Final Placement Process</button>
      </div>


      {/* --- Conditional Content --- */}
      <div className="mt-3">
        {selectedBtn === "intern" ? (
          <div className='p-3 bg-light rounded'>
            <p>
              The Corporate Autumn/Summer Internship is a mandatory credit component of the Post Graduate Diploma in Management course. The current Class 2023-25 participants will see the last Autumns Internship. Starting the Class of 2024-26, students will be available for Summer Internships (Please refer to the placement timeline table).
            </p>
            <p>
              Pre-Placement Offer (PPO): 40-50% of the batch gets placed through the Internships and Corporate competitions route (PPOs), much ahead of the final placement process. Students with PPO are signed out from the next hiring cycle.
            </p>

            <h1 className='fs-2 fw-medium mt-5'>Tentative placement timelines</h1>

            <div className="d-flex gap-3 mt-4">
              <div className='d-inline w-50' id='PlacementCalendar'>
                <p className='placement-table-head w-100 m-0 rounded-top '>Internship timelines</p>
                <table className="placement-table w-100">

                  <thead>
                    <tr>
                      <th>Internship cycle</th>
                      <th>Summer internship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Batch</td>
                      <td>Class of 2025-27</td>
                    </tr>
                    <tr>
                      <td>Period (2 months)</td>
                      <td>April-May 2026</td>
                    </tr>
                    <tr>
                      <td>Pre-placement talks</td>
                      <td>August/September 2025</td>
                    </tr>
                    <tr>
                      <td>Tentative hiring week</td>
                      <td>September/October 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='mt-0 d-inline w-50'>
                <p className='placement-table-head w-100 m-0 rounded-top'>Final placement timelines</p>
                <table className="placement-table w-100">

                  <thead>
                    <tr>
                      <th>Internship cycle</th>
                      <th>Summer internship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Batch</td>
                      <td>Class of 2025-27</td>
                    </tr>
                    <tr>
                      <td>Period (2 months)</td>
                      <td>April-May 2026</td>
                    </tr>
                    <tr>
                      <td>Pre-placement talks</td>
                      <td>August/September 2025</td>
                    </tr>
                    <tr className='rounded-bottom'>
                      <td>Tentative hiring week</td>
                      <td>September/October 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <PlacementCareerTab />
            <PlacementHighlights />
            <OurRecuriters />
            <PlacementContact />
          </div>
        ) : (
          <div className='p-3 bg-light rounded'>
            <p>
              The final placement process focuses on securing full-time job roles for students.
              Companies visit the campus, conduct pre-placement talks, assessments, and interviews
              to select candidates for final offers.
            </p>
            <h1 className='fs-2 fw-medium mt-5'>Tentative placement timelines</h1>

            <div className="d-flex mt-3 gap-lg-2 flex-lg-row flex-column gap-3">
              {/* <div className='d-inline w-lg-50 w-100'>
              <p className='placement-table-head m-0 w-100 rounded-top'>Internship timelines</p>
              <table className="placement-table w-100">

                <thead>
                  <tr>
                    <th>Internship cycle</th>
                    <th>Summer internship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Batch</td>
                    <td>Class of 2025-27</td>
                  </tr>
                  <tr>
                    <td>Period (2 months)</td>
                    <td>April-May 2026</td>
                  </tr>
                  <tr>
                    <td>Pre-placement talks</td>
                    <td>August/September 2025</td>
                  </tr>
                  <tr>
                    <td>Tentative hiring week</td>
                    <td>September/October 2025</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
              <div className='d-inline w-lg-50 w-100'>
                <p className='placement-table-head w-100 m-0 text-center rounded-top'>Final placement timelines</p>
                <table className="placement-table w-100">

                  <thead>
                    <tr>
                      <th>Placement cycle</th>
                      <th>Summer Placement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Batch</td>
                      <td>Class of 2025-27</td>
                    </tr>
                    <tr>
                      <td>Period (2 months)</td>
                      <td>April-May 2026</td>
                    </tr>
                    <tr>
                      <td>Pre-placement talks</td>
                      <td>August/September 2025</td>
                    </tr>
                    <tr>
                      <td>Tentative hiring week</td>
                      <td>September/October 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <PlacementCareerTab />
            <PlacementHighlights />
            <OurRecuriters />
            <PlacementContact />
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementTab