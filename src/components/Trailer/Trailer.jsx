import React, { useRef, useState } from 'react'
import InstructorCard from '../../components/InstructorCard/InstructorCard'
import CourseRating from '../../components/CourseRating/CourseRating'
import Curriculum from '../../components/Curriculum/Curriculum'
import StudentRating from '../../components/StudentRating/StudentRating'
import { Check, Play } from 'lucide-react'
import { Link } from 'react-router'

function Trailer({course, instructor, students}) {
  const [activeTab, setActiveTab] = useState('overview');
  const overviewRef = useRef(null);
  const curriculumRef = useRef(null);
  const instructorRef = useRef(null);
  const reviewRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const sectionMap = {
      overview: overviewRef,
      curriculum: curriculumRef,
      instructor: instructorRef,
      review: reviewRef,
    };
    sectionMap[tab]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col'>
      <div className='relative w-full overflow-hidden'>
        <img src={`../../../${course[0].image_url}`} alt="tailor" width={300} height={200} className='w-full' />
        <Link to='/course-lesson' >
          <div className='flex items-center justify-center w-15 h-15 rounded-full bg-white absolute top-1/2 right-1/2 mt-[-22px] mr-[-22px] cursor-pointer transition-all duration-300 hover:scale-110'>
            <Play size={25} color='#ff6636' fill='#ff6636'/>
          </div>
        </Link>
      </div>
      <div className='flex justify-between items-center w-full border-b border-gray-200 h-10 text-sm mt-4 cursor-pointer'>
        {['overview', 'instructor', 'curriculum', 'review'].map((tab) => (
          <div
            key={tab}
            className={`text-dark h-full flex pb-4 w-1/4 justify-center font-semibold ${
              activeTab === tab ? 'border-b-4 border-[#4484E3]' : ''
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>
      <div ref={overviewRef}>
        <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-sm'>
          <h2 className='text-dark font-semibold text-2xl pt-4'>Description</h2>
          <p>
            {course[0].longDescription}
          </p>
        </div>
        <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
          <h2 className='text-dark font-semibold text-2xl py-2'>Course requirements</h2>
          <ul className='list-disc pl-5 text-sm/relaxed'>
            <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
            <li>Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.</li>
            <li>Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.</li>
            <li>Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.</li>
            <li>Praesent eget consequat elit. Duis a pretium purus.</li>
            <li>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.</li>
            <li>This course is for those who want to launch a Freelance Web Design career.</li>
          </ul>
        </div>
      </div>
      <div ref={instructorRef} >
        <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
          <h2 className='text-dark font-semibold text-2xl py-2'>Course instructor</h2>
          <InstructorCard instructor={instructor}/>
        </div>
        <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
          <h2 className='text-dark font-semibold text-2xl py-2'>Course Rating</h2>
          <CourseRating course={course[0]}/>
        </div>
      </div>
      <div ref={curriculumRef}>
        <Curriculum/>
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
      </div>
      <div ref={reviewRef} className='flex flex-col pt-8 gap-3'>
        <div className='flex justify-between items-center py-2'>
          <span className='text-dark font-semibold text-2xl'>Students Feedback</span>
        </div>
        {students.map((student) => (<StudentRating student={student}/>))}
      </div>
    </div>
    
  )
}

export default Trailer