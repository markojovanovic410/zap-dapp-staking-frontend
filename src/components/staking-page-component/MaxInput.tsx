import styled from "styled-components";

function MaxInput(props){
    return(
        <InputWrap>
            <Input placeholder="0.000"/>
            <MaxButtonWrap>
                <ButtonHeader>{props.name}</ButtonHeader>
                <MaxBtn>Max</MaxBtn>
            </MaxButtonWrap>
        </InputWrap>
    )
}

export default MaxInput;
const InputWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    border-radius: 4px;
    border: 1px solid #F7F8FA;
    position:relative;
`
const Input = styled.input`
    display: flex;
    height: 51px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border:none;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width:100%;
    background-color: rgb(255,255,255,0.0);
    padding-left:16px;
`
const MaxButtonWrap = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position:absolute;
    right:16px;
    top:12px;
`
const ButtonHeader = styled.span`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const MaxBtn = styled.button`
    display: flex;
    padding: 6px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    background: #FF8683;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border:none;
`