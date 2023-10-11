import Header from "components/Header";
import BondBox from "components/bond-ethereum-component/BondBox";
import ClaimBox from "components/bond-ethereum-component/ClaimBox";
import styled from "styled-components";

function BondPage(){
    return(
        <>
            <Header title="Bond Ethereum"/>
            <Wrapper>
                <BondBox/>
                <ClaimBox/>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width:100%;
    margin-left:64px;
    display:flex;
    flex-direction:row;
    margin-top:47px;
    margin-left:0px;
    gap:16px;
    justify-content: center;
`
export default BondPage;