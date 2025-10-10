import React, { useState } from 'react'
import './PlacementTab.css'
import PlacementCareerTab from './PlacementCareerTab';
import PlacementHighlights from './PlacementHighlights';
import OurRecuriters from './OurRecuriters';
import PlacementContact from './PlacementContact';
function PlacementTab() {
const [selectedBtn, setSelectedBtn] = useState("intern");
  return (
    <div className='p-3 mx-auto placement-tab-div my-1'>
        <h1 className="display-6 fw-bold col-12 col-lg-12"><span style={{color:"#5ac501"}} className=''>PGDM  </span>placement and career services</h1>
    
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <h1 className='fs-2 fw-medium mt-5'>Placements process</h1>
    <p>The placement process happens in two hiring cycles:</p>

    <div className='d-flex gap-3 flex-lg-row flex-column'>
        <button className={`placement-btns-intern py-3 ${selectedBtn === "intern" ? "active" : ""}`} onClick={() => setSelectedBtn("intern")}>Internship Placement Process</button>
        <button className={`placement-btns-intern py-3 ${selectedBtn === "final" ? "active" : ""}`} onClick={() => setSelectedBtn("final")}>Final Placement Process</button>
    </div>
    
    
      {/* --- Conditional Content --- */}
      <div className="mt-4">
        {selectedBtn === "intern" ? (
          <div>
            <p>
The Corporate Autumn/Summer Internship is a mandatory credit component of the Post Graduate Diploma in Management course. The current Class 2023-25 participants will see the last Autumns Internship. Starting the Class of 2024-26, students will be available for Summer Internships (Please refer to the placement timeline table).
            </p>
            <p>
                Pre-Placement Offer (PPO): 40-50% of the batch gets placed through the Internships and Corporate competitions route (PPOs), much ahead of the final placement process. Students with PPO are signed out from the next hiring cycle.
            </p>

            <h1 className='fs-2 fw-medium mt-5'>Tentative placement timelines</h1>

            <div className='mt-3'>
                 <p className='placement-table-head m-0'>Internship timelines</p>
<table className="placement-table">

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
            <div className='mt-0'>
                 <p className='placement-table-head m-0'>Final placement timelines</p>
<table className="placement-table">

              {/* <thead>
                <tr>
                  <th>Internship cycle</th>
                  <th>Summer internship</th>
                </tr>
              </thead> */}
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

            <PlacementCareerTab/>
            <PlacementHighlights/>
            <OurRecuriters/>
            <PlacementContact/>
          </div>
        ) : (
          <div>
            <h4>Final Placement Process</h4>
            <p>
              The final placement process focuses on securing full-time job roles for students. 
              Companies visit the campus, conduct pre-placement talks, assessments, and interviews 
              to select candidates for final offers.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementTab