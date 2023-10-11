import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "pages/Dashboard";

import LeftSliderBar from "components/left-slider-bar";
import Footer from "components/Footer";
import StakingPage from "pages/StakingPage";

import "./App.css";
import BondPage from "pages/BondPage";
import { useState } from "react";
function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <GradientRightBottom/>
        <GradientLeftTop/>
        <LeftSliderBar/>
        <Board>          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staking" element={<StakingPage/>}/>
            <Route path="/bonding" element={<BondPage/>}/>
          </Routes>
          <Content/>
          <Footer/>  
        </Board>
      </Wrapper>
    </BrowserRouter>
  );
}
const Wrapper = styled.div`
  background: #000;
  min-height:100vh;
  width:100%;
  height:100%;
  padding-left:16px;
  padding-right:80px;
  padding-top:16px;
  display:flex;
  flex-direction:row;
`;

const GradientRightBottom = styled.div`
  width: 97vw;
  height: 103vh;
  transform: rotate(21.879deg);
  flex-shrink: 0;
  border-radius: 1409.761px;
  background: radial-gradient(50% 50% at 50% 50%, #290A09 0%, rgba(41, 10, 9, 0.00) 100%);
  left: 100vw;
  top: 100vh;
  transform: translate(-50%, -50%);
  position:fixed;
`;
const GradientLeftTop= styled.div`
  width: 97vw;
  height: 103vh;
  transform: rotate(21.879deg);
  flex-shrink: 0;
  border-radius: 1409.761px;
  background: radial-gradient(50% 50% at 50% 50%, #290A09 0%, rgba(41, 10, 9, 0.00) 100%);
  transform: translate(-50%, -50%);
  position:fixed;
`;

const Board = styled.div`
  display:flex;
  flex-direction:column;
  padding-left:64px;
  z-index:1;
  width:100%;
`;

const Content = styled.div`
  flex:1;
  min-height:150px;
`;
export default App;
