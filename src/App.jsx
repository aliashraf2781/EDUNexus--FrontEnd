import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Quiz from "./Components/Quiz/Quiz";
import SignupPage from "./pages/SignUpScreen/signUp";
import Login from "./pages/LoginScreen/Login";
import About from "./pages/aboutScreen/about";
import ContactUs from "./pages/ContactSreen/contactus";
import StudentDashboard from "./pages/StudentDashboard/StdDashboard";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseLesson from "./pages/CourseLesson/CourseLesson";
import CourseList from "./pages/CourseList/CourseList";
import NotFoundPage from "./pages/NotFoundPage/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideMenuComponent from "./components/InstructorDashbord/SideMenuComponent/SideMenuComponent";
import NavbarComponent from "./components/InstructorDashbord/NavbarComponent/NavbarComponent";
export default function App() {
  return (
    <>
      <div className="flex">
        <SideMenuComponent />
        <main className="flex-1 px-5 py-6">
          <NavbarComponent />
        </main>
      </div>
    </>
  );
}