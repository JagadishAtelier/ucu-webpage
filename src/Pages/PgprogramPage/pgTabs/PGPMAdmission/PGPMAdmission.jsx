import React from 'react'
import './PGPMAdmission.css'
import PGPMAdmissionKeyDates from './PGPMAdmissionKeyDates'
import PGPMInterviewProcess from './PGPMInterviewProcess'
import PGPMAcademicAbilities from './PGPMAcademicAbilities'
import PGPMApplicationGuidelines from './PGPMApplicationGuidelines'
import PGPMEssay from './PGPMEssay'
import PGPMEvaluationProcess from './PGPMEvaluationProcess'
const data = [
  {
    text: "Valid CAT*/GMATx/XAT+ scores. For PGPM admission process 2026-27, UCU Institute of Management will accept scores of GMAT taken after 1st January 2023, CAT taken in 2024/2025, or XAT taken in 2025/2026."
  },
  {
    text: "NMAT# 2024 onwards scores will additionally be accepted for PGPM 2026-27. You can enter scores from multiple attempts. Only the best score will be considered for your admissions."
  },
  {
    text: "A Bachelor’s degree in any discipline from a recognized institution and minimum 60% score across 10th/12th/Undergraduation."
  },
  {
    text: "Candidates with 2+ years of work experience are considered."
  },
  {
    text: "Candidates with 2-3 years of work experience by 30th April 2026 are encouraged to apply for the One Year Flagship PGPM. They are also eligible to apply for the Two year PGDM."
  },
  {
    text: "In case an eligible candidate would like to apply for both the programs, they may do so by filling the application forms for both PGPM and PGDM separately. Candidates will be evaluated based on the respective program’s admission criteria. The admissions panel may also recommend the candidates for a specific program based on the assessment and program fit."
  },
  {
    text: "Freshers and candidates with experience lesser than 24 months strictly may apply to the UCU PGDM Program"
  },
  {
    text: "Candidates with family business experience, or belonging to business families and planning to join the business after their MBA, can enroll for the PGPM - Family Business & Entrepreneurship program"
  },
]
function PGPMAdmission() {
  return (
    <div>
      <h1 className='display-5 fw-bold'><span style={{ color: "#5ac501" }}>Admission</span> Process</h1>
      <p>At UCU, we seek experienced professionals from diverse backgrounds with demonstrated track record of real world performance in business management and ability to lead as we aim to build a community of empathetic business leaders. As a top ranked business management school we continue to innovate business education to add value, not only to our candidates but also to our corporate stakeholders and society as a whole. This is reflected both in selection process and pedagogy of our One Year MBA Program. The admission process is based on a comprehensive evaluation of the candidates on multiple dimensions encompassing personal and professional track record, academic performance, management aptitude and demonstrated competencies.</p>
      <div className='mt-4'>
        {data.map((item, index) => (
          <div className='d-flex gap-3 align-items-baseline mb-2'>
            <div className="green-point-box p-2"></div>
              <p className='mb-0'>{item.text}</p>
          </div>
        ))}
      </div>
      <PGPMAdmissionKeyDates/>
      <PGPMInterviewProcess/>
      <PGPMAcademicAbilities/>
      <PGPMApplicationGuidelines/>
      <PGPMEssay/>
      <PGPMEvaluationProcess/>
    </div>
  )
}

export default PGPMAdmission