import React from 'react'
import CourseData from '../components/CourseData/CourseData'
import CourseDetailsCard from '../components/CourseDetailsCard/CourseDetailsCard'
import Trailer from '../components/Trailer/Trailer'

function CourseDetails() {
  return (
    <div className="container grid grid-cols-5">
        <div className="md:col-span-3 flex flex-col gap-4">
          <CourseData />
          <Trailer />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <CourseDetailsCard />
        </div>
    </div>
  )
}

export default CourseDetails