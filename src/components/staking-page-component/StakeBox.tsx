import styled from "styled-components";
import MaxInput from "./MaxInput";

function StakeBox (){

    return(
        <Wrapper>
            <OverviewWrap>
                <Title>Stake</Title>
                <BalanceWrap>
                    <SubTitle>Wallet Balance:</SubTitle>
                    <Balance>0.000 UNI-V2</Balance>
                </BalanceWrap>
                <BonusWrap>
                    <SubTitle>Bonus period:</SubTitle>
                    <BonusPeriod>90 days</BonusPeriod>
                </BonusWrap>
            </OverviewWrap>
            <Line/>
            <FeildWrap>
                <AmountFieldWrap>
                    <AmountTitle>Amount of UNI-V2 to stake:</AmountTitle>
                    <MaxInput name="UNI-V2"/>
                </AmountFieldWrap>                
                <ButtonsWrap>
                    <StakeButton>Stake</StakeButton>
                    <ApproveButton>Approve UNI-V2</ApproveButton>
                </ButtonsWrap>
            </FeildWrap>
        </Wrapper>
    );
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
const AmountTitle = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.4;
    margin:0;
`
const FeildWrap = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
`
const AmountFieldWrap = styled.div`
    display: flex;
    width: 340px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`
const ButtonsWrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
`
const StakeButton = styled.button`
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
    border:none;
`
const ApproveButton = styled.button`
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
    border:none;

`
export default StakeBox;