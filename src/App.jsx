import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseLesson from "./pages/CourseLesson/CourseLesson";
import CourseList from "./pages/CourseList/CourseList";
import CourseNotfication from "./pages/CourseNotification/CourseNotification";
import InsProfile from "./pages/InstructorProfile/InstructorProfile";
import InsQuizEditor from "./pages/instructorQuizEditor/InsQuizEditor";
import Home from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router";

const route = createBrowserRouter([
  {
    path: "",
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
        path: "course-details",
        element: <CourseDetails />,
      },
      {
        path: "course-lesson",
        element: <CourseLesson />,
      },
      {
        path: "course-notifation",
        element: <CourseNotfication />,
      },
      {
        path: "instructor-profile",
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
    ],
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
</>
)
}

export default App;
