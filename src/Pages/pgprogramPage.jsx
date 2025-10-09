import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import AboutPageHero from "./AboutPage/AboutPageHero/AboutPageHero";
import heroImage from "../Assets/aboutPageImage/ucu-About us.svg";
import PgTabs from "./PgprogramPage/PgTab";


function PgprogramPage() {
    return (
        <div>
            <Navbar />
            <AboutPageHero
                title="PG Programs"
                breadcrumb={["Home", "PG Programs"]}
                bgImage={heroImage}
            />
            <PgTabs />

            <NewFooter />
        </div>
    );
}

export default PgprogramPage;
