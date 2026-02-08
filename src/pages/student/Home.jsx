import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToAction from '../../components/student/CallToAction'

const Home = () => {
  return (
    // 'items-center' aur 'text-center' yahan se hata diye hain
    <div className='flex flex-col'>
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialSection/>
      <CallToAction/>
    </div>
  )
}

export default Home