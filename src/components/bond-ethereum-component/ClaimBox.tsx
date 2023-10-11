import styled from "styled-components";

function ClaimBox(){
    return(
        <Wrapper>
            <ChartWrap>
                <ClaimDesc>
                    <Title>9 days left to claim</Title>
                    <Balance>137.32521 ZAP</Balance>
                </ClaimDesc>                
            </ChartWrap>
            <Chart/>
            
            <ClaimReview>
                <ValueWrap>
                    <Desc>claim now with 25% penalty</Desc>
                    <Percentage>100% </Percentage>
                    <ZAP>102.99391 ZAP</ZAP>
                </ValueWrap>
                <Line/>
                <ClaimEarly>Claim early</ClaimEarly>
            </ClaimReview>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 435px;
    flex-shrink: 0;
    border-radius: 8.405px;
    border: 0px solid #FF8683;
    background: rgba(255, 255, 255, 0.15);
    padding-top:40px;
    padding-bottom:39px;
    padding-left:40px;
    padding-right:40px;

`
const ChartWrap = styled.div`
    width: 273px;
    height: 276px;
    flex-shrink: 0;
    border-radius: 276px;
    border: 20px solid #FFF;
    margin-left:50px;
    position:relative;
    border-radius: 276px;
    border: 20px solid rgb(255, 255, 255,0.1);
`
const ClaimDesc = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top:100px;
    margin-left:50px;
`
const Title = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
    margin:0;
`
const Balance = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin:0;
    opacity:1;
`
const ClaimReview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 8px;
    margin-top:32px;
`
const Percentage = styled.span`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ZAP = styled.span`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ClaimEarly = styled.span`
    align-self: stretch;
    color: #FF8683;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
`
const ValueWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`
const Line = styled.div`
    width: 355px;
    height: 1px;
    opacity: 0.05;
    background: #FFF;
`
const Desc = styled.span`
    width: 113px;
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.4;
`
const Chart = styled.div`
    width: 273px;
    height: 276px;
    transform: rotate(-90deg);
    flex-shrink: 0;
    border-radius: 276px;
    border: 22px solid #FF8683;
    position:absolute;
    transform: translate(18%, -100%);
    opacity: 0.7;
`
export default ClaimBox;