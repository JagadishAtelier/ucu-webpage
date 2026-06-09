import React from "react";
import "../../Pages/PgprogramPage/pgTabs/PGPMAdmission/PGPMAdmission.css";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import PGXPMAddEle from "./PGXPMAddEle";
import PGXPMApp from "./PGXPMApp";
import PGXPMEvavul from "./PGXPMEvavul";
import ProgramContentRenderer from "../../Components/ProgramContentRenderer";
import useProgramTabSections from "../../Api/useProgramTabSections";

function PGXPMAdmission() {
    const { sections } = useProgramTabSections("pgxpm", "Admissions");

    if (sections.length) {
        return <ProgramContentRenderer sections={sections} />;
    }

    return (
        <div>
                    <PGXPMAddEle/>
        <PGXPMApp/>
        <PGXPMEvavul/>
        </div>
    );
}

export default PGXPMAdmission;
