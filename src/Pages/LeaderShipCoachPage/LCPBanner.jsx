import React from "react";
import "./LCPBanner.css";
import LCPPower from "./LCPPower";
import LCPGrid from "./LCPGrid";
import ClientProfile from "./ClientProfile";
import LCPWhy from "./LCPWhy";
import LCPContact from "./LCPContact";
import OurExperts from './OurExperts'
function LCPBanner() {
    return (
        <div className='captital-campus-content-sec mt-4'>
            <LCPPower />
            <LCPGrid />
            <ClientProfile />
            <OurExperts/>
            <LCPWhy />
            <LCPContact />
        </div>
    );
}

export default LCPBanner;
