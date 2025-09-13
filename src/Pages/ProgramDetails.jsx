import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import ProgramDescription from "../Components/ProgramDetails/ProgramDescription/ProgramDescription";
import ProgramInfo from "../Components/ProgramDetails/ProgramInfo/ProgramInfo";
import FaculityHero from "./FaculityPage/FaculityHero/FaculityHero";

const ProgramDetails = () => {
  return (
    <>
      <Navbar />
      <FaculityHero
        title="PGPM-ELITE (Full-Time)"
        bgImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
        breadcrumbs={["Home", "Program", "PGPM-ELITE"]}
      />
      <ProgramInfo
        title="The Accounting program offers a Bachelor of Science in Accounting."
        description="The program continues to attract students from all ethnic, racial, and cultural backgrounds as they recognize ways that Africana Studies provides them with a forum to examine the intellectual life, the historical experience, and the cultural understanding of one of this country’s largest racial minority groups."
      />
      <ProgramDescription />
      <NewFooter />
    </>
  );
};

export default ProgramDetails;
