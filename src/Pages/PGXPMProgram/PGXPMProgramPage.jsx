import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import PGXPMTabs from "./PGXPMTabs";

function PGXPMProgramPage() {
    return (
        <>
            <Navbar />
            <PGXPMTabs />
            <NewFooter />
        </>
    );
}

export default PGXPMProgramPage;
