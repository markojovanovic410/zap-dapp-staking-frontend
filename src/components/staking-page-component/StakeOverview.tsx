import styled from "styled-components";

function StakeOverView(){
    return(
        <Wrapper>
            <DetailWrap>
                <Title>Stacked, UNI-V2:</Title>
                <Value>5.41K</Value>
            </DetailWrap>
            <DetailWrap>
                <Title>Remaining, ZAP’s:</Title>
                <Value>956K</Value>
            </DetailWrap>
            <DetailWrap>
                <Title>APR:</Title>
                <Value>23.26%</Value>
            </DetailWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-flex;
    height: 85px;
    padding: 50px 78.5px 16px 78.5px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8.405px;
    border: 0px solid #FF8683;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(3.6770217418670654px);
    gap:15%;
    z-index:-1;
`
const Title = styled.span`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
`
const Value = styled.span`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
`
const DetailWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 8px;
`
export default StakeOverView;