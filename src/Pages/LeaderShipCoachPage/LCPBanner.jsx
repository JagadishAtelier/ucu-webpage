import React from "react";
import "./LCPBanner.css";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import LCPPower from "./LCPPower";
import LCPEnrollment from "./LCPEnrollment";
import LCPGrid from "./LCPGrid";
import ClientProfile from "./ClientProfile";
import OurExperts from "./ourExperts";
import LCPWhy from "./LCPWhy";
import LCPContact from "./LCPContact";

function LCPBanner() {
    return (
        <div className='captital-campus-content-sec mt-4'>
            <LCPPower/>
            {/* <LCPEnrollment/> */}
            <LCPGrid/>
            <ClientProfile/>
            <OurExperts/>
            <LCPWhy/>
            <LCPContact/>
        </div>
    );
}

export default LCPBanner;
