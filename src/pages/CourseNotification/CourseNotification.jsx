import React from 'react'
import {Layers, Layers2, ArrowRight, Pointer, CircleSmall} from 'lucide-react'

function CourseNotification() {
  return (
    <div className='w-vw min-h-lvh'>
        <div className='my-8 mx-10 lg:mx-20 bg-[#FADCD3] rounded-2xl flex flex-col items-center justify-center'>
            <div className='text-primary text-5xl rounded-t-2xl py-9 font-medium w-full flex items-center justify-center bg-secondary'>
                Updates
            </div>
            <div className='flex flex-col gap-5 px-2 py-5 justify-center lg:mx-40'>
                <div className='lg:py-5 py-1 px-5 lg:px-15 text-dark text-sm lg:w-2/3 '>
                    Stay up-to-date with the latest features released on Serendipity. Our most recent updates are now live, offering you a wide range of new features and enhancements that will enhance your experience. From sleek design changes to powerful new tools, we are continuously working to make our platform even better for you. Discover the latest updates today and take your experience to the next level!
                </div>
                <div className='bg-secondary justify-end lg:justify-start rounded-2xl flex lg:px-15 px-5 py-3'>
                    <div className='absolute lg:left-57 border-1 shadow-lg border-secondary bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
                        <Layers size={18} className='text-secondary'/>
                    </div>
                    <div className='flex flex-col py-4 gap-1'>
                        <span className='text-dark text-lg font-semibold'>Feature</span>
                        <span className='text-primary text-[13px]'>/DESCRIBE <span className='text-gray-600'>RELEASED - APRIL 21, 2023</span></span>
                        <div className='py-3 px-1 lg:w-2/3 text-sm flex flex-col gap-1'>
                            <div className='flex gap-3'>
                                <CircleSmall size={15} fill='black' className='mt-2'/>
                                <div className='text-sm'>Our system has been updated to ensure that it does not return results with banned words.</div>
                            </div>
                            <div className='flex gap-3'>
                                <CircleSmall size={15} fill='black' className='mt-2'/>
                                <div className='text-sm'>We have added an NSFW image filter detector that works similarly to the image prompt filter.</div>
                            </div>                           
                        </div>
                    </div> 
                </div>
                <div className='bg-secondary rounded-2xl justify-end lg:justify-start flex lg:px-15 px-5 py-3'>
                    <div className='absolute lg:left-57 border-1 shadow-lg border-secondary bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
                        <Layers2 size={18} className='text-secondary'/>
                    </div>
                    <div className='flex flex-col py-4 gap-1'>
                        <span className='text-dark text-lg font-semibold'>Course</span>
                        <span className='text-primary text-[13px]'>OPTIMUS WEB DESIGN <span className='text-gray-600'>FIXED - APRIL 21, 2023</span></span>
                        <div className='py-3 px-1 lg:w-2/3 text-sm flex flex-col gap-1'>
                            <div className='flex gap-3'>
                                <CircleSmall size={11} fill='black' className='mt-2'/>
                                <div className='text-sm'>Variations on image prompts without text prompts now work again.</div>
                            </div>
                            <div className='flex gap-3'>
                                <CircleSmall size={11} fill='black' className='mt-2'/>
                                <div className='text-sm'>Using the X reaction emote to delete job works again.</div>
                            </div>
                        </div>
                        <div className='w-full bg-[rgba(49,58,91,0.1)] gap-1 rounded-2xl py-5 lg:px-8 px-3 flex flex-col'>
                            <span className='text-dark text-lg font-medium'>Serendipity Web Design</span>
                            <div className='text-dark lg:w-1/2 text-sm'>
                                Each design will teach different techniques for mobile and web and will have both the User Interface lesson and the Prototyping lesson. Get editable design files for all lessons.
                            </div>
                            <span className='text-dark text-sm font-medium py-4'>Taught by Aksonvady P.</span>
                            <div className='flex gap-2 bg-primary px-3 py-2 w-fit rounded-lg cursor-pointer'>
                                <ArrowRight size={18} color='white'/>
                                <span className='text-white text-sm'>Explore Feature</span>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='bg-secondary rounded-2xl justify-end lg:justify-start flex lg:px-15 px-5 py-3'>
                    <div className='absolute lg:left-57 border-1 shadow-lg border-secondary bg-primary rounded-full w-10 h-10 flex items-center justify-center'>
                        <Pointer size={18} className='text-secondary'/>
                    </div>
                    <div className='flex flex-col py-4 gap-1'>
                        <span className='text-dark text-lg font-semibold'>Bug Fix</span>
                        <span className='text-primary text-[13px]'>VARIATIONS <span className='text-gray-600'>FIXED - APRIL 21, 2023</span></span>
                        <div className='py-3 px-1 lg:w-2/3 text-sm flex flex-col gap-1'>
                            <div className='flex gap-3'>
                                <CircleSmall size={17} fill='black' className='mt-2'/>
                                <div className='text-sm'>Variations on image prompts without text prompts now work again.</div>
                            </div>
                            <div className='flex gap-3'>
                                <CircleSmall size={13} fill='black' className='mt-2'/>
                                <div className='text-sm'>Using the X reaction emote to delete job works again.</div>
                            </div>                           
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseNotification