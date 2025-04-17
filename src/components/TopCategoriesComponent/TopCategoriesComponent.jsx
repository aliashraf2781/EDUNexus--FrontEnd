import TopCategoryComponent from "../TopCategoryComponent/TopCategoryComponent";
import labelIcon from "../../assets/Top Categories Icons/Cpu.svg";
import androidIcon from "../../assets/Top Categories Icons/ANDroid.svg";
import businessIcon from "../../assets/Top Categories Icons/business.svg";
import designlIcon from "../../assets/Top Categories Icons/Design.svg";
import financeIcon from "../../assets/Top Categories Icons/Finance.svg";
import healthIcon from "../../assets/Top Categories Icons/Health.svg";
import itIcon from "../../assets/Top Categories Icons/IT.svg";
import lifestyleIcon from "../../assets/Top Categories Icons/lifestyle.svg";
import markettingIcon from "../../assets/Top Categories Icons/Marketting.svg";
import musicIcon from "../../assets/Top Categories Icons/Music.svg";
import officeIcon from "../../assets/Top Categories Icons/OFFICE.svg";
import photographyIcon from "../../assets/Top Categories Icons/photography.svg";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "CPU", icon: labelIcon, count: "63,476" },
  { name: "Android", icon: androidIcon, count: "45,231" },
  { name: "Business", icon: businessIcon, count: "78,124" },
  { name: "Design", icon: designlIcon, count: "34,569" },
  { name: "Finance", icon: financeIcon, count: "56,789" },
  { name: "Health", icon: healthIcon, count: "23,876" },
  { name: "IT", icon: itIcon, count: "67,412" },
  { name: "Lifestyle", icon: lifestyleIcon, count: "31,004" },
  { name: "Marketing", icon: markettingIcon, count: "40,112" },
  { name: "Music", icon: musicIcon, count: "18,555" },
  { name: "Office", icon: officeIcon, count: "14,203" },
  { name: "Photography", icon: photographyIcon, count: "9,374" },
];

function TopCategoriesComponent() {
  return (
    <div className="py-16">
      <h1 className="text-center text-primary font-bold text-5xl mb-10">
        Top Category
      </h1>
      <div className=" mx-auto container grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {categories.map((item) => (
          <TopCategoryComponent
            key={item.name}
            count={item.count}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
      <p className=" mt-10 flex flex-wrap justify-center items-center gap-1">
        We have more category & subcategory. {" "}
        <a href="#" className="flex gap-1.5 text-blue-500 items-center">
          {" "}
          Browse all <ArrowRight />{" "}
        </a>
      </p>
    </div>
  );
}

export default TopCategoriesComponent;
