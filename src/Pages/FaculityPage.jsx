import React from "react";
import FaculityHero from "./FaculityPage/FaculityHero/FaculityHero";
import FaculityAbout from "./FaculityPage/FaculityAbout/FaculityAbout";
import FaculityYears from "./FaculityPage/FaculityYears/FaculityYears";
import FaculityVission from "./FaculityPage/FaculityVission/FaculityVission";
import FaculityBg from "./FaculityPage/FaculityBg/FaculityBg";
import FaculityContact from "./FaculityPage/FaculityContact/FaculityContact";
import FaculityFaq from "./FaculityPage/FaculityFaq/FaculityFaq";
import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";

function FaculityPage() {
  return (
    <div>
       <Navbar />
      <FaculityHero
        title="Faculty of Engineering"
        bgImage="https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-YMZPJG5.jpg"
        breadcrumbs={["Home", "Faculties", "Engineering"]}
      />

      <FaculityAbout />
      <FaculityYears />
      <FaculityVission />
      <FaculityBg />
      <FaculityContact />
      <FaculityFaq />
      <NewFooter />
    </div>
  );
}

export default FaculityPage;
