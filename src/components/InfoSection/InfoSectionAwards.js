import React from 'react';
import { InfoContainer, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, ImgWrap, Img } from './InfoElements';
import { AwardsWrapper, AwardsSubtitle } from '../Awards/AwardsElements';
import { AwardsUl, AwardsLi } from '../Awards/AwardsElements';

import KAB from '../../images/KAB.jpg';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description2, alt, lineOne, lineTwo, lineThree, lineFour, lineFive, lineSix, lineSeven, lineEight, lineNine }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <AwardsWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <AwardsSubtitle darkText={darkText}>{description}</AwardsSubtitle>
                                <AwardsUl>
                                    <AwardsLi darkText={darkText}>
                                        {lineOne}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineTwo}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineThree}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineFour}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineFive}
                                    </AwardsLi>
                                </AwardsUl>
                                <AwardsSubtitle darkText={darkText}>{description2}</AwardsSubtitle>
                                <AwardsUl>
                                    <AwardsLi darkText={darkText}>
                                        {lineSix}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineSeven}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineEight}
                                    </AwardsLi>
                                    <AwardsLi darkText={darkText}>
                                        {lineNine}
                                    </AwardsLi>
                                </AwardsUl>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={KAB} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </AwardsWrapper>
            </InfoContainer>
        </>
    )
};

export default InfoSection;