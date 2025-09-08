import React from "react";
import FaculityHero from "./FaculityPage/FaculityHero/FaculityHero";
import FaculityAbout from "./FaculityPage/FaculityAbout/FaculityAbout";
import FaculityYears from "./FaculityPage/FaculityYears/FaculityYears";

function FaculityPage() {
  return (
    <div>
      <FaculityHero
        title="Faculty of Engineering"
        bgImage="https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-YMZPJG5.jpg"
        breadcrumbs={["Home", "Faculties", "Engineering"]}
      />

      <FaculityAbout />
      <FaculityYears />
    </div>
  );
}

export default FaculityPage;
