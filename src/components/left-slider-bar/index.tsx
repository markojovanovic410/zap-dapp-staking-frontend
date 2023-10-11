import styled from "styled-components";
import MenuButton from "./MenuButton";

import dashboardIcon from "../../assets/images/menu/carbon_dashboard.png"
import stakingIcon from "../../assets/images/menu/uil_setting.png"
import bondingIcon from "../../assets/images/menu/uil_slider-h-range.png"
import logoIcon from "../../assets/images/Logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function LeftSliderBar() {
    const [selectedDashboard,setSelectedDashboard] = useState(true);
    const [selectedStaking,setSelectedStaking] = useState(false);
    const [selectedBonding,setSelectedBonding] = useState(false);
    
    const handleDashboardClick = () => {
        setSelectedDashboard(true);
        setSelectedStaking(false);
        setSelectedBonding(false);
    }
    const handleStakingClick  = () => {
        setSelectedDashboard(false);
        setSelectedStaking(true);
        setSelectedBonding(false);
    }
    const handleBondingClick = () => {
        setSelectedDashboard(false);
        setSelectedStaking(false);
        setSelectedBonding(true);
    }
    
  return (
    <Wrapper>
        <MenuWrap>
            <LogoWrap>
                <img src={logoIcon}/>
            </LogoWrap>
            <MenuContainer>
                <Link to="dashboard" 
                    style={{textDecoration: 'none'}} 
                    onClick={handleDashboardClick} 
                    >
                    <MenuButton image={dashboardIcon} 
                        name="Dashboard" 
                        isActive={selectedDashboard}/>
                </Link>  
                <Link to="staking" 
                    style={{textDecoration: 'none'}} 
                    onClick={handleStakingClick}
                    >
                    <MenuButton image={stakingIcon} 
                        name="Staking" 
                        isActive={selectedStaking} />
                </Link>
                <Link to="bonding" 
                    style={{textDecoration: 'none'}} 
                    onClick={handleBondingClick}
                    >
                    <MenuButton image={bondingIcon} 
                        name="Bonding" 
                        isActive={selectedBonding} />
                </Link>
            </MenuContainer>
        </MenuWrap>        
        <HelpWrap>
            <Link to="/" style={{textDecoration: 'none'}} >
                <Text>Home Page</Text>
            </Link>
            <Link to="/#" target="_blank" style={{textDecoration: 'none'}} >
                <AboutWrap>
                    <Text>About</Text>
                    <Goto>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                            <path opacity="0.4" d="M9.5 0.5C9.5 0.223858 9.27614 0 9 0H4.5C4.22386 0 4 0.223858 4 0.5C4 0.776142 4.22386 1 4.5 1H8.5V5C8.5 5.27614 8.72386 5.5 9 5.5C9.27614 5.5 9.5 5.27614 9.5 5V0.5ZM1.35355 8.85355L9.35355 0.853553L8.64645 0.146447L0.646447 8.14645L1.35355 8.85355Z" fill="white"/>
                        </svg>
                    </Goto>
                </AboutWrap>
            </Link>
            <Link to="/#" target="_blank" style={{textDecoration: 'none'}} >
                <DocsWrap>
                    <Text>Docs</Text>
                    <Goto>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                            <path opacity="0.4" d="M9.5 0.5C9.5 0.223858 9.27614 0 9 0H4.5C4.22386 0 4 0.223858 4 0.5C4 0.776142 4.22386 1 4.5 1H8.5V5C8.5 5.27614 8.72386 5.5 9 5.5C9.27614 5.5 9.5 5.27614 9.5 5V0.5ZM1.35355 8.85355L9.35355 0.853553L8.64645 0.146447L0.646447 8.14645L1.35355 8.85355Z" fill="white"/>
                        </svg>
                    </Goto>  
                </DocsWrap>              
            </Link>
            
        </HelpWrap>
    </Wrapper>
  );
}
const Wrapper = styled.div`
    display: flex;
    width: 314px;
    padding: 24px 24px 24px 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.07);
    margin-bottom:80px;
    max-height:750px;
`;

const MenuWrap = styled.div`

`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    position:relative;
    margin-top:80px;
`;

const Text = styled.p`
    margin:0;
    color: #FFF;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const HelpWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    margin-left:16px;
`;
const AboutWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const DocsWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Goto = styled.div`
    strokeWidth: 1px;
    stroke: #FFF;
    opacity: 0.4;
    &:hover{
        opacity: 1;
    }
`;
const LogoWrap = styled.div`
    width: 109px;
    height: 40px;
    margin-left:16px;
`
const SliderLink = styled.a`
    text-decoration: none;
`
export default LeftSliderBar;

