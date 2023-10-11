import styled from "styled-components";
import twitterIcon from "../assets/images/socials/Twitter X Icon 1.svg"
import telegramIcon from "../assets/images/socials/bxl_telegram.svg"
import mingcuteIcon from "..//assets/images/socials/mingcute_medium-fill.svg"
import uniswapIcon from "../assets/images/socials/Uniswap_Logo 1.svg"
import etherscanIcon from "../assets/images/socials/etherscan-logo 1.svg"
import dexscreenerIcon from "../assets/images/socials/dexscreener 1.png"
import gitbookIcon from "../assets/images/socials/gitbook-svgrepo-com 1.svg"

function Footer(){

    return(
        <Wrapper>
            <Social>
                <Description>Find us in socials</Description>
                <img src={twitterIcon}/>
                <img src={telegramIcon}/>
                <img src={mingcuteIcon}/>
                <img src={uniswapIcon}/>
                <img src={etherscanIcon}/>
                <img src={dexscreenerIcon}/>
                <img src={gitbookIcon}/>
            </Social>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin:auto;
    margin-bottom:20px;
`;

const Social = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 24px;
`;
const Description = styled.span`
    color: #FFF;
    font-size: 12px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
    min-width:100px;
`;
export default Footer;