import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import AboutComponent from '../../components/aboutcomponent/aboutcomponent'
import Achievements from '../../components/achievements/achievements'

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutComponent />
      <Achievements />
      <Footer />
    </div>
  )
}

export default about
