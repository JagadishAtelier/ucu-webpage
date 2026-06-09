import React from 'react'
import PGPMFLEXAdmissionEligible from './PGPMFLEXAdmissionEligible'
import PGPMFlexApplication from './PGPMFlexApplication'
import PGPMFlexEvalution from './PGPMFlexEvalution'
import ProgramContentRenderer from '../../Components/ProgramContentRenderer'
import useProgramTabSections from '../../Api/useProgramTabSections'

function PGPMFlexAdmission() {
  const { sections } = useProgramTabSections("pgpm-flex", "Admissions");

  if (sections.length) {
    return <ProgramContentRenderer sections={sections} />;
  }

  return (
    <div>
        <PGPMFLEXAdmissionEligible/>
        <PGPMFlexApplication/>
        <PGPMFlexEvalution/>
    </div>
  )
}

export default PGPMFlexAdmission
