import styled from "styled-components";

import Comment from "./Comment";

import ChannelLogo from "../assets/channel.jpg";

const CommentsContainer = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Input = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  padding: 5px;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <CommentsContainer>
      <NewComment>
        <Image src={ChannelLogo} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </CommentsContainer>
  );
};

export default Comments;
