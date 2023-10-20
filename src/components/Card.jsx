import styled from "styled-components";

import ChannelLogo from "../assets/channel.jpg";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: ${(props) => props.type === "sm" && "flex"};
  width: ${(props) => props.type === "sm" && "370px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  flex: 1;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "208px")};
  object-fit: cover;
  border-radius: 8px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
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

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <CardContainer type={type}>
        <Image
          src="https://i.ytimg.com/vi/JTckTjJAE6s/maxresdefault.jpg"
          type={type}
        />
        <Details type={type}>
          <ChannelImage src={ChannelLogo} type={type} />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Federico Loves Coding</ChannelName>
            <Info>
              {Math.floor(Math.random() * 1000) + 2} views •{" "}
              {Math.floor(Math.random() * 6) + 1} days ago
            </Info>
          </Texts>
        </Details>
      </CardContainer>
    </Link>
  );
};

export default Card;
