import React, { useState, useEffect} from 'react'
import InstructorProfileCard from '../../components/InstructorProfileCard/InstructorProfileCard'
import InstructorData from '../../components/InstructorData/InstructorData'

function InstructorProfile() {
  const [courses, setCourses] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const coursesResponse = await fetch('http://localhost:3001/courses')
      const studentsResponse = await fetch('http://localhost:3001/students')
      const coursesData = await coursesResponse.json()
      const studentsData = await studentsResponse.json()
      setCourses(coursesData)
      setStudents(studentsData)
    }
    fetchData()
  }, [])

  return (
    <div className='w-vw '>
        <div className='w-full h-50 bg-secondary flex pt-15 justify-center'>
            <div className="w-[100%] flex flex-col gap-7 items-center mb-6">
                <InstructorProfileCard />
                <InstructorData courses={courses} students={students}/>
            </div>
        </div>
    </div>
  )
}

export default InstructorProfile