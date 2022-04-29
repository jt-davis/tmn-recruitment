import React from 'react';
import Icon1 from '../../images/JT.jpg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/Test.jpg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="testimonials">
            <ServicesH1>Testimonials</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to='/testimonials'>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Justin Davis</ServicesH2>
                    <ServicesP>"Great things, greater people."</ServicesP>
                </ServicesCard>
                <ServicesCard to='testimonials'>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>John Smith</ServicesH2>
                    <ServicesP>"Quality experience, decent pay."</ServicesP>
                </ServicesCard>
                <ServicesCard to='testimonials'>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Jane Doe</ServicesH2>
                    <ServicesP>"Tomorrow's broadcasters today."</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;