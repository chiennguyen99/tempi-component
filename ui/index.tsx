import React from "react";
import { CustomElementInterface } from "../type";
import styled from "@emotion/styled";
// import { ThemeProvider } from "@emotion/react";

export type CustomElementProps = CustomElementInterface;

import { Banner } from "./components/Banner";
import { FlashSale } from "./components/FlashSale";

export const CustomElement: React.FC<CustomElementProps> = (props) => {
  console.log(props);
  return (
    <Container backgroundColor={props.backgroundColor}>
      <Banner />
      <FlashSale backgroundColor={props.backgroundColor} />
    </Container>
  );
};

const Container = styled.div<{ backgroundColor?: string }>`
  font-family: "Roboto", sans-serif;
  background-color: ${({ backgroundColor }) => backgroundColor || "#07a1ff"};
  border-radius: 12px;
`;

CustomElement.displayName = "CustomElement";

export default CustomElement;
