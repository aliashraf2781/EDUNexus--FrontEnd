import React from 'react'
import {SkipBack, Pause, SkipForward, Volume2, Captions, Settings, Maximize, FileText} from 'lucide-react'
import createdBy1  from '../../assets/courses images/createdBy1.png';
import createdBy2  from '../../assets/courses images/createdBy2.png';
import avatar1  from '../../assets/courses images/avatar1.png';
import avatar2  from '../../assets/courses images/avatar2.png';
import instructor1  from '../../assets/courses images/instructor1.png';

function LessonDetails({ lesson }) {
  return (
    <div className='flex flex-col gap-4'>
        {/* <div style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent), url("src/assets/courses images/lessonImage.png")', backgroundSize: 'cover'}} className='relative w-full h-[250px] lg:h-[400px]'>
            <div className='flex flex-col bottom-0 absolute w-full px-3 py-2 gap-2'>
                <div className='w-full h-[2.5px] bg-light flex'>
                    <div className='w-[30%] h-[2.5px] bg-primary'></div>
                    <div className='w-[20%] h-[2.5px] bg-gray-300'></div>
                </div>
                <div className='w-full py-1 flex justify-between gap-2'>
                    <div className='flex gap-3 items-center'>
                        <div className='flex items-center gap-1.5'>
                            <SkipBack size={15} color='white' fill='white'/>
                            <Pause size={15} color='white' fill='white'/>
                            <SkipForward size={15} color='white' fill='white'/>
                        </div>
                        <div className='text-white text-xs'>
                            1:25 / 9:15
                        </div>

                    </div>
                    <div className='flex items-center gap-2'>
                        <Volume2 size={17} color='white'/>
                        <Captions size={17} color='white'/>
                        <Settings size={17} color='white'/>
                        <Maximize size={17} color='white'/>
                    </div>
                </div>
            </div>
        </div> */}
         {/* add video  */}
         <div className=' w-full pb-5'>
            <video className='w-full ' src="https://res.cloudinary.com/dksy9zof4/video/upload/v1745369509/cxlffkcrvo1ebq70lq6h.mp4" controls></video>
         </div>
        <span className='text-dark text-2xl font-semibold'>{lesson.lessonTitle}</span>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                   <div className="w-7 h-7 rounded-full relative">
                        <img src={createdBy2} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 rounded-full relative ml-[-20px]">
                        <img src={createdBy1} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 rounded-full relative ml-[-20px]">
                        <img src={avatar1} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 rounded-full relative ml-[-20px]">
                        <img src={avatar2} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 rounded-full relative ml-[-20px]">
                        <img src={instructor1} alt="Avatar" className="w-full h-full object-cover" />
                    </div> 
                </div>
                <div className='flex flex-col'>
                    <span className='text-dark text-sm font-semibold'>{lesson.studentsWatching}</span>
                    <span className='text-gray-600 text-xs'>Students Watching</span>
                </div>
            </div>
            <div className='flex items-end gap-3'>
                <div className='flex gap-1 items-center'>
                    <span className='text-xs text-gray-600'>Last updated:</span>
                    <span className='text-xs text-dark'>{lesson.lastUpdated}</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <span className='text-xs text-gray-600'>Comments</span>
                    <span className='text-xs text-dark'>{lesson.comments}</span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-start w-full border-y border-gray-200 lg:text-sm text-xs'>
            <div className='text-gray-600 flex lg:py-3 py-2 lg:px-6 px-2 justify-center font-semibold lg:hidden cursor-pointer'>Course Content</div>
            <div className='text-dark border-b-3 border-[#4484E3] flex lg:py-3 py-2 lg:px-6 px-2 justify-center font-semibold cursor-pointer'>Description</div>
            <div className='text-gray-600 flex lg:py-3 py-2 lg:px-6 px-2 justify-center font-semibold cursor-pointer'>Lectures Notes</div>
            <div className='text-gray-600 flex gap-2 lg:py-3 py-2 lg:px-6 px-2 justify-center items-center font-semibold cursor-pointer'>
                Attach File
                <span className='text-xs font-semibold lg:px-2 px-1 lg:py-1 py-0.5 bg-secondary text-[#3258B4]'>
                    01
                </span>
            </div>
            <div className='text-gray-600 flex lg:py-3 py-2 lg:px-6 px-2 justify-center font-semibold cursor-pointer'>Comments</div>
        </div>
        <div className='flex flex-col gap-4 py-4'>
            <span className='text-dark text-2xl font-semibold'>Lecture Description</span>
            <div className='text-gray-600 text-sm leading-normal'>
                {lesson.lectureDescription}
            </div>
        </div>
        <div className='flex flex-col gap-4 py-4'>
            <span className='text-dark text-2xl font-semibold'>Lecture Summary</span>
            <div className='text-gray-600 text-sm leading-normal'>
                {/* {lesson.lectureSummary} */}
                1.  React Fundamentals: Understand React concepts for building complex user interfaces. 2.  Modern Web Applications: Build modern and powerful web applications using React. 3.  Industry-Standard Libraries: Leverage libraries like Redux Toolkit, React Router, React Query, Tailwind CSS, and styled-components. 4.  Project-Based Learning: Focus on real-world projects, practice exercises, and challenges. 5.  Deep Dive into React Internals: Gain a thorough understanding of React's inner workings. 6.  Code Comprehension:  Comprehend what your code does to gain confidence in react. 7.  Modern Best Practices: Explore and implement modern best practices in React development. 8.  Advanced Patterns: Learn and utilize advanced patterns used by senior React engineers.
            </div>
        </div>
        <div className='flex flex-col gap-4 py-2'>
            <span className='text-dark text-2xl font-semibold'>Attach Files <span className='font-normal'>{lesson.attachFiles}</span></span>
            <div className='flex bg-gray-200 w-full py-4 px-5 justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <FileText size={50} color='#5183C4'/>
                    <div className='flex flex-col gap-0.5'>
                        <span className='text-dark text-md'>{lesson.fileName}</span>
                        <span className='text-gray-600 text-sm'>{lesson.fileSize}</span>
                    </div>
                </div>
                <div className='bg-primary text-white py-3 px-5 text-sm font-semibold cursor-pointer'>
                    Download File
                </div>
            </div>
        </div>
    </div>
  )
}

export default LessonDetails