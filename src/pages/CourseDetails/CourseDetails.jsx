import React, { useState, useEffect } from 'react'
import { ArrowRight} from 'lucide-react'
import CourseData from '../../components/CourseData/CourseData'
import CourseDetailsCard from '../../components/CourseDetailsCard/CourseDetailsCard'
import Trailer from '../../components/Trailer/Trailer'
import SmallCourseCard from '../../components/SmallCourseCard/SmallCourseCard'
import { useParams, useNavigate } from 'react-router'
import { getInstructors, getStudents, getRelatedCourses, getAllSubjects, getAllInstructors } from '../../api/courses'

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [instructors, setInstructors] = useState([])
  const [students, setStudents] = useState([])
  const [subjects, setSubjects] = useState([])
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
      const relatedCoursesData = await getRelatedCourses()
      const allSubjects = await getAllSubjects()
      const allInstructors = await getAllInstructors()
      setInstructors(allInstructors.data)
      setSubjects(allSubjects.data)
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
          <CourseData 
            course={course} 
            subject={subjects.find((subject) => (subject.id == course[0].subject_id))?.name}
            instructor={instructors.find((instructor) => (instructor.id == course[0].instructor_id))}
          />
          <div className='flex flex-col gap-4 w-full items-center lg:pl-27 px-4 pb-8'>
            <Trailer 
              course={course}
              instructor={instructors.find((instructor) => (instructor.id == course[0].instructor_id))}
              students={students}
            />
          
            {/* <div className='flex flex-col'>
              <span className='text-dark font-semibold text-xl'>Quiz</span>
              <div className='flex flex-col p-4 gap-7'>
                  <p className='text-gray-600 text-[14px]'>Congratulations on completing the course! Reflect on what you've learned and take the quiz to test your knowledge. Write down key takeaways, insights, or any questions you still have before starting the quiz.</p>
                  <div className='flex items-center bg-secondary py-2.5 px-4 w-42 gap-2 justify-center cursor-pointer'>
                      <span className='text-primary text-md font-semibold'>Go To Quiz</span>
                      <MoveRight className='text-primary mt-1' size={20}/>
                  </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <CourseDetailsCard course={course}/>
        </div>   
      </div>
      <div className="w-full">
        <div className="max-w-screen-xl my-3 ">
          <div className='md:px-27 px-7 py-7 flex flex-col gap-6'>
            <div className='flex gap-3 justify-between items-start'>
              <span className='text-primary text-4xl font-semibold'>Related Courses</span>
              <div className='flex justify-center items-center bg-secondary w-fit py-2.5 px-3 lg:px-8 gap-2 cursor-pointer' onClick={() => navigate('/courses')}>
                <span className=' text-primary text-md font-semibold hidden md:block'>View All</span>
                <ArrowRight className='text-primary mt-1' size={20}/>
              </div>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>
              {relatedCourses.map((course) => (<SmallCourseCard course={course} subject={subjects.find((subject) => (subject.id == course.subject_id))?.name}/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails