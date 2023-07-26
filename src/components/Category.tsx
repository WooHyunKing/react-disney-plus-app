import React from "react";
import { styled } from "styled-components";
import Wrap from "./Wrap";

const Category = () => {
  return (
    <Container>
      <Wrap name="disney" />
      <Wrap name="marvel" />
      <Wrap name="pixar" />
      <Wrap name="starwars" />
      <Wrap name="national" />
    </Container>
  );
};

export default Category;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
