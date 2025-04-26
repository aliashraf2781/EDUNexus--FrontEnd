import React from "react";
import studentsSvg from "../../../assets/Instructor Dashboard/userCircle.svg";
import coursesSvg from "../../../assets/Instructor Dashboard/Notepad.svg";
import earningsSvg from "../../../assets/Instructor Dashboard/CreditCard.svg";
import soldSvg from "../../../assets/Instructor Dashboard/Stack.svg";
import avatarSvg from "../../../assets/Instructor Dashboard/bigAvatar.svg";
import { ArrowDown, Star } from "lucide-react";
import commentSvg from "../../../assets/Instructor Dashboard/comment.svg";
import reviewSvg from "../../../assets/Instructor Dashboard/review.svg";
import purchaseSvg from "../../../assets/Instructor Dashboard/purchase.svg";
import RevenueChart from "./ChartComponent/ChartComponent";
import EarningsChart from "./ProfileViewChart/ProfileViewChart";
import fullStartSvg from "../../../assets/Instructor Dashboard/Star.svg";
import halfStartSvg from "../../../assets/Instructor Dashboard/halfStar.svg";
import RatingsChart from "./RatingChartComponent/RatingChartComponent";
import CourseOverviewComponent from "./CourseOverviewComponent/CourseOverviewComponent";

export default function Dashboard() {
  return (
    <div className="px-5 py-6 flex flex-col gap-6">
      <div className="flex  gap-6 ">
        <div className="flex gap-6 p-6 bg-white flex-1">
          <div className="p-3.5 bg-rose-50">
            <img src={studentsSvg} alt="" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl">1,674,767</h2>
            <p>Students</p>
          </div>
        </div>
        <div className="flex gap-6 p-6 bg-white flex-1">
          <div className="p-3.5 bg-rose-50">
            <img src={coursesSvg} alt="" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl">3</h2>
            <p>Online Courses</p>
          </div>
        </div>
        <div className="flex gap-6 p-6 bg-white flex-1">
          <div className="p-3.5 bg-rose-50">
            <img src={earningsSvg} alt="" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl">$7,461,767</h2>
            <p>Total Earnings</p>
          </div>
        </div>
        <div className="flex gap-6 p-6 bg-white flex-1">
          <div className="p-3.5 bg-rose-50">
            <img src={soldSvg} alt="" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl">56,489</h2>
            <p>Course Sold</p>
          </div>
        </div>
      </div>
      <div className="flex p-10 items-center justify-between bg-slate-900 flex-1 text-white">
        <div className="flex gap-6 items-center ">
          {" "}
          <img src={avatarSvg} alt="" />
          <div>
            <h3 className="text-xl font-semibold">Vako Shvili</h3>
            <p className="font-light">vako.shvili@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p>1/2 steps</p>

          <div className="w-80 bg-gray-200  h-2.5 dark:bg-gray-700 flex-1/2">
            <div className="bg-blue-600 h-2.5 " style={{ width: "25%" }}></div>
          </div>
          <p className="font-semibold">25% Completed</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="cursor-pointer p-3 font-semibold bg-primary "
          >
            Edit Biography
          </button>
          <button
            type="button"
            className="cursor-pointer p-3 font-semibold bg-slate-800 "
          >
            <ArrowDown />
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-4 px-5 py-4 bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Recent Activity</h3>
            <select
              name="Headline"
              id="Headline"
              className="mt-0.5 rounded  sm:text-sm "
            >
              <option value="today">Today</option>
              <option value="this week">this week</option>
              <option value="this month">this month</option>
            </select>
          </div>
          <hr className="text-gray-200  -mx-5" />
          <div className="flex items-start gap-4">
            <img alt="" src={commentSvg} className="  object-cover" />

            <div>
              <h3 className="font-medium text-gray-900 sm:text-lg">
                Kevin comments on your lecture “What is ux” in <br /> “2021
                ui/ux design with figma”
              </h3>

              <p className="mt-0.5 text-gray-700">Just now</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img alt="" src={reviewSvg} className="  object-cover" />

            <div>
              <h3 className="font-medium text-gray-900 sm:text-lg">
                John give a 5 star rating on your course “2021 ui/ux <br />{" "}
                design with figma”
              </h3>

              <p className="mt-0.5 text-gray-700">5 mins ago</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img alt="" src={purchaseSvg} className="  object-cover" />

            <div>
              <h3 className="font-medium text-gray-900 sm:text-lg">
                Sraboni purchase your course “2021 ui/ux <br /> design with
                figma”
              </h3>

              <p className="mt-0.5 text-gray-700">6 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4 px-5 py-4 bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Revenue</h3>
            <select
              name="Headline"
              id="Headline"
              className="mt-0.5 rounded  sm:text-sm "
            >
              <option value="today">Today</option>
              <option value="this week">this week</option>
              <option value="this month">this month</option>
            </select>
          </div>
          <hr className="text-gray-200   -mx-5" /> <RevenueChart />
        </div>
        <div className="flex flex-col flex-1 gap-4 px-5 py-4 bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Profile View</h3>
            <select
              name="Headline"
              id="Headline"
              className="mt-0.5 rounded  sm:text-sm "
            >
              <option value="today">Today</option>
              <option value="this week">this week</option>
              <option value="this month">this month</option>
            </select>
          </div>
          <hr className="text-gray-200   -mx-5" /> <EarningsChart />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col w-[536px] gap-4 px-5 py-4 bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Overall Course Rating</h3>
            <select
              name="Headline"
              id="Headline"
              className="mt-0.5 rounded  sm:text-sm "
            >
              <option value="this month">this month</option>
              <option value="today">Today</option>
              <option value="this week">this week</option>
            </select>
          </div>
          <hr className="text-gray-200  -mx-5" />
          <div className="flex items-start justify-between">
            <div className="flex flex-col justify-between p-6 items-center bg-secondary">
              <h1 className="text-5xl font-semibold">4.6</h1>
              <div className="flex">
                <img src={fullStartSvg} alt="" />
                <img src={fullStartSvg} alt="" />
                <img src={fullStartSvg} alt="" />
                <img src={fullStartSvg} alt="" />
                <img src={halfStartSvg} alt="" />
              </div>
              <p>Overall Rating</p>
            </div>
            <RatingsChart />
          </div>
          <hr className="text-gray-200  -mx-5" />
          <div className="flex flex-col gap-3">
            
            <div className="flex justify-between items-center">
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <p>5 Star</p>

              <div className="w-64 bg-gray-100  h-2.5">
                <div
                  className="bg-primary h-2.5 "
                  style={{ width: "56%" }}
                ></div>
              </div>
              <p>56%</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <Star className="text-amber-400 size-5" />
              <p>4 Star</p>

              <div className="w-64 bg-gray-100  h-2.5">
                <div
                  className="bg-primary h-2.5 "
                  style={{ width: "37%" }}
                ></div>
              </div>
              <p>37%</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <Star className="text-amber-400 size-5" />
              <Star className="text-amber-400 size-5" />
              <p>3 Star</p>

              <div className="w-64 bg-gray-100  h-2.5">
                <div
                  className="bg-primary h-2.5 "
                  style={{ width: "8%" }}
                ></div>
              </div>
              <p>8%</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={fullStartSvg} alt="" />
              <img src={fullStartSvg} alt="" />
              <Star className="text-amber-400 size-5" />
              <Star className="text-amber-400 size-5" />
              <Star className="text-amber-400 size-5" />
              <p>2 Star</p>

              <div className="w-64 bg-gray-100  h-2.5">
                <div
                  className="bg-primary h-2.5 "
                  style={{ width: "1%" }}
                ></div>
              </div>
              <p>1%</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={fullStartSvg} alt="" />

              <Star className="text-amber-400 size-5" />
              <Star className="text-amber-400 size-5" />
              <Star className="text-amber-400 size-5" />
              <Star className="text-amber-400 size-5" />
              <p>1 Star</p>

              <div className="w-64 bg-gray-100  h-2.5">
                <div
                  className="bg-primary h-2.5 "
                  style={{ width: "1%" }}
                ></div>
              </div>
              <p>&lt;1%</p>
            </div>
          </div>
        </div>
        <CourseOverviewComponent/>
      </div>
    </div>
  );
}
