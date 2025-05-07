import React, { useEffect, useState } from 'react'
import {ArrowLeft, FolderOpen, CirclePlay, Clock3} from 'lucide-react'
import LessonDetails from '../../components/LessonDetails/LessonDetails'
import CourseContent from '../../components/CourseContent/CourseContent'
import LessonComments from '../../components/LessonComments/LessonComments'
// import AIAssistant from '../../components/AIAssistant/AIAssistant'
import { getLessons } from '../../api/courses'

function CourseLesson() {
    const [lesson, setLesson] = useState([]);
    const [finished , setFinished] = useState(false);
     useEffect(() => {
        const fetchData = async () => {
          const allLessons = await getLessons();
          setLesson(allLessons.data[0]);
        };
        fetchData();
      }, []);

  return (
    <div className='w-vw min-h-lvh'>
        <div className='flex flex-col gap-3'>
           <div className='w-full px-6 py-3 bg-gray-200 flex flex-col lg:flex-row gap-3 justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='py-2 rounded-full bg-white w-10 h-10 flex items-center justify-center cursor-pointer'>
                        <ArrowLeft size={17} className='text-dark'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='tetx-dark text-md'>{lesson.courseTitle}</span>
                        <div className='flex gap-3 items-center'>
                            <div className='flex justify-center gap-1 items-center'>
                                <FolderOpen className='w-4 h-4 text-primary' size={14}/>
                                <span className='text-gray-600 text-[14px]'>{lesson.sections} Sections</span>
                            </div>
                            <div className='flex justify-center gap-1 items-center'>
                                <CirclePlay className='w-4 h-4 text-[#564FFD]' size={14}/>
                                <span className='text-gray-600 text-[14px]'>{lesson.lectures} Lectures</span>
                            </div>
                            <div className='flex justify-center gap-1 items-center'>
                                <Clock3 className='w-4 h-4 text-[#FD8E1F]' size={14}/>
                                <span className='text-gray-600 text-[14px]'>{lesson.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='bg-secondary text-primary py-2 px-4 text-sm font-semibold cursor-pointer'>
                        Write A Review
                    </div>
                    <div className='bg-primary text-white py-2 px-4 text-sm font-semibold cursor-pointer'>
                        Next Lecture
                    </div>
                </div>
            </div>
            <div className='px-6 py-3 w-full flex gap-4'>
                <div className='w-full lg:w-[60%]'>
                    <LessonDetails lesson={lesson} />
                    <LessonComments />
                </div>
                <div className='hidden lg:block lg:w-[40%]'>
                    <CourseContent />
                </div>
                {/* <AIAssistant /> */}
            </div>
        </div>
        
    </div>
  )
}

export default CourseLesson