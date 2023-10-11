import Header from "components/Header";
import Banner from "components/staking-page-component/Banner";
import StakeBox from "components/staking-page-component/StakeBox";
import StakeOverView from "components/staking-page-component/StakeOverview";
import UnStakeBox from "components/staking-page-component/UnStakeBox";
import styled from "styled-components";

function StakingPage(){
    return(
        <>
            <Header title="Staking"/>
            <Wrapper>
                <Banner/>
                <StakesWrapper>
                    <StakeOverView/>
                    <StakeBox/>
                    <UnStakeBox/>    
                </StakesWrapper>                            
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    margin-bottom:80px;
    min-width:881px;
    width:965px;
    margin:auto;
`;

const StakesWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
    padding-left:85px;
    padding-right:86px;
    margin-top:-31px;
    
`

export default StakingPage;