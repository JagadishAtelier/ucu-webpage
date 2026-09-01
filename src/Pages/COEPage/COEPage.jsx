import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import NewFooter from '../../Components/NewFooter/NewFooter';
import './COEPage.css';
import COEAbout from './COEAbout';
import COEBenefactors from './COEBenefactors';
import AboutPageHero from '../AboutPage/AboutPageHero/AboutPageHero';
import useFrontendContent from '../../hooks/useFrontendContent';

function COEPage() {
    const { getKeyValue, getImage, getArray } = useFrontendContent("coe-all");

    // Dynamic banner content with static code fallback
    const title = getKeyValue("COEPage", "title", "Centres of Excellence");
    const bgImage = getImage("COEPage", 0, "https://img.freepik.com/premium-photo/waving-american-flag-held-by-diverse-hands-stars-stripes-rippling-proudly-wind_638974-3314.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80");

    return (
        <div>
            <Navbar />
            <AboutPageHero
                title={title}
                breadcrumb={["Home", title]}
                bgImage={bgImage}
            />

            <COEAbout getKeyValue={getKeyValue} getArray={getArray} />
            <COEBenefactors getKeyValue={getKeyValue} getArray={getArray} />
            <NewFooter />
        </div>
    )
}

export default COEPage