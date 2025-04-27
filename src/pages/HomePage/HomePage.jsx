import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopCategoriesComponent from "../../Components/TopCategoriesComponent/TopCategoriesComponent";
// import CoursesComponent from "../../Components/CoursesComponent/CoursesComponent";
import FeaturedCoursesComponent from "../../Components/FeaturedCoursesComponent/FeaturedCoursesComponent";
import TeachingStepsComponent from "../../Components/TeachingStepsComponent/TeachingStepsComponent";
import TopInstructorsComponent from "../../Components/TopInstructorsComponent/TopInstructorsComponent";
import StartLearningComponent from "../../Components/StartLearnIngComponent/StartLearningComponent";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TopCategoriesComponent />
      {/* <CoursesComponent /> */}
      <FeaturedCoursesComponent />
      <TeachingStepsComponent />
      <TopInstructorsComponent />
      <StartLearningComponent />
    </>
  );
}
