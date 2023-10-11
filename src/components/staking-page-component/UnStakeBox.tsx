import styled from "styled-components";
import multiplierIcon from "../../assets/images/staking/octicon_question-24.svg"
import MaxInput from "./MaxInput";
function UnStakeBox(){
    return(
        <Wrapper>
            <OverviewWrap>
                <Title>UnStake</Title>
                <BalanceWrap>
                    <SubTitle>Wallet Balance:</SubTitle>
                    <Balance>0.000 UNI-V2</Balance>
                </BalanceWrap>
                <BonusWrap>
                    <SubTitle>Claimable rewards:</SubTitle>
                    <BonusPeriod>0 ETH</BonusPeriod>
                </BonusWrap>
            </OverviewWrap>
            <Line/>
            <UnStakeWrap>
                <DetailWrap>
                    <Detail>
                        <DetailTitle>Global unlocked:</DetailTitle>
                        <DetailValue>96.2K ZAP</DetailValue>
                    </Detail>
                    <Detail>
                        <DetailTitle>Time mult.</DetailTitle>
                        <DetailValue>—</DetailValue>
                    </Detail>
                    <Detail>
                        <DetailTitle>Time stacked</DetailTitle>
                        <DetailValue>—</DetailValue>
                    </Detail>
                </DetailWrap>
                <UnStakeFieldWrap>
                    <MaxInput name="UNI-V2"/>
                    <MaxInput name="ZAP"/>
                    <PreViewWrap>
                        <SubPreviewWrap>
                            <MultiplierWrap>
                                <SubTitle>Multiplier</SubTitle>
                                <MultiplierIcon src={multiplierIcon}/>
                            </MultiplierWrap>
                            <Multiplier>4.53x</Multiplier>
                        </SubPreviewWrap>                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="8" viewBox="0 0 85 8" fill="none">
                            <path opacity="0.2" d="M84.8531 4.35355C85.0483 4.15829 85.0483 3.84171 84.8531 3.64645L81.6711 0.464466C81.4758 0.269204 81.1592 0.269204 80.964 0.464466C80.7687 0.659728 80.7687 0.976311 80.964 1.17157L83.7924 4L80.964 6.82843C80.7687 7.02369 80.7687 7.34027 80.964 7.53553C81.1592 7.7308 81.4758 7.7308 81.6711 7.53553L84.8531 4.35355ZM0.499512 4.5H84.4995V3.5H0.499512V4.5Z" fill="white"/>
                        </svg>
                        <PreviewZapWrap>
                            <SubTitle>You'll receive</SubTitle>
                            <ZAP>0.00000 ZAP</ZAP>
                        </PreviewZapWrap>                        
                    </PreViewWrap>       
                    <ButtonWrap>
                        <UnStakeButton>Unstake</UnStakeButton>
                        <ApproveZAPButton>Approve ZAP</ApproveZAPButton>
                    </ButtonWrap>          
                </UnStakeFieldWrap>
            </UnStakeWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-flex;
    justify-content:space-between;
    flex-shrink: 0;
    flex-direction:row;
    border-radius: 8.405px;
    border: 0px solid #FF8683;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(3.6770217418670654px);
    z-index:1;
    align-items: center;
    gap: 16px;
    padding:40px 47px 40px 40px;
`
const OverviewWrap = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width:112px;
`
const Title = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin:0;
`
const BalanceWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`
const BonusWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`
const SubTitle = styled.p`
    margin:0;
    color: #FFF;
    font-family: Inter;
    font-size: 12.607px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
`
const Balance = styled.p`
    margin:0;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
`
const BonusPeriod = styled.p`
    margin:0;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
`
const Line = styled.div`
    width: 1px;
    height: 172px;
    opacity: 0.2;
    background: #FFF;
`
const UnStakeWrap = styled.div`
    display:flex;
    gap:25.5px;
    flex-direction:column;
`
const DetailWrap = styled.div`
    display: inline-flex;
    align-items: flex-start;
    gap: 48px;
    flex-direction:row;
`
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`
const DetailTitle = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    margin:0;
`
const DetailValue = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 14.4px */
    margin:0;
`
const UnStakeFieldWrap = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
`
const PreViewWrap = styled.div`
    display: flex;
    width: 340px;
    justify-content: space-between;
    align-items: center;
`
const SubPreviewWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`
const MultiplierWrap = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`
const MultiplierIcon = styled.img`
    width: 14px;
    height: 14px;
    opacity: 0.4;
`
const Multiplier = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin:0;
`
const PreviewZapWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`
const ZAP = styled.span`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ButtonWrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
`
const UnStakeButton = styled.div`
    display: flex;
    padding: 14px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: rgba(247, 248, 250, 0.05);
    color: rgba(247, 248, 250, 0.25);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ApproveZAPButton = styled.div`
    display: flex;
    padding: 14px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid #F7F8FA;
    background: #FFF;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export default UnStakeBox;