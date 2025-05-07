import React from 'react'
import CourseContentContainer from '../CourseContentContainer/CourseContentContainer'
import CourseContentTopics from '../CourseContentTopics/CourseContentTopics'
import { Link } from 'react-router';

const Lessons = [
  {
    id: 1,
    title: 'Getting Started',
    lectures: 4,
    duration: '51m',
    isFinished: true,
    isOpened: true,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  },
  {
    id: 2,
    title: 'Secret of Good Design',
    lectures: 52,
    duration: '5h 49m',
    isFinished: false,
    isOpened: false,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  },
  {
    id: 3,
    title: 'Practice Design Like An Artist',
    lectures: 43,
    duration: '53m',
    isFinished: false,
    isOpened: false,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  },
  {
    id: 4,
    title: 'Web Development (webflow)',
    lectures: 137,
    duration: '10h 6m',
    isFinished: false,
    isOpened: false,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  },
  {
    id: 5,
    title: 'Secret of Making Money Freelancing',
    lectures: 21,
    duration: '38m',
    isFinished: false,
    isOpened: false,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  },
  {
    id: 6,
    title: 'Advanced',
    lectures: 39,
    duration: '1h 31m',
    isFinished: false,
    isOpened: false,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  },
  {
    id: 7,
    title: "What's Next",
    lectures: 7,
    duration: '1h 17m',
    isFinished: false,
    isOpened: false,
    topics: [
      {name: '1. What is Webflow?', isPlaying: false, duration: '07:31', done:true},
      {name: '2. Sign up in Webflow', isPlaying: true, duration: '07:31', done:false},
      {name: '3. Teaser of Webflow', isPlaying: false, duration: '07:31', done:false},
      {name: '4. Figma Introduction', isPlaying: false, duration: '07:31', done:false},
    ]
  }
]

function CourseContent() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex items-center justify-between'>
        <span className='text-dark text-2xl font-semibold'>Course Contents</span>
        <span className='text-[#23BD33] text-sm font-semibold'>15% Completed</span>
      </div>
      <div className='w-full h-1 bg-gray-200 my-6 flex'>
        <div className='w-[15%] h-1 bg-[#5183C4]'></div>
      </div>
      {Lessons.map((lesson) => (
        <CourseContentContainer 
          key={lesson.id}
          title={lesson.title}
          lectures={lesson.lectures}
          duration={lesson.duration}
          isFinished={lesson.isFinished}
          open={lesson.isOpened}
        >

          {lesson.topics?.map((topic) => (
            <CourseContentTopics 
              key={topic.name}
              name={topic.name}
              isPlaying={topic.isPlaying}
              duration={topic.duration}
              isSelected={topic.done}
            />
          ))}
          <Link to='/quiz' end>
            <h3 className='py-3 px-7 text-primary underline font-semibold'>
              Quiz
            </h3>
          </Link>
        </CourseContentContainer>
      ))}
    </div>
  )
}

export default CourseContent