import styled from "styled-components";

function Header(props){
    return(
        <Wrapper>
            <Title>{props.title}</Title>
            <BuyUniswap>Buy On Uniswap</BuyUniswap>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    min-width:965px;
    
`;

const Title = styled.p`
    margin: 20px 0px 0px 0px;
    color: #FFF;
    font-size: 32px;
    font-family: Inter;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
`;

const BuyUniswap = styled.button`
    display: inline-flex;
    padding: 16px 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: #FF8683;
    color: #000;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border:none;
`;
export default Header;