import React from "react";
import { Bell, Heart, ShoppingCart, Search } from "lucide-react";

const leaderboardData = [
  {
    name: "Dala Mohammed",
    achievement: "Top Performer",
    score: 950,
    img: "./Ellipse 120.png",
  },
  {
    name: "Omar Mohammed",
    achievement: "Excellent Attendance",
    score: 930,
    img: "./Ellipse 121.png",
  },
  {
    name: "Sara Mohammed",
    achievement: "High Score",
    score: 850,
    img: "./Ellipse 122.png",
  },
  {
    name: "Hana Mohammed",
    achievement: "Most Improved",
    score: 845,
    img: "./Ellipse 123.png",
  },
  {
    name: "Amal Mohammed",
    achievement: "Outstanding Effort",
    score: 830,
    img: "./Ellipse 124.png",
  },
];

const Leaderboard = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-dark">
          <span className="text-dark">Edu</span>
          <span className="text-primary">NEXUS</span>
        </h3>

        <div className="flex-1 mx-4 max-w-xl">
          <div className="flex items-center border border-light rounded-md px-3 py-2 bg-white">
            <Search size={18} className="text-light mr-2" />
            <input
              type="text"
              placeholder="What do you want learn..."
              className="w-full outline-none bg-transparent text-dark placeholder-light"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell className="text-dark cursor-pointer" />
          <Heart className="text-dark cursor-pointer" />
          <ShoppingCart className="text-dark cursor-pointer" />
          <img
            src="./Ellipse 120.png"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-primary mb-6 text-left">Leaderboard</h1>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search in your courses..."
          className="w-full md:w-1/2 border border-light rounded-md px-4 py-2 outline-none text-dark placeholder-light"
        />
        <select className="w-full md:w-1/4 border border-light rounded-md px-4 py-2 outline-none text-dark">
          <option>Latest</option>
          <option>Highest Score</option>
          <option>Name</option>
        </select>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-4">
        {leaderboardData.map((user, index) => (
          <div
            key={index}
            className="bg-secondary p-4 rounded-lg flex flex-col md:flex-row justify-between items-center"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img
                src={user.img}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <h5 className="font-semibold text-dark">{user.name}</h5>
            </div>

            {/* Achievement */}
            <div className="bg-gradient-to-r from-[#e3d7d2] to-[#d6cfc9] px-6 py-2 rounded-full flex items-center gap-2 min-w-[260px] justify-center text-dark font-medium">
              <span>Achievement:</span>
              <span className="capitalize font-semibold">{user.achievement}</span>
            </div>

            {/* Score */}
            <div className="text-right mt-4 md:mt-0">
              <h6 className="text-dark mb-1 font-medium">Score</h6>
              <span className="font-bold text-dark">{user.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
