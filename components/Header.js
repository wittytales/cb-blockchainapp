import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
import TransferModal from "./modal/TransferModal";
import Link from "next/link";
Modal.setAppElement("#__next");
const Header = ({
  walletAddress,
  sanityTokens,
  thirdWebTokens,
  connectWallet,
}) => {
  const router = useRouter();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%,-50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(10,11,13,0.75)",
    },
  };

  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)} ... {walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet("injected")}>
            Connec Wallet
          </Button>
        )}
        <Button style={{ color: "black" }}>Buy/Sell</Button>
        <Link href={"./?transfer=1"}>
          <Button style={{ color: "black" }}>Send/Receive</Button>
        </Link>
      </ButtonsContainer>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <TransferModal
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;
const ButtonsContainer = styled.div`
  display: flex;
`;
const Button = styled.div`
  border: 1px solid #282b2f;
  background: #159957; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #155799,
    #159957
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #155799,
    #159957
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 0.8rem;
  font-size: 1.3 rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;

  margin-right: 1rem;
  padding: 0 1 rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 500;
`;

const WalletAddress = styled.div`
  font-size: 0.8rem;
`;
