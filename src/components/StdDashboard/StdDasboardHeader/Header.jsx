import { useEffect, useState } from 'react';
import userProfile from '../../../assets/StudDashboardImages/Photos.png'
// import { Patch } from './../../../../node_modules/immer/src/types/types-external';

const Header = () => {
  const [data , setData] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        console.error("No authorization token found. Please login.");
        return;
      }
      try {
        const response = await fetch("https://rat-intent-hideously.ngrok-free.app/api/auth/me", {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": true,
            Authorization: `Bearer ${authToken}`,
          },
          // Body: JSON.stringify({}),
        });
        const data = await response.json();
        if (data) {
          console.log("User Profile:", data);
          setData(data);
        } else {
          console.log("Unable to fetch user data.");
        }
      } catch (error) {
        console.log("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);
  return (
    <div className="bg-[#FFFFFF] px-6 py-8 flex justify-center">
      <div className="flex items-center space-x-5">
        <img
          src={userProfile}
          alt="Kevin Gilbert"
          className="w-16 h-16 rounded-full object-cover shadow-sm"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{data.name}</h2>
          <p className="text-sm text-gray-500">{data.role}</p>
          <p className="text-sm text-gray-500">{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
