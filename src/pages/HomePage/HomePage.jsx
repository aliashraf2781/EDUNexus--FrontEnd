import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Footer from "../../Components/Footer/Footer";
import TopCategoriesComponent from "../../Components/TopCategoriesComponent/TopCategoriesComponent";
import CoursesComponent from "../../Components/CoursesComponent/CoursesComponent";
import FeaturedCoursesComponent from "../../Components/FeaturedCoursesComponent/FeaturedCoursesComponent";
import TeachingStepsComponent from "../../Components/TeachingStepsComponent/TeachingStepsComponent";
import TopInstructorsComponent from "../../Components/TopInstructorsComponent/TopInstructorsComponent";
import StartLearningComponent from "../../Components/StartLearnIngComponent/StartLearningComponent";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TopCategoriesComponent />
      <CoursesComponent />
      <FeaturedCoursesComponent />
      <TeachingStepsComponent />
      <TopInstructorsComponent />
      <StartLearningComponent />
      <Footer />
    </>
  );
}
