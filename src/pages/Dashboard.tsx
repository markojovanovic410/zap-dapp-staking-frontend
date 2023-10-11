import React, { useState, CSSProperties } from "react";
import { useWeb3Contracts } from "web3/contracts";
import { useWallet } from "wallets/wallet";
import styled from "styled-components";

import ConnectedWallet from "components/connected-wallet";
import Countdown from "react-countdown";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "components/Header";

import StakeBalance from "components/dashboard-page-component/StakeBalance";
import RewardsView from "components/dashboard-page-component/RewardsView"
import StakingView from "components/dashboard-page-component/StakingView";
import Overview from "components/dashboard-page-component/OverView";

const loadingCss: CSSProperties = {
  position: "relative",
  marginRight: "10px",
  top: "0px",
};

const Dashboard = () => {
  const { zapContract } = useWeb3Contracts();
  const wallet = useWallet();

  return(
    <>
      <Header title="Dashboard"/>
      <Wrapper>
        <Overview totalBalance={35032} equal={24.68931}/>
        <Container>
          <StakeBalance myStake={45} estEarning={95423}/>
          <RewardsContainer>
            <RewardsView/>
            <StakingView staking={13} APY={49.32}/>
          </RewardsContainer>
        </Container>
      </Wrapper >
    </>
  );
};

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:91px;
  justify-content:center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12.607px;
  margin-left:12.61px;
`;
const RewardsContainer = styled.div`
  display:flex;
  flex-direction:row;
  gap: 12.607px;
  align-items: flex-start;

`;
export default Dashboard;
