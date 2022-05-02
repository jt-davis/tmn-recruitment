import React from 'react';
import Icon1 from '../../images/Test.jpg';
import Icon2 from '../../images/NewTekReplay2.png';
import Icon3 from '../../images/Viz.png';
import Icon4 from '../../images/X32.png';
import Icon5 from '../../images/AnnounceAudio.jpg';
import Icon6 from '../../images/Camera.jpg';
import Icon7 from '../../images/Bigfoot.jpg';
import { ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import { EquipmentContainer, EquipmentCard } from '../Equipment/EquipmentElements';

const EquipmentList = () => {
    return (
        <EquipmentContainer>
            <ServicesH1>Equipment</ServicesH1>
            <ServicesWrapper>
                <EquipmentCard href="https://www.newtek.com/" target="_blank" aria-label="NewTek">
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Video Switchers</ServicesH2>
                    <ServicesP>NewTek TC2 Elite<br/>NewTek TC1<br/>NewTek Mini 4K</ServicesP>
                </EquipmentCard>
                <EquipmentCard href="https://www.newtek.com/" target="_blank" aria-label="NewTek">
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Replay Machines</ServicesH2>
                    <ServicesP>NewTek 3P2<br/>NewTek 3P1<br/>Test</ServicesP>
                </EquipmentCard>
                <EquipmentCard href="https://www.vizrt.com/products/viz-trio" target="_blank" aria-label="VizRt">
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Graphic Playout System</ServicesH2>
                    <ServicesP>VizRt Viz Trio</ServicesP>
                </EquipmentCard>
                <EquipmentCard href="https://www.behringer.com/product.html?modelCode=P0ASF" target="_blank" aria-label="Behringer">
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Audio Console</ServicesH2>
                    <ServicesP>Behringer X32 Audio Console</ServicesP>
                </EquipmentCard>
                <EquipmentCard href="https://studio-tech.com/" target="_blank" aria-label="Studio Tech">
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Announcer and Camera Audio Systems</ServicesH2>
                    <ServicesP>Studio Technologies Model 214<br/>Studio Technologies Model 373A Intercom Beltpack</ServicesP>
                </EquipmentCard>
                <EquipmentCard href="https://www.blackmagicdesign.com/products/blackmagicursabroadcast" target="_blank" aria-label="Blackmagic">
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Broadcast Cameras</ServicesH2>
                    <ServicesP>Blackmagic URSA Broadcast G2<br/>Panasonic AG-CX350<br/>NewTek - NDI PTZ Cameras</ServicesP>
                </EquipmentCard>
                <EquipmentCard href="https://www.bigfootmobilecarts.com/double-rack" target="_blank" aria-label="Bigfoot">
                    <ServicesIcon src={Icon7} />
                    <ServicesH2>Mobile Production Cart</ServicesH2>
                    <ServicesP>Bigfoot Double Rack</ServicesP>
                </EquipmentCard>
            </ServicesWrapper>
        </EquipmentContainer>
    );
};

export default EquipmentList;