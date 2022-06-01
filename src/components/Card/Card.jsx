import styled from 'styled-components'


const Card = styled.div`
    width: 250px;
    background: #252B42;
    border-radius: 5px;
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: ${props =>props.big ? "4px solid #178FF5" : "none" }
`;
export default Card;