import React from "react";
import "./LCPBanner.css";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import LCPPower from "./LCPPower";
import LCPGrid from "./LCPGrid";
import ClientProfile from "./ClientProfile";
import LCPWhy from "./LCPWhy";
import LCPContact from "./LCPContact";
import OurExperts from './OurExperts'
import EEPPhase from "./EEPPhase";
import useFrontendContent from '../../hooks/useFrontendContent';

function LCPBanner() {
    const { getKeyValue, getImage, getArray } = useFrontendContent("lcp");

    return (
        <div>
            <Navbar />
            <div className='captital-campus-content-sec mt-4'>
                <LCPPower getKeyValue={getKeyValue} getImage={getImage} />
                <EEPPhase getKeyValue={getKeyValue} getArray={getArray} />
                <LCPGrid getKeyValue={getKeyValue} getArray={getArray} />
                <ClientProfile getKeyValue={getKeyValue} getArray={getArray} />
                <OurExperts getKeyValue={getKeyValue} getArray={getArray} />
                <LCPWhy getKeyValue={getKeyValue} getArray={getArray} />
                <LCPContact getKeyValue={getKeyValue} />
            </div>
            <NewFooter />
        </div>
    );
}

export default LCPBanner;
