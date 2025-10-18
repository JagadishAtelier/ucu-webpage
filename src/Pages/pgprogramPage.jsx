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
                title="PGDM"
                sub="Post Graduate Diploma in Management"
                breadcrumb={["Home", "PGDM Programs"]}
                bgImage="https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
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
