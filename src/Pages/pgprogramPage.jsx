import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import AboutPageHero from "./AboutPage/AboutPageHero/AboutPageHero";
import heroImage from "../Assets/aboutPageImage/ucu-About us.svg";
import PgTabs from "./PgprogramPage/PgTab";
import PgApplications from "./PgprogramPage/PgApplications";
import { useLocation } from "react-router-dom";

function PgprogramPage() {
    const { pathname } = useLocation();

    const pathSegments = pathname.split("/").filter(Boolean); // split and remove empty segments
    const lastSegment = pathSegments[pathSegments.length - 1]; // get only the last segment


    const heading = lastSegment
        ? lastSegment.replace(/-/g, " ").toUpperCase()
        : "HOME";
    const subText =
        heading === "PGPM ELITE"
            ? "Post Graduate Program in Management"                // when PGPM Elite
            : "UCU Post Graduate Program in Management"; // default
    return (
        <>
            <div>

                <Navbar />
                <AboutPageHero title={heading} 
                    sub={subText} 
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

export default PgprogramPage;
