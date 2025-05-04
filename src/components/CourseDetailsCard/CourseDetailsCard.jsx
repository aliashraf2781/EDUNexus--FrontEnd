import React from 'react'
import { AlarmClock, Clock3, ChartNoAxesColumnIncreasing, UsersRound, BookText, 
    DollarSign, Trophy, TvMinimal, Layers, Copy, Facebook, Twitter, Mail, MessageCircleCode } from 'lucide-react'
import { useFavorites } from '../../context/FavoriteContext';
import { useCart } from '../../context/CartContext';

function CourseDetailsCard({course}) {
    const { isFavorite, toggleFavorite } = useFavorites();
    const { addToCart, inCart } = useCart();
  return (
    <>
        <div className='w-full h-60 bg-gray-100 pr-27 pt-15 lg:flex flex-1 flex-col gap-4 py-2 pr-l hidden'>
            <div className="flex flex-col flex-1 shadow-lg overflow-hidden bg-white w-sm max-w-sm absolute border border-gray-200 py-3">
                <div className='flex flex-col gap-3 border-b-[1.5px] border-gray-200 py-3 px-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <span className='text-dark text-2xl'>${course[0].price}</span>
                            <span className='text-light text-md line-through'>${course[0].price + (Math.round(course[0].price * 0.56))}</span>
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
                        <span className='text-light text-sm'>{course[0].duration}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-dark text-md gap-2 flex items-center'>
                            <ChartNoAxesColumnIncreasing size={20} className=' text-light'/>
                            <span>Course Grade</span>
                        </div>
                        <span className='text-light text-sm'>{course[0].grade}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-dark text-md gap-2 flex items-center'>
                            <UsersRound size={19} className=' text-light'/>
                            <span>Students Enrolled</span>
                        </div>
                        <span className='text-light text-sm'>{course[0].students}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-dark text-md gap-2 flex items-center'>
                            <BookText size={20} className=' text-light'/>
                            <span>Language</span>
                        </div>
                        <span className='text-light text-sm'>Arabic</span>
                    </div>
                </div>
                <div className='flex flex-col gap-3 border-b-[1.5px] border-gray-200 py-6 px-5'>
                    <div onClick={() => addToCart(course[0])}>
                        {inCart(course[0].id)
                        ? (
                            <button className='bg-white border-2 border-primary text-primary w-full cursor-pointer py-3 px-4 flex items-center font-semibold justify-center gap-2'>
                                Remove From Cart
                            </button> )
                        : (
                            <span className='bg-primary border-2 border-primary text-white cursor-pointer py-3 px-4 flex items-center font-semibold justify-center gap-2'>
                                Add To Cart
                            </span> )
                        } 
                    </div>
                    <button className='bg-white border-2 border-primary text-primary cursor-pointer py-3 px-4 w-full flex items-center font-semibold justify-center gap-2'>
                        Buy Now
                    </button>
                    <div className='flex gap-2 items-center '>
                        <button 
                            className='w-full border border-light py-2 text-sm cursor-pointer'
                            onClick={() => {toggleFavorite(course[0])}}
                        >
                            {isFavorite(course[0].id) ? (
                                <span className='text-[#4484E3] font-bold'>Remove From Favorites</span>) : (
                                <span className='text-dark font-semibold'>Add To Favorites</span>)
                            }  
                        </button>
                        {/* <button className='w-1/2 border border-light py-2 text-dark text-sm font-semibold cursor-pointer'>Gift Course</button> */}
                    </div>
                    <div className='text-light text-sm'>
                        <span className='font-semibold'>Note: </span>
                        all course have 30-days money-back guarantee
                    </div>
                </div>
                <div className='text-[15px] text-light flex flex-col gap-3 border-b-[1.5px] border-gray-200 py-6 px-5'>
                    <div className='text-dark text-md font-semibold'>
                        This course includes:
                    </div>
                    <div className='gap-2 flex items-center'>
                        <Clock3 size={19} className=' text-'/>
                        <span>Lifetime access</span>
                    </div>
                    <div className='gap-2 flex items-center'>
                        <DollarSign size={19} className=' text-'/>
                        <span>30-days money-back guarantee</span>
                    </div>
                    <div className='gap-2 flex items-center'>
                        <BookText size={19} className=' text-'/>
                        <span>Free exercices file & downloadable resources</span>
                    </div>
                    <div className='gap-2 flex items-center'>
                        <Trophy size={19} className=' text-'/>
                        <span>Shareable certificate of completion</span>
                    </div>
                    <div className='gap-2 flex items-center'>
                        <TvMinimal size={19} className=' text-'/>
                        <span>Access on mobile, tablet and TV</span>
                    </div>
                    <div className='gap-2 flex items-center'>
                        <Layers size={19} className=' text-'/>
                        <span>100% online course</span>
                    </div>
                </div>
                <div className='text-[15px] text-light flex flex-col gap-3 py-6 px-5'>
                    <div className='text-dark text-md font-semibold'>
                        Share this course:
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div className='w-1/3 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark cursor-pointer'>
                            <Copy size={14}/>
                            <span className='text-sm'>Copy link</span>
                        </div>
                        <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark cursor-pointer'>
                            <Facebook size={16} fill='dark'/>
                        </div>
                        <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark cursor-pointer'>
                            <Twitter size={16} fill='dark'/>
                        </div>
                        <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark cursor-pointer'>
                            <Mail size={16}/>
                        </div>
                        <div className='w-1/8 flex items-center justify-center gap-1 h-10 bg-gray-100 text-dark cursor-pointer'>
                            <MessageCircleCode size={16}/>
                        </div>
                    </div> 
                </div>

            </div>
        </div>
        <div className='flex lg:hidden'>
            <div className="fixed bottom-2 left-1 right-1 py-2 px-4 bg-white border border-gray-200 shadow-lg z-50 rounded-lg">
                <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <span className="text-2xl font-semibold text-dark">$14.00</span>
                    <span className="text-sm text-light line-through">$26.00</span>
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