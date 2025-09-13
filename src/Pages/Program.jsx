
import Organisations from "../Components/Organisations/Organisations";
import ProgramBanner from "../Components/ProgramBanner/ProgramBanner";
import ProgramsTab from "../Components/ProgramsTab/ProgramsTab";
import StatsSection from "../Components/StatsSection/StatsSection";
import WhyUCU from "../Components/WhyUCU/WhyUCU";
import NewFooter from "../Components/NewFooter/NewFooter";
import Navbar from "../Components/Navbar/Navbar";

const Program = () => {
  return (
    <>
      <Navbar />
      <ProgramBanner />
      <ProgramsTab />
      <WhyUCU />
      <StatsSection />
      <Organisations />
      <NewFooter />
    </>
  );
};
export default Program;
