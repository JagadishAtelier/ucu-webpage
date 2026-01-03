import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import PGDMTabs from "./PGDMTabs";

function PGDMProgramPage() {
    return (
        <>
            <div>
                <Navbar />
                <PGDMTabs />
                <NewFooter />
            </div>
        </>
    );
}

export default PGDMProgramPage;
