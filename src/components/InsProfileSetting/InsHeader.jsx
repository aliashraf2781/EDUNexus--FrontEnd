import userprofile from "../../assets/instructorIMG/Ellipse 300.png";
import noticon from "../../assets/StdDashboardIcons/notification-bing.png";
export default function InsQuizHeader() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Good Morning</h1>
        <p className="text-sm text-gray-500">Dashboard</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={noticon} alt="Search" className="w-5 h-5" />
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img src={userprofile} alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}