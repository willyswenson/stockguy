import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 2em;
    background: grey;
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 20000px;
    margin-right: auto;
    margin-left: auto;
    padding: 5 24px;
    justify-content: center;

`;

export const CardText = styled.h2`
    margin-bottom: 14px;
    font-size: 32px;
    line-height: 1.75;
    font-weight: 550;
    max-width: 600px;
    color: white;

    @media screeen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const CardInfo = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: black;
    float: center;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const CardFin = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: left;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )}
    }
`;
