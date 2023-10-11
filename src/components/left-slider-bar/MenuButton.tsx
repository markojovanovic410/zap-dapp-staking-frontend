import styled from "styled-components";

function MenuButton(props) {
  
  return (
    <Wrapper isActive={props.isActive}>
        <Icon src={props.image}/>
        <ButtonName>{props.name}</ButtonName>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isActive: boolean}>`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 248px;
    height: 43px;
    right: -122px;
    top: -10px;
    border-radius: 8px;
    background: ${(props) => (props.isActive ? ' rgb(255, 255, 255,0.1);' : 'none')};
    padding-left:16px;
    padding-top:12px;
    padding-bottom:7px;
`;

const Icon = styled.img`
    width:24px;
    height:24px;
`;
const ButtonName = styled.span`
    color: #FFF;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export default MenuButton;
