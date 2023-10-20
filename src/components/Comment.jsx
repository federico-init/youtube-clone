import styled from "styled-components";

import ChannelLogo from "../assets/channel.jpg";

const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <CommentContainer>
      <Image src={ChannelLogo} />
      <Details>
        <Name>
          John Doe<Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in
          soluta sed accusamus repellendus unde omnis tempora accusantium eos
          dolores.
        </Text>
      </Details>
    </CommentContainer>
  );
};

export default Comment;
