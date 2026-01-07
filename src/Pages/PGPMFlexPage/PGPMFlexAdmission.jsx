import React from 'react'
import PGPMFLEXAdmissionEligible from './PGPMFLEXAdmissionEligible'
import PGPMFlexApplication from './PGPMFlexApplication'
import PGPMFlexEvalution from './PGPMFlexEvalution'

function PGPMFlexAdmission() {
  return (
    <div>
        <PGPMFLEXAdmissionEligible/>
        <PGPMFlexApplication/>
        <PGPMFlexEvalution/>
    </div>
  )
}

export default PGPMFlexAdmission