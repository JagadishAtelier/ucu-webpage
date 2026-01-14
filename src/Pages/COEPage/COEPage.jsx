import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import NewFooter from '../../Components/NewFooter/NewFooter';
import './COEPage.css';
import COEAbout from './COEAbout';
import COEBenefactors from './COEBenefactors';
import AboutPageHero from '../AboutPage/AboutPageHero/AboutPageHero';
import PgApplications from '../PgprogramPage/PgApplications';

function COEPage() {
    return (
        <div>
            <Navbar />
            <AboutPageHero
                title="Centres of Excellence"
                breadcrumb={["Home", "Centres of Excellence"]}
                bgImage="https://img.freepik.com/premium-photo/waving-american-flag-held-by-diverse-hands-stars-stripes-rippling-proudly-wind_638974-3314.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
            />

            <COEAbout />
            <COEBenefactors />
            <NewFooter />
        </div>
    )
}

export default COEPage