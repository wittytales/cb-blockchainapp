import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../../lib/sanity";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";

const Receive = ({ setAction, selectedToken, walletAddress }) => {
  const [imageUrl, setimageUrl] = useState(null);
  const [copied, setcopied] = useState(null);
  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setimageUrl(url);
  }, [selectedToken]);
  return (
    <Wrapper>
      <Content>
        <QRContainer>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
            alt=""
          />
        </QRContainer>
        <Divider />
        <Row>
          <CoinSelectList>
            <Icon>
              <img src={imageUrl} alt="" />
            </Icon>
            <CoinName>{selectedToken.name}</CoinName>
          </CoinSelectList>
        </Row>
        <Divider />
        <Row>
          <div>
            <Title>{selectedToken.symbol} Address</Title>
            <Address>{walletAddress}</Address>
            <CopyButton
              onClick={() => {
                navigator.clipboard.writeText(walletAddress);
                setcopied(true);
              }}
            >
              {copied ? <FaCheck style={{ color: "#27ad75" }} /> : <BiCopy />}
            </CopyButton>
          </div>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default Receive;
const Wrapper = styled.div`
  height: 100%;
`;
const Content = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const QRContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;
const Row = styled.div`
  display: flex;

  width: 100%;

  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  color: #8a919e;

  font-size: 1.2rem;
`;
const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8 rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    /* margin: -0.5rem 1rem; */

    height: 120%;
    width: 120%;
    place-items: center;
    object-fit: cover;
  }
`;
const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3;

  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const CoinName = styled.div`
  flex: 1;

  border: none;

  background: none;

  outline: none;
  color: white;

  font-size: 1.2rem;
  margin-right: 0.5rem;

  text-wrap: wrap;
`;

const Title = styled.div`
  color: white;
  margin-bottom: 0.5rem;
`;

const Address = styled.div`
  font-size: 0.8rem;
`;

const CopyButton = styled.div`
  cursor: pointer;
`;
