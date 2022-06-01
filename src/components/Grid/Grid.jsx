import styled from "styled-components";

export const Section = styled.section`
width: 90%;
max-width: 1110px;
margin: auto;
`;

export const Row = styled.div`
display: flex;
flex-wrap: wrap;
gap: 5px;
align-items: center;
margin: 3% 0;
justify-content: ${props => props.spaceBetween ? "space-between" : "normal"};
width: ${props => props.spaceBetween ? "100%" : "normal"}; ;
`;

export const Div = styled.div`
width: auto;
`;