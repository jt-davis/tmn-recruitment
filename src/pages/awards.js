import React from 'react';
import Awards from '../components/Awards';
import ScrollToTop from '../components/ScrollToTop';
import InfoSectionAwards from '../components/InfoSection/InfoSectionAwards';
import { homeObjEleven } from '../components/InfoSection/Data';
import Footer from '../components/Footer';

const AwardsPage = () => {
    return (
        <>
            <ScrollToTop />
            <Awards />
            <InfoSectionAwards {...homeObjEleven} />
            <Footer/>
        </>
    );
};

export default AwardsPage;