import styled from "styled-components";
import Group from "../../assets/images/dashboard/Group.svg"

function Overview(props){
    return(
        <Wrapper>
            <Balace>
                <Title>my total balance:</Title>
                <Total>$ {props.totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</Total>
            </Balace>
            <ZAP>
                <Title>that equal in ZAPs</Title>
                <Equal>{props.equal}</Equal>
            </ZAP>
            <Icon src={Group}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-right: 94.22px;
    padding-bottom: 33.69px;
    padding-top:29.24px;
    padding-left:39.92px;
    flex-shrink: 0;
    border-radius: 8.405px;
    background: #FFF;
`;

const Balace = styled.div`
    gap: 8.405px;
`;

const Title = styled.div`
    color: #000;
    font-size: 12.607px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Total = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 50.428px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 60.513px */
`;

const ZAP = styled.div`
    margin-top:34.31px;
    gap: 8.405px;
`;

const Equal = styled.div`
    color: #000;
    font-size: 25.214px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 30.257px */
    margin-top:10px;
`;

const Icon = styled.img`
    margin-left:11.56px;
    margin-top:62px;
`
export default Overview;