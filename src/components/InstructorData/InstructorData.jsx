import React, {useState, useEffect} from 'react'
import SmallCourseCard from '../SmallCourseCard/SmallCourseCard'
import StudentRating from '../StudentRating/StudentRating';
import { getAllSubjects } from '../../api/courses';

function InstructorData({courses, students, instructor}) {
    const [activeTab, setActiveTab] = useState("courses");
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const allSubjects = await getAllSubjects();
            setSubjects(allSubjects.data);
        };
        fetchData();
    }, []);
    
    let subject = ''
  return (
    <div className="flex gap-5">
        <div className='md:flex flex-col gap-2.5 border-[1.5px] border-gray-200 p-4 hidden lg:block lg:w-[40%] h-fit'>
            <span className='text-dark text-xl font-semibold my-2'>ABOUT ME</span>
            <p className='text-gray-600 text-sm'>{instructor?.bio}</p>
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
                <span className='text-dark text-xl font-semibold'>{instructor?.name} Courses <span className='font-normal'>({instructor?.numberOfCourses})</span></span>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {courses.map((course) => (
                        subject = subjects.find((subject) => subject?.id == course?.subject_id)?.name,
                        <SmallCourseCard course={course} subject={subject}/>
                    ))}
                </div>
            </div>
            <div className={`${activeTab === 'review' ? 'flex flex-col gap-4 justify-center' : 'hidden'}`} >
              <div className='flex justify-between items-center py-2'>
                <span className='text-dark font-semibold text-2xl'>Students Feedback</span>
              </div>
                <div className='flex flex-col gap-4 px-4 items-center'>
                    {students.map((student) => (<StudentRating student={student}/>))}
                </div>
            </div>
            <div className={`${activeTab === 'aboutMe' ? 'flex flex-col gap-5 justify-center' : 'hidden'}`}>
                <span className='text-dark text-xl font-semibold my-2'>ABOUT ME</span>
                <p className='text-gray-600 text-sm'>{instructor?.bio}</p>
            </div>
        </div>
    </div>
  )
}

export default InstructorData