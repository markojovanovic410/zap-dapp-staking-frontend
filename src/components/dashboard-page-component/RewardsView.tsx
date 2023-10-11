import styled from "styled-components";
import Reward from "./Reward";

function RewardsView(){
    return(
        <Wrapper>
            <Reward title="current" value={35032}/>
            <Reward title="estimated" value={35032}/>
            <Reward title="multiplier" value={35032}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 8.405px;
    border: 0px solid #FF8683;
    background: rgba(255, 255, 255, 0.15);
    display:flex;
    flex-direction:column;
    padding-left:33px;
    padding-top:33px;
    padding-right:101px;
    padding-bottom:37px;
    gap:42px;
    
`;
export default RewardsView;