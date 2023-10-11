import styled from "styled-components";

import stateIcon from "../../assets/images/dashboard/Stake.svg"
import earnningIcon from "../../assets/images/dashboard/earnings.svg"
import graphIcon from "../../assets/images/dashboard/Group 9.svg"

function StakeBalance(props){

    return(
        <Wrapper>            
            <StakeWrap>
                <IconWrap>
                    <Icon src={stateIcon}/>
                </IconWrap>                
                <BalaceWrap>
                    <Title>my stake</Title>
                    <Value>{props.myStake}</Value>
                </BalaceWrap>                
            </StakeWrap>
            <EarnningWrap>
                <IconWrap>
                    <Icon src={earnningIcon}/>
                </IconWrap>
                <BalaceWrap>
                    <Title>estimated earnings</Title>
                    <Value>$ {props.estEarning.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</Value>
                </BalaceWrap>                
            </EarnningWrap>
            <Graph src={graphIcon}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 595px;
    border-radius: 8.405px;
    background: rgba(255, 255, 255, 0.15);
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    padding-right: 22.59px;
    padding-left: 33.62px;
    padding-top: 29.24px;
    padding-bottom: 20.66px;
`;

const StakeWrap = styled.div`
    display:flex;
    flex-direction:row;
`;

const EarnningWrap = styled.div`
    display:flex;
    flex-direction:row;
`;

const Title = styled.p`
    color: #FFF;
    font-size: 12.607px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    margin:0;
`;

const Value = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 25.214px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 30.257px */
    margin:0;
`;

const Icon = styled.img`
    width: 25.214px;
    height: 25.214px;
    margin-top:22.9px;
    flex-shrink: 0;
    
`
const Graph = styled.img`
    width: 177.548px;
    height: 57.275px;
    flex-shrink: 0;
`;

const BalaceWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:16.82px;
    gap: 8.405px;
`;

const IconWrap = styled.div`
    display:flex;
    flex-direction:column;
`;
export default StakeBalance;