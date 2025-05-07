import React from 'react'
import {Crown, Star, UsersRound, CirclePlay, Globe, Facebook, Twitter, Instagram, Youtube, MessageCircleMore} from 'lucide-react'

function InstructorProfileCard() {
  return (
    <div className="flex gap-3 bg-white border-[1.5px] border-secondary p-4 flex-col lg:flex-row">
        <div className='p-2'>
            <img src={`../../../src/assets/courses images/instructor1.png`} alt="instructor" width={140} height={140}/>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-40'>
            <div className='flex flex-col gap-1.5 py-2'>
                <div className='flex gap-3'>
                    <span className='text-dark text-3xl font-semibold'>Vako Shvili</span>
                    <div className='flex gap-1 items-center bg-secondary px-3 text-primary'>
                        <Crown size={18}/>
                        <span className='text-sm font-semibold'>Top Rated</span>
                    </div>
                </div>
                <p className='text-gray-600 text-sm'>
                    Web Designer & Best-Selling Instructor
                </p>
                <div className='flex gap-5 py-2.5 items-center'>
                    <div className='flex gap-[3px] items-center text-[13px]'>
                        <Star size={16} color='#FD8E1F' fill='#FD8E1F'/>
                        <span className='text-dark font-semibold'>4.8</span>
                        <span className='text-gray-600'>(134,633 review)</span>
                    </div>
                    <div className='flex gap-[3px] items-center text-[13px]'>
                        <UsersRound size={16} color='#564FFD'/>
                        <span className='text-dark font-semibold'>430,117</span>
                        <span className='text-gray-600'>students</span>
                    </div>
                    <div className='flex gap-[3px] items-center text-[13px]'>
                        <CirclePlay size={18} color='white' fill='#FF6636'/>
                        <span className='text-dark font-semibold'>7</span>
                        <span className='text-gray-600'>courses</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3.5 mr-2'>
                <div className='flex gap-1 items-center justify-end'>
                    <Globe size={18} color='#342F98'/>
                    <span className='text-[#342F98] text-sm'>https://www.vakoshvili.com</span>
                </div>
                <div className='flex gap-1.5 items-center justify-end'>
                    <div className='p-2 bg-[#F5F7FA] flex justify-center items-center cursor-pointer'>
                        <Facebook size={16} color='#4E5566' fill='#4E5566'/>
                    </div>
                    <div className='p-2 bg-[#F5F7FA] flex justify-center items-center cursor-pointer'>
                        <Twitter size={16} color='#4E5566' fill='#4E5566'/>
                    </div>
                    <div className='p-2 bg-[#F5F7FA] flex justify-center items-center cursor-pointer'>
                        <Instagram size={16} color='#4E5566'/>
                    </div>
                    <div className='p-2 bg-[#F5F7FA] flex justify-center items-center cursor-pointer'>
                        <Youtube size={16} color='#4E5566'/>
                    </div>
                    <div className='p-2 bg-[#F5F7FA] flex justify-center items-center cursor-pointer'>
                        <MessageCircleMore size={16} color='#4E5566'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstructorProfileCard