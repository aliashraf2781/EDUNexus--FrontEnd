import React from 'react'
import tailor from '../../assets/courses images/trailer.png'
import {ArrowRight} from 'lucide-react'

function trailer() {
  return (
    <div className='flex flex-col'>
      <img src={tailor} alt="tailor" width={300} height={200} className='w-full' />
      <div className='flex justify-between items-center w-full border-b border-gray-200 h-10 text-sm mt-4 cursor-pointer'>
        <div className='text-dark border-b-3 border-[#4484E3] h-full flex pb-4 w-1/4 justify-center font-semibold'>Overview</div>
        <div className='text-dark h-full flex pb-4 w-1/4 justify-center'>Curriculum</div>
        <div className='text-dark h-full flex pb-4 w-1/4 justify-center'>Instructor</div>
        <div className='text-dark h-full flex pb-4 w-1/4 justify-center'>Review</div>
      </div>
      <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-sm'>
        <h2 className='text-dark font-semibold text-2xl py-4'>Description</h2>
        <p>
          It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.
        </p>
        <p>
          I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated. Like most subjects taught in the universities. But I don't like complicated. I like easy. I like life hacks. I like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. I'm an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional. That's how I'm going to teach you Web Design. So you're not demotivated on your way with needless complexity. So you enjoy the process because it's simple and fun. So you can become a Freelance Web Designer in no time.
        </p>
        <p>
          For example, this is a Design course but I don't teach you Photoshop. Because Photoshop is needlessly complicated for Web Design. But people still teach it to web designers. I don't. I teach Figma – a simple tool that is taking over the design world. You will be designing a complete website within a week while others are still learning how to create basic layouts in Photoshop.
        </p>
        <p>
          Second, this is a Development course. But I don't teach you how to code. Because for Web Design coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool that is taking over the web design world. You will be building complex websites within two weeks while others are still learning the basics of HTML & CSS. Third, this is a Freelancing course. But I don't just teach you how to write great proposals. I give you a winning proposal template. When you're done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.
        </p>
      </div>
      <div className='flex flex-col gap-4 w-full py-2 text-gray-500 text-[14px]'>
        <h2 className='text-dark font-semibold text-2xl py-2'>Who this course is for:</h2>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>This course is for those who want to launch a Freelance Web Design career.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Praesent eget consequat elit. Duis a pretium purus.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</p>
        </div>
        <div className='flex items-center gap-2'>
          <ArrowRight size={22} color='#4484E3'/>
          <p>Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.</p>
        </div>
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
    
  )
}

export default trailer