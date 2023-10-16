import styled from "styled-components";

import ChannelLogo from "../assets/channel.jpg";

const CardContainer = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  object-fit: cover;
  border-radius: 8px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <CardContainer>
      <Image src="https://i.ytimg.com/vi/JTckTjJAE6s/maxresdefault.jpg" />
      <Details>
        <ChannelImage src={ChannelLogo} />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Federico Loves Coding</ChannelName>
          <Info>123,321 views • 3 days ago</Info>
        </Texts>
      </Details>
    </CardContainer>
  );
};

export default Card;
