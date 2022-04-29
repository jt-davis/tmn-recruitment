import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSectionTest from '../components/InfoSection/InfoSectionTest.js';
import InfoSectionRoles from '../components/InfoSection/InfoSectionRoles.js';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSectionRoles {...homeObjTwo}/>
            {/* <InfoSection {...homeObjThree} /> */}
            <Services />
            <InfoSectionTest {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;