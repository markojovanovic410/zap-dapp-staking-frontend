
import currentRewardIcon from "../../assets/images/dashboard/rewards c.svg"
import estimatedRewardIcon from "../../assets/images/dashboard/rewards est.svg"
import multiplierRewardIcon from "../../assets/images/dashboard/reward mult.svg"
import styled from "styled-components"

function Reward(props){
    return(
        <Wrapper>
            <Title>{props.title} rewards:</Title>
            <Container>
                {props.title=="current" && <Icon src={currentRewardIcon}/>}
                {props.title=="estimated" && <Icon src={estimatedRewardIcon}/>}
                {props.title=="multiplier" && <Icon src={multiplierRewardIcon}/>}
                <Value>$ {props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</Value>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
`
const Container = styled.div`
    display:flex;
    flex-direction:row;
    gap:16px;
`
const Value = styled.p`
    margin:0;
    color: #FFF;
    font-size: 25.214px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 30.257px */
    min-width:120px;
`
const Icon = styled.img`
    width: 25.214px;
    height: 25.214px;
    flex-shrink: 0;
`;

const Title = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 12.607px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin:0;
    opacity:0.4;
    margin-left:42px;
`

export default Reward;