import image from "../../../assets/courses images/course5.png";

export default function ActiveCourse() {
  return (
    <div className="p-4">
      <h2 className="font-semibold text-2xl mb-4">Active Course</h2>
      <div className="bg-[#FFEEE8] rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
        <img
          src={image}
          alt="course"
          className="w-full max-w-[300px] h-auto object-cover rounded-lg"
        />
        <div className="flex-1 w-full px-2 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <h3 className="font-semibold text-2xl">UI UX Design</h3>
            <span className="text-lg font-semibold text-[#858383]">100 Mins Done</span>
          </div>
          <div className="w-full h-2.5 bg-[#F1F1F1] rounded mt-2">
            <div className="h-full bg-[#FF6636] rounded w-[70%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
