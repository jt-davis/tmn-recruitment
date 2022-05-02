import React from 'react';
import Equipment from '../components/Equipment';
import ScrollToTop from '../components/ScrollToTop';
import EquipmentList from '../components/Services/EquipmentList';
import Footer from '../components/Footer';

const EquipmentPage = () => {
    return (
        <>
            <ScrollToTop />
            <Equipment />
            <EquipmentList />
            <Footer />
        </>
    );
};

export default EquipmentPage;