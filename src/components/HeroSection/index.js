import React from 'react';
import Video from '../../videos/video2.mp4';
// import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };


    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Tiger Media Network
                </HeroH1>
                <HeroP>
                    Fort Hays State University News and Sports Broadcast Group
                </HeroP>
                {/* <HeroBtnWrapper>
                    <Button to='equipment' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                        Equipment {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;