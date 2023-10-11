import styled from "styled-components";

function BondBox(){
    return(
        <Wrapper>
            <BondBoxWrap>
                <InputWrap>
                    <Title>Ethereum amount to bond</Title>
                    <InputField/>
                    <ETHLabel>ETH</ETHLabel>
                </InputWrap>
                <DetailViewWrap>
                    <Title>Receive ZAP</Title>
                    <DetailWrap>
                        <DetailElement>
                            <DescTitle>direct (now)</DescTitle>
                            <DescTitle>after 2 weeks</DescTitle>
                            <DescTitle>+ total discount</DescTitle>
                        </DetailElement>
                        <DetailElement>
                            <Percentage>50%</Percentage>
                            <Percentage>50%</Percentage>
                            <Percentage>15%</Percentage>
                        </DetailElement>
                        <DetailElement>
                            <ZAP>137.32521 ZAP</ZAP>
                            <ZAP>137.32521 ZAP</ZAP>
                            <ZAP>41.197563 ZAP</ZAP>
                        </DetailElement>
                        <Line/>
                        <Line1/>
                    </DetailWrap>                    
                </DetailViewWrap>
            </BondBoxWrap>
            <BondButton>Bond</BondButton>
            <BondAndStake>Bond and Stake</BondAndStake>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
    padding: 40px;
    width: 515px;
    justify-content: center;
    align-items: center;
    border-radius: 8.405px;
    border: 0px solid #FF8683;
    background: #FFF;
    min-width:435px;
    justify-content: center;

`
const BondBoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`
const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    position:relative;
`
const Title = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.4;
    margin:0;
`
const InputField = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    height: 51px;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const DetailViewWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`
const DetailWrap = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: #F0EFEF;
    position:relative;
`
const DetailElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`
const DescTitle = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity:0.4;
`
const Percentage = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ZAP = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const BondButton = styled.button`
    display: flex;
    padding: 14px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #FF8683;
    border:none;
`
const BondAndStake = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 22.4px */
    text-decoration-line: underline;
    margin:0;
`
const ETHLabel = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position:absolute;
    right:16px;
    top:40px;
`
const Line = styled.div`
    width: 343px;
    height: 1px;
    position: absolute;
    left: 16px;
    top: 58px;
    opacity: 0.05;
    background: #000;
`
const Line1 = styled.div`
    width: 343px;
    height: 1px;
    position: absolute;
    left: 16px;
    top: 110px;
    opacity: 0.05;
    background: #000;
`
export default BondBox;