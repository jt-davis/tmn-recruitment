import React from 'react';
import Testimonials from '../components/Testimonials';
import InfoSectionTestimonials from '../components/InfoSection/InfoSectionTestimonials';
import InfoSectionTestimonials2 from '../components/InfoSection/InfoSectionTestimonials2';
import { homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const TestimonialsPage = () => {
    return (
        <>
            <ScrollToTop />
            <Testimonials/>
            <InfoSectionTestimonials {...homeObjFour} />
            <InfoSectionTestimonials2 {...homeObjFive}/>
            <Footer />
        </>
    );
};

export default TestimonialsPage;