import React, { useState, useEffect} from 'react'
import InstructorProfileCard from '../../components/InstructorProfileCard/InstructorProfileCard'
import InstructorData from '../../components/InstructorData/InstructorData'
import { getAllCourses, getStudents } from '../../api/courses'
import { useParams } from 'react-router'

function InstructorProfile() {
  const { id } = useParams();
  const [instructor, setInstructor] = useState([]);
  const [courses, setCourses] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchInstructor = async () => {
      const response = await fetch(`http://localhost:3001/instructors?id=${id}`);
      const data = await response.json();
      setInstructor(data);
    };
    fetchInstructor();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await getAllCourses();
      const studentsData = await getStudents();
      setCourses(coursesData.data)
      setStudents(studentsData.data)
    }
    fetchData()
  }, [])
  
  const instructorCourses = courses.find((course) => (course.instructor_id == instructor[0]?.id))
  const instructorCoursesData = []
  instructorCoursesData.push(instructorCourses)
  console.log(instructorCoursesData)
  return (
    <div className=''>
      <div className='w-full  bg-white flex pt-15 justify-center'>
        <div className="w-[100%] mx-43 flex flex-col gap-7 items-center mb-6">
          <InstructorProfileCard instructor={instructor[0]}/>
          <InstructorData courses={instructorCoursesData} students={students} instructor={instructor[0]}/>
        </div>
      </div>
    </div>
  )
}

export default InstructorProfile