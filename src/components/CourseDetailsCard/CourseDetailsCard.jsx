import React from 'react'

import {
  AlarmClock, Clock3, ChartNoAxesColumnIncreasing, UsersRound, BookText,
  NotepadText, DollarSign, Trophy, TvMinimal, Layers, Copy,
  Facebook, Twitter, Mail, MessageCircleCode
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext';

function CourseDetailsCard({ course }) {
  const { inCart, toggleCartItem } = useCart();


  // enroll in course function
  const navigate = useNavigate()
  const enrollInCourse = async () => {
    const response = await fetch(`https://rat-intent-hideously.ngrok-free.app/api/courses/${course._id}/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': true,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    const data = await response.json()
    console.log(data)
    navigate('/student-dashboard')

  }
  return (
    <>
      <div className='w-full h-75 bg-gray-100 pr-27 pt-15 lg:flex flex-1 flex-col gap-4 py-2 pr-l hidden'>
        <div className="flex flex-col flex-1 shadow-lg overflow-hidden bg-white w-sm max-w-sm absolute border border-gray-200 py-3">
          <div className='flex flex-col gap-3 border-b-[1.5px] border-gray-200 py-3 px-5'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <span className='text-dark text-2xl'>${course.price}</span>
                <span className='text-light text-md line-through'>${course.price + 20}</span>
              </div>
              <div className='flex items-center bg-secondary py-1 px-2 gap-1 text-[#4484E3]'>
                <span className='text-sm'>56%</span>
                <span className='text-sm'>OFF</span>
              </div>
            </div>
            <div className='flex gap-1 text-[#4484E3]'>
              <AlarmClock size={18}/>
              <span className='text-sm'>2 days left at this price!</span>
            </div>
          </div>
          <div className='flex flex-col gap-4 border-b-[1.5px] border-gray-200 py-5 px-5'>
            <div className='flex justify-between items-center'>
              <div className='text-dark text-md gap-2 flex items-center'>
                <Clock3 size={19} className=' text-light'/>
                <span>Course Duration</span>
              </div>
              <span className='text-light text-sm'>6 month</span>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-dark text-md gap-2 flex items-center'>
                <ChartNoAxesColumnIncreasing size={20} className=' text-light'/>
                <span>Course Level</span>
              </div>
              <span className='text-light text-sm'>Beginner</span>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-dark text-md gap-2 flex items-center'>
                <UsersRound size={19} className=' text-light'/>
                <span>Students Enrolled</span>
              </div>
              <span className='text-light text-sm'>{course.enrolledStudents.length}</span>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-dark text-md gap-2 flex items-center'>
                <BookText size={20} className=' text-light'/>
                <span>Language</span>
              </div>
              <span className='text-light text-sm'>English</span>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-dark text-md gap-2 flex items-center'>
                <NotepadText size={20} className=' text-light'/>
                <span>Subtitle Language</span>
              </div>
              <span className='text-light text-sm'>English</span>
            </div>
          </div>

          <div className='flex flex-col gap-3 border-b-[1.5px] border-gray-200 py-6 px-5'>
            <div onClick={() => toggleCartItem(course)}>
              {inCart(course._id) ? (
                <button className="bg-white border-2 border-primary text-primary w-full cursor-pointer py-3 px-4 flex items-center font-semibold justify-center gap-2">
                  Remove From Cart
                </button>
              ) : (
                <span className="bg-primary border-2 border-primary text-white cursor-pointer py-3 px-4 flex items-center font-semibold justify-center gap-2">
                  Add To Cart
                </span>
              )}
            </div>

            {/* <Link to='/course-lesson'> */}
              <button onClick={enrollInCourse} className='bg-white border-2 border-primary text-primary cursor-pointer py-3 px-4 w-full flex items-center font-semibold justify-center gap-2'>
                Buy Now
              </button>
            {/* </Link> */}

            {/* <div className='flex gap-2 items-center '>
              <button className='w-1/2 border border-light py-2 text-dark text-sm font-semibold cursor-pointer'>Add To Wishlist</button>
              <button className='w-1/2 border border-light py-2 text-dark text-sm font-semibold cursor-pointer'>Gift Course</button>
            </div> */}
            <div className='text-light text-sm'>
              <span className='font-semibold'>Note: </span>
              all courses have 30-day money-back guarantee
            </div>
          </div>

          <div className='text-[15px] text-light flex flex-col gap-3 border-b-[1.5px] border-gray-200 py-6 px-5'>
            <div className='text-dark text-md font-semibold'>
              This course includes:
            </div>
            <div className='gap-2 flex items-center'><Clock3 size={19}/><span>Lifetime access</span></div>
            <div className='gap-2 flex items-center'><DollarSign size={19}/><span>30-days money-back guarantee</span></div>
            <div className='gap-2 flex items-center'><BookText size={19}/><span>Free resources</span></div>
            <div className='gap-2 flex items-center'><Trophy size={19}/><span>Certificate of completion</span></div>
            <div className='gap-2 flex items-center'><TvMinimal size={19}/><span>Access on all devices</span></div>
            <div className='gap-2 flex items-center'><NotepadText size={19}/><span>English subtitles</span></div>
            <div className='gap-2 flex items-center'><Layers size={19}/><span>100% online course</span></div>
          </div>
          <div className='text-[15px] text-light flex flex-col gap-3 py-6 px-5'>
            {/* <div className='text-dark text-md font-semibold'>Share this course:</div> */}
            {/* <div className='flex gap-1 items-center'>
              <div className='w-1/3 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark'><Copy size={14}/><span className='text-sm'>Copy link</span></div>
              <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark'><Facebook size={16}/></div>
              <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark'><Twitter size={16}/></div>
              <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark'><Mail size={16}/></div>
              <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark'><MessageCircleCode size={16}/></div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className='flex lg:hidden'>
        <div className="fixed bottom-2 left-1 right-1 py-2 px-4 bg-white border border-gray-200 shadow-lg z-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-dark">${course.price}</span>
              <span className="text-sm text-light line-through">${course.price + 20}</span>
            </div>
            <button className='bg-primary text-white cursor-pointer py-2 px-4 flex items-center font-semibold justify-center gap-2'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetailsCard
