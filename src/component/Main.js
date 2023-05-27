import React from 'react'
import Spiner from './Main/Spiner'
import TopNav from './Main/TopNav'
import NavBar from './Main/NavBar'
import About from './Main/About'
import Footer from './Main/Footer'
import Destination from './Main/Destination'
import Services from './Main/Services'
import PackageList from './Main/PackageList'
import BookingForm from './Main/BookingForm'

const Main = () => {
  return (
    <>
      {/* <Spiner /> */}
      <TopNav />
      <NavBar />
      <About />
      <Services />
      <Destination />
      <PackageList />
      <BookingForm />
      <Footer />
    </>
  )
}

export default Main