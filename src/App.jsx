import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseLesson from "./pages/CourseLesson/CourseLesson";
import CourseList from "./pages/CourseList/CourseList";
import CourseNotfication from "./pages/CourseNotification/CourseNotification";
import InsProfile from "./pages/InstructorProfile/InstructorProfile";
import InsQuizEditor from "./pages/instructorQuizEditor/InsQuizEditor";
import Home from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import About from "./pages/aboutScreen/about";
import StudentDashboard from "./pages/StudentDashboard/StdDashboard";
import SignupPage from "./pages/SignUpScreen/signUp";
import Login from "./pages/LoginScreen/login";
import CreateCoursePage from "./pages/CreateCoursePage/CreateCoursePage";
import InsProfileSettings from "./pages/insProfileSetting/SettingsPage";
import Layout from "./Components/Layout/Layout";
import FavoriteCourses from "./pages/FavoriteCourses/FavoriteCourses";

import { createBrowserRouter, RouterProvider } from "react-router";
import Quiz from "./Components/Quiz/Quiz";
// import { Layout } from "lucide-react";
import DashboardLayout from "./Components/Layout/DashboardLayout";
import ContactUs from "./pages/ContactSreen/contactus";
import AdminLayout from "./pages/AdminDashboardPages/AdminLayout";
import InstructorsPage from "./pages/AdminDashboardPages/InstructorsPage/InstructorsPage";
import RegisterInstructor from "./pages/InstructorRegister/InstructorRegister";
import ApplicationReview from "./pages/InstructorReviewPage/InstructorReviewPage";
import InstructorLogin from "./pages/InstructorLogIn/InstructorLogIn";
import Dashboard from "./Components/InstructorDashbord/Dashboard/Dashboard";
import AccountDeactivated from "./pages/AccountDeactivatedPage/AccountDeactivatedPage";
import OrganizationDashboard from './Components/Layout/OrganizationDashboard';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <CourseList />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "student-dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "course-details/:id",
        element: <CourseDetails />,
      },
      {
        path: "course-lesson",
        element: <CourseLesson />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "course-notifation",
        element: <CourseNotfication />,
      },
      {
        path: "favorite-courses",
        element: <FavoriteCourses />,
      },
      {
        path: "instructor-profile/:id",
        element: <InsProfile />,
      },
      {
        path: "instructor-quiz-editor",
        element: <InsQuizEditor />,
      },
      {
        path: "student-dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "instructor-profile-settings",
        element: <InsProfileSettings />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "instructor",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        // path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <InsProfile />,
      },
      {
        path: "settings",
        element: <InsProfileSettings />,
      },
      {
        path: "create-course",
        element: <CreateCoursePage />,
      },
      {
        path: "create-quiz",
        element: <InsQuizEditor />,
      },
    ],
  },

  {
    path:"organization-dashboard",
    element:<OrganizationDashboard/>,
    
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <InstructorsPage /> }],
  },
  {
    path: "/instructorRegister",
    element: <RegisterInstructor />,
  },
  {
    path: "/instructorLogIn",
    element: <InstructorLogin/>,
  },
  {
    path:"/application-review",
    element:<ApplicationReview/>
  },
  {
    path:"/deactivated",
    element:<AccountDeactivated/>
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
