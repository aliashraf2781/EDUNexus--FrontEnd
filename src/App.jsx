import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseLesson from "./pages/CourseLesson/CourseLesson";
// import CourseList from "./pages/CourseList/CourseList";
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
import Cart from "./pages/Cart/Cart";
import AddPromoCode from "./pages/AddPromoCode/AddPromoCode";
import AdminLayout from "./pages/AdminDashboardPages/AdminLayout";
import InstructorsPage from "./pages/AdminDashboardPages/InstructorsPage/InstructorsPage";
import RegisterInstructor from "./pages/InstructorRegister/InstructorRegister";
import ApplicationReview from "./pages/InstructorReviewPage/InstructorReviewPage";
import InstructorLogin from "./pages/InstructorLogIn/InstructorLogIn";
import Dashboard from "./Components/InstructorDashbord/Dashboard/Dashboard";
import AccountDeactivated from "./pages/AccountDeactivatedPage/AccountDeactivatedPage";

import OrganizationLayout from "./components/Layout/OrganizationDashboardLayout";
import OrganizationDashboard from "./pages/OrgDashboard/index";
import Unauthorized from "./pages/UnauthorizedPage/UnauthorizedPage";
import {
  InstructorRoute,
  StudentRoute,
} from "./components/ProtectedRoute/ProtectedRoute";
import AdminLogin from "./pages/AdminLoginPage/AdminLoginPage";
import StudentsPage from "./pages/AdminDashboardPages/StudentsPage/StudentsPage";

const route = createBrowserRouter([
  {
    path: "/unauthorized",
    element: <Layout />,
    children: [{ index: true, element: <Unauthorized /> }],
  },
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
        element: (
          <StudentRoute>
            <StudentDashboard />
          </StudentRoute>
        ),
      },
      {
        path: "course-details/:id",
        element: <CourseDetails />,
      },
      {
        path: "course-lesson",
        element: (
          <StudentRoute>
            <CourseLesson />
          </StudentRoute>
        ),
      },
      {
        path: "quiz",
        element: (
          <StudentRoute>
            <Quiz />
          </StudentRoute>
        ),
      },
      {
        path: "course-notifation",
        element: (
          <StudentRoute>
            <CourseNotfication />
          </StudentRoute>
        ),
      },
      {
        path: "favorite-courses",
        element: (
          <StudentRoute>
            <FavoriteCourses />
          </StudentRoute>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "instructor-profile/:id",
        element: <InsProfile />,
      },
      {
        path: "instructor-quiz-editor",
        element: (
          <InstructorRoute>
            {" "}
            <InsQuizEditor />
          </InstructorRoute>
        ),
      },
      {
        path: "student-dashboard",
        element: (
          <StudentRoute>
            <StudentDashboard />
          </StudentRoute>
        ),
      },
      {
        path: "instructor-profile-settings",
        element: (
          <InstructorRoute>
            <InsProfileSettings />
          </InstructorRoute>
        ),
      },
    ],
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "instructor",
    element: (
      <InstructorRoute>
        <DashboardLayout />
      </InstructorRoute>
    ),

    children: [
      {
        index: true,
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
      {
        path: "add-promocode",
        element: <AddPromoCode />,
      },
    ],
  },

  {
    path: "organization-dashboard",
    element: <OrganizationLayout />,
    children: [
      {
        index: true,
        element: <OrganizationDashboard />,
      },
    ],
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
    children: [
      { index: true, element: <InstructorsPage /> },
      { path: "students", element: <StudentsPage /> },
    ],
  },
  {
    path: "/instructorRegister",
    element: <RegisterInstructor />,
  },
  {
    path: "/instructorLogIn",
    element: <InstructorLogin />,
  },
  {
    path: "/application-review",
    element: <ApplicationReview />,
  },
  {
    path: "/deactivated",
    element: <AccountDeactivated />,
  },
  { path: "/adminLogin", element: <AdminLogin /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
