import React from 'react'
import { Star } from 'lucide-react'

function CourseRating() {
  return (
    <div className='w-full flex-col xl:flex-row flex xl:items-start my-2 mx-1 xl:gap-2 gap-4 items-center'>
        <div className='xl:w-1/4 w-40 p-4 border border-gray-200 h-35 flex flex-col gap-3 items-center justify-center'>
            <span className='text-dark font-semibold text-4xl py-1'>4.8</span>
            <div className='flex gap-1 items-center'>
                <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
                <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
                <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
                <Star size={15} color='#FD8E1F' fill='#FD8E1F'/>
                <div className="relative w-[15px] h-[15px] inline-block">
                    <Star size={15} color="#FD8E1F" fill="transparent" />
                    <Star
                        size={15}
                        color="#FD8E1F"
                        fill="#FD8E1F"
                        className="absolute top-0 left-0"
                        style={{
                        clipPath: "inset(0 50% 0 0)"
                        }}
                    />
                </div>
            </div>
            <span className='text-dark text-md'>Course Rating</span>
        </div>
        <div className='xl:w-3/4 w-full md:flex flex-col px-2 h-35 justify-between hidden'>
            <div className='w-full flex justify-evenly items-center gap-2'>
                <div className='flex gap-1 items-center'>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                </div>
                <span className='text-light text-xs'>5 Star Rating</span>
                <div className='w-1/2 flex'>
                    <div className='bg-primary w-[75%] h-1.5'></div>
                    <div className='bg-secondary w-[25%] h-1.5'></div>
                </div>
                <span className='text-dark font-semibold text-xs'>75%</span>
            </div>
            <div className='w-full flex justify-evenly items-center gap-2'>
                <div className='flex gap-1 items-center'>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' />
                </div>
                <span className='text-light text-xs'>4 Star Rating</span>
                <div className='w-1/2 flex'>
                    <div className='bg-primary w-[21%] h-1.5'></div>
                    <div className='bg-secondary w-[79%] h-1.5'></div>
                </div>
                <span className='text-dark font-semibold text-xs'>21%</span>
            </div>
            <div className='w-full flex justify-evenly items-center gap-2'>
                <div className='flex gap-1 items-center'>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                </div>
                <span className='text-light text-xs'>3 Star Rating</span>
                <div className='w-1/2 flex'>
                    <div className='bg-primary w-[3%] h-1.5'></div>
                    <div className='bg-secondary w-[97%] h-1.5'></div>
                </div>
                <span className='text-dark font-semibold text-xs'>3%</span>
            </div>
            <div className='w-full flex justify-evenly items-center gap-2'>
                <div className='flex gap-1 items-center'>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                </div>
                <span className='text-light text-xs'>2 Star Rating</span>
                <div className='w-1/2 flex'>
                    <div className='bg-primary w-[1%] h-1.5'></div>
                    <div className='bg-secondary w-[99%] h-1.5'></div>
                </div>
                <span className='text-dark font-semibold text-xs'>1%</span>
            </div>
            <div className='w-full flex justify-evenly items-center gap-2'>
                <div className='flex gap-1 items-center'>
                    <Star size={14} color='#FD8E1F' fill='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                    <Star size={14} color='#FD8E1F'/>
                </div>
                <span className='text-light text-xs'>1 Star Rating</span>
                <div className='w-1/2 flex'>
                    <div className='bg-primary w-[0.5%] h-1.5'></div>
                    <div className='bg-secondary w-[99.5%] h-1.5'></div>
                </div>
                <span className='text-dark font-semibold text-xs'>&lt;1%</span>
            </div>
        </div>
    </div>
  )
}

export default CourseRating