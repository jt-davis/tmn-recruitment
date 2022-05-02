import React from 'react';
import Roles from '../components/Roles';
import ScrollToTop from '../components/ScrollToTop';
import InfoSectionRolesCamera from '../components/InfoSection/InfoSectionRolesCamera';
import InfoSectionRolesTalent from '../components/InfoSection/InfoSectionRolesTalent';
import InfoSectionRolesReplay from '../components/InfoSection/InfoSectionRolesReplay';
import InfoSectionRolesTechDirector from '../components/InfoSection/InfoSectionRolesTechDirector';
import InfoSectionRolesDirector from '../components/InfoSection/InfoSectionRolesDirector';
import { homeObjSix, homeObjSeven, homeObjEight, homeObjNine, homeObjTen } from '../components/InfoSection/Data';
import Footer from '../components/Footer';

const RolesPage = () => {
    return (
        <>
            <ScrollToTop />
            <Roles />
            <InfoSectionRolesCamera {...homeObjSix}/>
            <InfoSectionRolesTalent {...homeObjSeven}/>
            <InfoSectionRolesReplay {...homeObjEight}/>
            <InfoSectionRolesTechDirector {...homeObjNine}/>
            <InfoSectionRolesDirector {...homeObjTen}/>
            <Footer />
        </>
    );
};

export default RolesPage;