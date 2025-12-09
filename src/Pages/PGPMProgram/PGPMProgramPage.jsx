
import heroImage from "../../Assets/aboutPageImage/ucu-About us.svg";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import PgApplications from "../PgprogramPage/PgApplications";
import PgTabs from "../PgprogramPage/PgTab";
import NewFooter from "../../Components/NewFooter/NewFooter";
import Navbar from "../../Components/Navbar/Navbar";

function PGPMProgramPage() {
    return (
        <>
            <div>

                <Navbar />
                <AboutPageHero title="PGPM ELITE"
                    sub="Post Graduate Program in Management"
                    breadcrumb={["Home", "PGDM Programs"]} 
                    bgImage="https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80" />

                <div>
                    <PgApplications />
                </div>

                <PgTabs />

                <NewFooter />
            </div>
        </>
    );
}

export default PGPMProgramPage;
