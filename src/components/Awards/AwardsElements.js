import styled from 'styled-components';

export const AwardsUl = styled.ul`

`;

export const AwardsLi = styled.li`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const AwardsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
`;

export const AwardsSubtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;