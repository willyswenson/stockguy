import React, { useState } from 'react'
import Footer from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import NavBar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
// import Stock from '../components/SearchBar/Stock';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [searchguy, setSearchguy] = useState("")
    const setter = () => {
      setSearchguy(searchguy)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <SearchBar searchguy={searchguy} setter={setter} />
        {/* <Stock /> */}
        <Footer />


    </>
  )
}

export default Home