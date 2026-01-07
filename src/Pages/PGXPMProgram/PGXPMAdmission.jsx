import React from "react";
import "../../Pages/PgprogramPage/pgTabs/PGPMAdmission/PGPMAdmission.css";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import PGXPMAddEle from "./PGXPMAddEle";
import PGXPMApp from "./PGXPMApp";
import PGXPMEvavul from "./PGXPMEvavul";

function PGXPMAdmission() {
    return (
        <div>
                    <PGXPMAddEle/>
        <PGXPMApp/>
        <PGXPMEvavul/>
        </div>
    );
}

export default PGXPMAdmission;
