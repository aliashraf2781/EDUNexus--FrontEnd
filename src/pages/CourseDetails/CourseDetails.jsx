import React, { useState, useEffect } from 'react'
import {MoveRight, Check, Loader, ArrowRight} from 'lucide-react'
import CourseData from '../../components/CourseData/CourseData'
import CourseDetailsCard from '../../components/CourseDetailsCard/CourseDetailsCard'
import Trailer from '../../components/Trailer/Trailer'
import CourseRating from '../../components/CourseRating/CourseRating'
import Curriculum from '../../components/Curriculum/Curriculum'
import StudentRating from '../../components/StudentRating/StudentRating'
import InstructorCard from '../../components/InstructorCard/InstructorCard'
import SmallCourseCard from '../../components/SmallCourseCard/SmallCourseCard'
import { useParams, useNavigate } from 'react-router'
import { getInstructors, getStudents, getRelatedCourses } from '../../api/courses'

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [instructors, setInstructors] = useState([])
  const [students, setStudents] = useState([])
  const [relatedCourses, setRelatedCourses] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`http://localhost:3001/courses?id=${id}`);
      const data = await response.json();
      setCourse(data);
    };
    fetchCourse();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const instructorsData = await getInstructors()
      const studentsData = await getStudents()
      const relatedCoursesData = await getRelatedCourses();
      setInstructors(instructorsData.data)
      setStudents(studentsData.data)
      setRelatedCourses(relatedCoursesData.data)
    }
    fetchData()
  }, [])
  if (!course) return <div>Loading...</div>;

  return (
    <div className='w-vw min-h-lvh'>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3 grid-cols-1 flex flex-col gap-4">
          <CourseData course={course}/>
          <div className='flex flex-col gap-4 w-full items-center lg:pl-27 px-4 pb-8'>
            <Trailer course={course}/>
            <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
              <h2 className='text-dark font-semibold text-2xl py-2'>Course instructor <span className='font-normal'>(02)</span></h2>
              {instructors.map((instructor) => (
                <InstructorCard instructor={instructor}/>
              ))}
            </div>
            <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
              <h2 className='text-dark font-semibold text-2xl py-2'>Course Rating</h2>
              <CourseRating/>
            </div>
            <Curriculum/>
            <div className='flex flex-col'>
              <span className='text-dark font-semibold text-xl'>Quiz</span>
              <div className='flex flex-col p-4 gap-7'>
                  <p className='text-gray-600 text-[14px]'>Congratulations on completing the course! Reflect on what you've learned and take the quiz to test your knowledge. Write down key takeaways, insights, or any questions you still have before starting the quiz.</p>
                  <div className='flex items-center bg-secondary py-2.5 px-4 w-42 gap-2 justify-center cursor-pointer'>
                      <span className='text-primary text-md font-semibold'>Go To Quiz</span>
                      <MoveRight className='text-primary mt-1' size={20}/>
                  </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 w-full p-6 bg-secondary'>
              <span className='text-primary font-semibold text-[22px]'>What you will learn in this course</span>
              <div className='flex flex-col'>
                <div className='flex gap-2'>
                  <div className='flex w-1/2 gap-2 py-2 h-fit'>
                    <div className='flex items-center justify-center w-4 h-4 bg-primary rounded-full p-0.5 mt-1'>
                      <Check color='white'/>
                    </div>
                    <div className='text-gray-600 text-[13px]'>
                      You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.
                    </div>
                  </div>
                  <div className='flex w-1/2 gap-2 py-2 h-fit'>
                    <div className='flex items-center justify-center w-4 h-4 bg-primary rounded-full p-0.5 mt-1'>
                      <Check color='white'/>
                    </div>
                    <div className='text-gray-600 text-[13px]'>
                      You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, NASA and more.
                    </div>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='flex w-1/2 gap-2 py-2 h-fit'>
                    <div className='flex items-center justify-center w-4 h-4 bg-primary rounded-full p-0.5 mt-1'>
                      <Check color='white'/>
                    </div>
                    <div className='text-gray-600 text-[13px]'>
                      You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.
                    </div>
                  </div>
                  <div className='flex w-1/2 gap-2 py-2 h-fit'>
                    <div className='flex items-center justify-center w-4 h-4 bg-primary rounded-full p-0.5 mt-1'>
                      <Check color='white'/>
                    </div>
                    <div className='text-gray-600 text-[13px]'>
                      Learn to use Python professionally, learning both Python 2 and Python 3!
                    </div>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='flex w-1/2 gap-2 py-2 h-fit'>
                    <div className='flex items-center justify-center w-4 h-4 bg-primary rounded-full p-0.5 mt-1'>
                      <Check color='white'/>
                    </div>
                    <div className='text-gray-600 text-[13px]'>
                      Understand how to use both the Jupyter Notebook and create .py files
                    </div>
                  </div>
                  <div className='flex w-1/2 gap-2 py-2 h-fit'>
                    <div className='flex items-center justify-center w-4 h-4 bg-primary rounded-full p-0.5 mt-1'>
                      <Check color='white'/>
                    </div>
                    <div className='text-gray-600 text-[13px]'>
                      Get an understanding of how to create GUIs in the Jupyter Notebook system!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col pt-8 gap-3'>
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
              {students.map((student) => (<StudentRating student={student}/>))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <CourseDetailsCard course={course}/>
        </div>   
      </div>
      <div className="w-full">
        <div className="max-w-screen-xl my-3 ">
          <hr className='border-[1.3px] border-gray-200'/>
          <div className='flex justify-center items-center bg-secondary w-fit top-[-15px] relative ml-27 py-2.5 px-8 gap-2 cursor-pointer'>
            <span className=' text-primary text-md font-semibold'>Load More</span>
            <Loader className='text-primary mt-1' size={20}/>
          </div>
          <div className='md:px-27 px-7 py-7 flex flex-col gap-6'>
            <div className='flex gap-3 justify-between items-start'>
              <span className='text-primary text-4xl font-semibold'>Related Courses</span>
              <div className='flex justify-center items-center bg-secondary w-fit py-2.5 px-3 lg:px-8 gap-2 cursor-pointer' onClick={() => navigate('/courses')}>
                <span className=' text-primary text-md font-semibold hidden md:block'>View All</span>
                <ArrowRight className='text-primary mt-1' size={20}/>
              </div>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>
              {relatedCourses.map((course) => (<SmallCourseCard course={course}/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails