import React from 'react'
import { MessageCircle, Loader } from 'lucide-react'

function LessonComments() {
  return (
    <div className='flex flex-col gap-6 py-8'>
        <span className='text-dark text-2xl font-semibold'>Comments <span className='font-normal'>(154)</span></span>
        <div className='flex items-start gap-1'>
            <div className='w-fit flex flex-col items-center'>
                <img src="src/assets/courses images/avatar1.png" alt="avatar"/>
                <div className='w-0.5 h-18 bg-gray-200 mt-3' ></div>
                <div className='w-8 h-0.5 bg-gray-200 ml-[30px]' ></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='text-dark text-md font-semibold'>Ronald Richards</span>
                    <span className='text-light text-sm'>•</span>
                    <span className='text-light text-xs'>1 week ago</span>
                </div>
                <div className='text-gray-600 text-sm'>
                    Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor. 
                </div>
                <div className='flex gap-1 items-center text-light'>
                    <MessageCircle size={20} />
                    <span className='text-sm'>REPLY</span>
                </div>
                <div className='flex gap-2 items-start'>
                    <img src="src/assets/courses images/avatar4.png" alt="avatar" className='w-10 pt-1.5'/>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                            <span className='text-dark text-md font-semibold'>Kristin Watson</span>
                            <div className='text-white bg-[#564FFD] text-[9px] px-2 py-0.5 mt-1'>ADMIN</div>
                            <span className='text-light text-sm'>•</span>
                            <span className='text-light text-xs'>1 week ago</span>
                        </div>
                        <div className='text-gray-600 text-sm'>
                            Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla. Suspendisse faucibus augue quis dictum egestas. 
                        </div>
                        <div className='flex gap-1 items-center text-light'>
                            <MessageCircle size={20} />
                            <span className='text-sm'>REPLY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-start gap-1'>
            <div className='w-fit flex flex-col items-center'>
                <img src="src/assets/courses images/avatar5.png" alt="avatar"/>
                <div className='w-0.5 h-18 bg-gray-200 mt-3' ></div>
                <div className='w-8 h-0.5 bg-gray-200 ml-[30px]' ></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <span className='text-dark text-md font-semibold'>Theresa Webb</span>
                    <span className='text-light text-sm'>•</span>
                    <span className='text-light text-xs'>3 weeks ago</span>
                </div>
                <div className='text-gray-600 text-sm'>
                    Now i know that i will spent that 5 minutes of my life with pure pleasure
                </div>
                <div className='flex gap-1 items-center text-primary'>
                    <MessageCircle size={20} />
                    <span className='text-sm'>REPLY</span>
                </div>
                <div className='flex justify-between w-full mt-2 items-center gap-3'>
                    <div className='flex gap-3 lg:w-lg px-4 py-2 items-center border border-gray-200'>
                        <MessageCircle size={20} className='text-gray-600'/>
                        <input type="text" placeholder="Write your reply" className='outline-none lg:w-lg'/>
                    </div>
                    <div className='bg-primary text-white py-2.5 px-6 text-sm font-semibold cursor-pointer'>
                        Post Reply
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center bg-secondary w-fit py-2.5 px-8 gap-2 cursor-pointer'>
            <span className=' text-primary text-md font-semibold'>Load More</span>
            <Loader className='text-primary mt-1' size={20}/>
        </div>
    </div>
  )
}

export default LessonComments