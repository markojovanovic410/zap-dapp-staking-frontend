import styled from "styled-components";
import logoIcon from "../../assets/images/staking/7075ff31a5576c6103142abb85891015.gif"
import tokenIcon from "../../assets/images/staking/image 16.png"
import { Link } from "react-router-dom";
function Banner(){

    return(
        <Wrapper>
            <LogoWrap>
                <LogoIcon src={logoIcon}/>
                <DescWrap>
                    <ZAPTitle>ZAP community pool</ZAPTitle>
                    <ZAPDesc>People stake zap/eth and earn ETH from the protocol revenue. So let’s make it: ‘Zap revenue pool’</ZAPDesc>
                    <ZAPWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2C0 9.10956 0.758569 10.9409 2.10883 12.2912C3.45909 13.6414 5.29044 14.4 7.2 14.4C9.10956 14.4 10.9409 13.6414 12.2912 12.2912C13.6414 10.9409 14.4 9.10956 14.4 7.2C14.4 5.29044 13.6414 3.45909 12.2912 2.10883C10.9409 0.758569 9.10956 0 7.2 0ZM0.888 7.744H2.896C2.928 8.472 3.0296 9.1952 3.2 9.904H1.472C1.14976 9.2247 0.951967 8.49312 0.888 7.744ZM7.744 3.424V0.952C8.51495 1.24498 9.14844 1.8157 9.52 2.552C9.684 2.8296 9.8288 3.1184 9.952 3.416L7.744 3.424ZM10.32 4.504C10.5056 5.2104 10.616 5.9344 10.648 6.664H7.744V4.504H10.32ZM6.656 0.952V3.424H4.448C4.57141 3.12616 4.71577 2.83743 4.88 2.56C5.24997 1.82068 5.88367 1.24693 6.656 0.952ZM6.656 4.504V6.664H3.76C3.792 5.9344 3.9024 5.2104 4.088 4.504H6.656ZM2.896 6.656H0.888C0.951967 5.90688 1.14976 5.1753 1.472 4.496H3.2C3.02927 5.20452 2.92747 5.92788 2.896 6.656ZM3.76 7.744H6.656V9.904H4.088C3.90243 9.19766 3.79248 8.47359 3.76 7.744ZM6.664 10.944V13.416C5.89305 13.123 5.25956 12.5523 4.888 11.816C4.72377 11.5386 4.57941 11.2498 4.456 10.952L6.664 10.944ZM7.744 13.416V10.984H9.952C9.82859 11.2818 9.68423 11.5706 9.52 11.848C9.14844 12.5843 8.51495 13.155 7.744 13.448V13.416ZM7.744 9.864V7.704H10.64C10.6075 8.43359 10.4976 9.15766 10.312 9.864H7.744ZM11.512 7.704H13.52C13.456 8.45312 13.2582 9.1847 12.936 9.864H11.2C11.368 9.168 11.4696 8.4584 11.504 7.744L11.512 7.704ZM11.512 6.624C11.4754 5.90905 11.3709 5.19919 11.2 4.504H12.928C13.2504 5.184 13.448 5.9152 13.512 6.664L11.512 6.624ZM12.312 3.424H10.88C10.6209 2.69624 10.2453 2.01538 9.768 1.408C10.7635 1.85486 11.6282 2.54884 12.28 3.424H12.312ZM4.632 1.408C4.15466 2.01538 3.7791 2.69624 3.52 3.424H2.12C2.77178 2.54884 3.63649 1.85486 4.632 1.408ZM2.112 11.008H3.52C3.7791 11.7358 4.15466 12.4166 4.632 13.024C3.63374 12.5704 2.76876 11.868 2.12 10.984L2.112 11.008ZM9.76 13.024C10.2373 12.4166 10.6129 11.7358 10.872 11.008H12.28C11.6242 11.8714 10.7599 12.5541 9.768 12.992L9.76 13.024Z" fill="black"/>
                        </svg>
                        <Link to="https://zapier.com/" target="_blank" style={{textDecoration: 'none'}}>
                            <ZAPLink>zap.com </ZAPLink>
                            <ZAPIcon>↗</ZAPIcon>
                        </Link>
                    </ZAPWrap>                    
                </DescWrap>
            </LogoWrap>
            <ReviewWrap>
                <TokenWrap>
                    <img src={tokenIcon}/>
                    <UNIWrap>
                        <Title>Staking Token</Title>
                        <UNI>
                            <Link to="https://uniswap.org/" target="_blank" style={{textDecoration: 'none'}}>
                                <UNITitle>UNI-V2</UNITitle>
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                    <path opacity="0.4" d="M9.5 0.5C9.5 0.223858 9.27614 0 9 0H4.5C4.22386 0 4 0.223858 4 0.5C4 0.776142 4.22386 1 4.5 1H8.5V5C8.5 5.27614 8.72386 5.5 9 5.5C9.27614 5.5 9.5 5.27614 9.5 5V0.5ZM1.35355 8.85355L9.35355 0.853553L8.64645 0.146447L0.646447 8.14645L1.35355 8.85355Z" fill="black"/>
                                </svg>
                            </Link>
                        </UNI>
                    </UNIWrap>
                </TokenWrap>
                <RewardWrap>
                    <ZAPIconWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none">
                            <path d="M1.14254 19.6189L8.19847 2.56707L16.4291 2.56707L11.1382 14.327L19.9585 14.327L11.1382 29.0268L9.96245 19.6189L1.14254 19.6189Z" stroke="white" strokeWidth="0.3"/>
                            <path d="M4.46158 17.1672L10.9492 1.48869L18.517 1.48869L13.6522 12.3014L21.7621 12.3014L13.6522 25.8174L12.5711 17.1672L4.46158 17.1672Z" fill="#FF8683"/>
                        </svg>
                    </ZAPIconWrap>
                    <ZAPRewardWrap>
                        <Title>Reward</Title>
                        <ZAP>
                            <Link to="https://zapier.com/" target="_blank" style={{textDecoration: 'none'}}>
                                <UNITitle>ZAP</UNITitle>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                    <path opacity="0.4" d="M9.26733 0.5C9.26733 0.223858 9.04348 0 8.76733 0H4.26733C3.99119 0 3.76733 0.223858 3.76733 0.5C3.76733 0.776142 3.99119 1 4.26733 1H8.26733V5C8.26733 5.27614 8.49119 5.5 8.76733 5.5C9.04348 5.5 9.26733 5.27614 9.26733 5V0.5ZM1.12089 8.85355L9.12089 0.853553L8.41378 0.146447L0.413781 8.14645L1.12089 8.85355Z" fill="black"/>
                                </svg>
                            </Link>                            
                        </ZAP>
                    </ZAPRewardWrap>
                </RewardWrap>
            </ReviewWrap>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:80px;
    justify-content: space-between;
    width: 100%;
    padding: 12px 69px 12px 12px;
    align-items: center;
    gap: 80px;
    border-radius: 8.405px;
    background: #FFF;
    backdrop-filter: blur(13.132221221923828px);
    margin-top:33px;    
`;

const LogoWrap = styled.div`
    display:flex;
    flex-direction:row;
`;
const LogoIcon = styled.img`
    width: 149px;
    height: 136px;
    flex-shrink: 0;
`;

const DescWrap = styled.div`
    margin-left:48px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    justify-content: center;
`;

const ZAPTitle = styled.p`
    margin:0;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ZAPDesc = styled.p`
    margin:0;
    color: #000;
    width: 378px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
`
const ZAPWrap = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
`
const ZAPLink = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
`
const ZAPIcon = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Title = styled.p`
    margin:0;
    color: #000;
    font-family: Inter;
    font-size: 12.607px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
`
const TokenWrap = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 16px;
`
const RewardWrap = styled.div`
    display: inline-flex;
    gap: 16px;
`
const ReviewWrap = styled.div`
    display: inline-flex;
    gap: 16px;
    flex-direction:column;
    justify-content: center;
}
`
const UNIWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

const UNI = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const UNITitle = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
`
const ZAPIconWrap = styled.div`
    width: 45.767px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 22.884px;
    border: 2px solid #543331;
    background: linear-gradient(323deg, #3E2020 14.35%, #0D0C0C 84.52%), url(<path-to-image>), lightgray 50% / cover no-repeat;
    padding:9px 12.72px 9.11px 10.14px;
`
const ZAPRewardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`
const ZAP = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
export default Banner;
