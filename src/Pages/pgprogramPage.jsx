import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import AboutPageHero from "./AboutPage/AboutPageHero/AboutPageHero";
import heroImage from "../Assets/aboutPageImage/ucu-About us.svg";
import PgTabs from "./PgprogramPage/PgTab";
import PgApplications from "./PgprogramPage/PgApplications";


function PgprogramPage() {
    return (
        <>
        <div>
            
            <Navbar />
            <AboutPageHero
                title="PG Programs"
                breadcrumb={["Home", "PG Programs"]}
                bgImage={heroImage}
            />
            <div>
                <PgApplications />
            </div>
            
            <PgTabs />

            <NewFooter />
        </div>
        </>
    );
}

export default PgprogramPage;
