import { useState } from "react";
import Header from "../../components/StdDashboard/StdDasboardHeader/Header";
import enrolledIcon from "../../assets/StdDashboardIcons/PlayCircle.png";
import progressIcon from "../../assets/StdDashboardIcons/school.png";
import quizIcon from "../../assets/StdDashboardIcons/app_registration.png";
import leaderboardIcon from "../../assets/StdDashboardIcons/Users.png";
import EnrolledCourses from "../../components/StdDashboard/EnrolledCourses/EnrolledCourses";
import UpcomingQuizzes from "../../components/StdDashboard/UpcomingQuizzes/UpcomingQuizzes";
import ActiveCourse from "../../components/StdDashboard/progressTracking/ActiveCourse";
import StatisticsSection from "../../components/StdDashboard/progressTracking/StatisticsSection";
import DeadlinesSection from "../../components/StdDashboard/progressTracking/DeadlinesSection";
import StdLeaderboard from "../../components/StdDashboard/StdDashbordLeaderboard/StdLeaderboard";
import ChatApp from "../../components/StdDashboard/StdChat/ChatApp";
import ProfileSettings from "../../components/StdDashboard/ProfileSettings/ProfileSettings";
import Wishlist from "../../components/StdDashboard/Wishlist/WishList";
import ShoppingCart from "../../components/StdDashboard/ShoppingCart/ShoppingCart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeCard, setActiveCard] = useState("Enrolled Courses");

  const cards = [
    { title: "Enrolled Courses", icon: enrolledIcon },
    { title: "Progress Tracking", icon: progressIcon },
    { title: "Upcoming Quizzes", icon: quizIcon },
    { title: "Leaderboard", icon: leaderboardIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-6">Dashboard</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cards.map(({ title, icon }) => (
                <div
                  key={title}
                  onClick={() => setActiveCard(title)}
                  className={`flex items-center p-7 rounded-md shadow-sm cursor-pointer transition duration-200 text-gray-600`}
                  style={{
                    backgroundColor:
                      activeCard !== title ? "#FFEEE8" : "#FFC3B0",
                  }}
                >
                  <div className="bg-white p-2 rounded-md mr-3 flex items-center justify-center w-10 h-10">
                    <img src={icon} alt={title} className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium">{title}</div>
                </div>
              ))}
            </div>
            <div>{renderActiveCardContent()}</div>
          </div>
        );

      case "Settings":
        return (
          <div className="p-6 text-gray-700 bg-[#FFF3F0] font-medium">
            <ProfileSettings />
          </div>
        );
        case "Wishlist":
          return (
            <div className="p-6 text-gray-700 font-medium">
                <Wishlist/>
            </div>
          );
        case "Shopping Cart":
            return (
              <div className="p-6 text-gray-700 font-medium">
                  <ShoppingCart/>
              </div>
            );
      default:
        return null;
    }
  };

  const renderActiveCardContent = () => {
    switch (activeCard) {
      case "Enrolled Courses":
        return <EnrolledCourses />;

      // case "Progress Tracking":
      //   return (
      //     <div className="p-4 md:p-8 space-y-10">
      //       <StatisticsSection />
      //       <ActiveCourse />
      //       <DeadlinesSection />
      //     </div>
      //   );
      // case "Upcoming Quizzes":
      //   return <UpcomingQuizzes />;
      case "Leaderboard":
        return (
          <div className="p-6 text-gray-700 font-medium">
            <StdLeaderboard />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="h-[170px] bg-[#FFF3F0]"></div>
      <div className="relative -mt-[130px] max-w-7xl mx-auto bg-white shadow-lg overflow-hidden">
        <div className="border border-gray-200">
          <Header />
          <div className="bg-white border-t border-gray-200 overflow-x-auto">
            <div className="flex justify-center space-x-6 px-6 pt-3">
              {["Dashboard", "Settings","Wishlist","Shopping Cart"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm pb-3 transition-all duration-200 cursor-pointer focus:outline-none active:scale-95 ${
                    activeTab === tab
                      ? "text-gray-800 font-semibold border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
