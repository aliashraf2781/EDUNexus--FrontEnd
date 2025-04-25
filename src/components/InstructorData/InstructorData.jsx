import React, {useState} from 'react'
import CourseCard from '../CourseCard/CourseCard'
import StudentRating from '../StudentRating/StudentRating';

function InstructorData({courses, students}) {
    const [activeTab, setActiveTab] = useState("courses");
  return (
    <div className="flex gap-5 mx-43">
        <div className='flex flex-col gap-2.5 border-[1.5px] border-gray-200 p-4 hidden lg:block lg:w-[40%] h-fit'>
            <span className='text-dark text-xl font-semibold'>ABOUT ME</span>
            <p className='text-gray-600 text-sm'>One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup.</p>
            <p className='text-gray-600 text-sm'>He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and make a lot more money in the process. No more begging for vacation days and living from paycheck to paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when he started freelance design. Vako fell in love with the field that gives him the lifestyle of his dreams.</p>
            <p className='text-gray-600 text-sm'>Vako realizes that people who take courses on Udemy want to transform their lives. Today with his courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.</p>
        </div>
        <div className='lg:w-[60%] w-full justify-center flex flex-col gap-8 px-5'>
            <div className='w-full border-b-[1.5px] border-gray-200 flex items-center'>
                <div 
                    className={`text-md lg:px-14 px-10 lg:py-4 py-2 h-full cursor-pointer
                        ${activeTab === "courses" ? "border-b-2 border-primary text-dark" : "text-gray-600"}`
                    }
                    onClick={() => setActiveTab("courses")}
                >
                    Courses
                </div>
                <div 
                    className={`text-md lg:px-14 px-10 lg:py-4 py-2 cursor-pointer h-full
                        ${activeTab === "review" ? "border-b-2 border-primary text-dark" : "text-gray-600"}`
                    }
                    onClick={() => setActiveTab("review")}
                >
                    Review
                </div>
                <div 
                    className={`text-md lg:px-14 px-10 lg:py-4 py-2 cursor-pointer lg:hidden w-fit 
                        ${activeTab === "aboutMe" ? "border-b-2 border-primary text-dark" : "text-gray-600"}`
                    }
                    onClick={() => setActiveTab("aboutMe")}
                >
                    About Me
                </div>
            </div>
            <div className={`${activeTab === 'courses' ? 'flex flex-col gap-5 items-center lg:items-start justify-center' : 'hidden'}`}>
                <span className='text-dark text-xl font-semibold'>Vako Courses <span className='font-normal'>(02)</span></span>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
            <div className={`${activeTab === 'review' ? 'flex flex-col gap-4 justify-center' : 'hidden'}`} >
              <div className='flex justify-between items-center py-2'>
                <span className='text-dark font-semibold text-2xl'>Students Feedback</span>
                <div className='border-[1.5px] border-gray-100 px-3 h-10 flex items-center cursor-pointer w-40'>
                  <select className='text-[15px] rounded-none focus:!outline-none w-full text-gray-600'>
                    <option>5 Star Rating</option>
                    <option>4 Star Rating</option>
                    <option>3 Star Rating</option>
                    <option>2 Star Rating</option>
                    <option>1 Star Rating</option>
                  </select>
                </div>
              </div>
                <div className='flex flex-col gap-4 px-4 items-center'>
                    {students.map((student) => (<StudentRating student={student}/>))}
                </div>
            </div>
            <div className={`${activeTab === 'aboutMe' ? 'flex flex-col gap-5 justify-center' : 'hidden'}`}>
                <span className='text-dark text-xl font-semibold'>ABOUT ME</span>
                <p className='text-gray-600 text-sm'>One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup.</p>
                <p className='text-gray-600 text-sm'>He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and make a lot more money in the process. No more begging for vacation days and living from paycheck to paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when he started freelance design. Vako fell in love with the field that gives him the lifestyle of his dreams.</p>
                <p className='text-gray-600 text-sm'>Vako realizes that people who take courses on Udemy want to transform their lives. Today with his courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.</p>
            </div>
        </div>
    </div>
  )
}

export default InstructorData