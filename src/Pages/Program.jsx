import Organisations from "../Components/Organisations/Organisations";
import ProgramBanner from "../Components/ProgramBanner/ProgramBanner";
import ProgramsTab from "../Components/ProgramsTab/ProgramsTab";
import StatsSection from "../Components/StatsSection/StatsSection";
import WhyUCU from "../Components/WhyUCU/WhyUCU";

const Program = () => {
  return (
    <>
      <ProgramBanner />
      <ProgramsTab />
      <WhyUCU />
      <StatsSection/>
      <Organisations />
    </>
  );
};
export default Program;
