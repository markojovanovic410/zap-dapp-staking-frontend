import styled from "styled-components";

import isometricIcon from "../../assets/images/dashboard/isometric-icon-of-staking-cryptocurrency-vector 1.png"

function StakingView(props){
    return(
        <Wrapper>
            <StakingWrap>
                <View>
                    <Title>staking:</Title>
                    <Value>{props.staking}</Value>
                </View>
                <View>
                    <Title>APY:</Title>
                    <Value>{props.APY}%</Value>
                </View>
            </StakingWrap>
            <div>
                <img src={isometricIcon}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    padding: 34px 35px 0px 33px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 43.249px;
    border-radius: 8.405px;
    border: 0px solid #FF8683;
    background: rgba(255, 255, 255, 0.15);
`;

const StakingWrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 75.642px;
`;

const View = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8.405px;
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
    font-size: 25.214px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 30.257px */
    margin:0;
`;

export default StakingView;