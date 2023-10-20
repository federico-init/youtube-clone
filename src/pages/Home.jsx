import styled from "styled-components";
import Card from "../components/Card";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </HomeContainer>
  );
};

export default Home;
