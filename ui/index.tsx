import React from "react";
import { CustomElementInterface } from "../type";
import styled from "@emotion/styled";
// import { ThemeProvider } from "@emotion/react";

export type CustomElementProps = CustomElementInterface;

import { Banner } from "./components/Banner";
import { FlashSale } from "./components/FlashSale";

export const CustomElement: React.FC<CustomElementProps> = (props) => {
  return (
    <Container>
      <Banner />
      <FlashSale />
    </Container>
  );
};

const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;

CustomElement.displayName = "CustomElement";

export default CustomElement;
