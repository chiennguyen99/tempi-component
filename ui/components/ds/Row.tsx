import React from "react";
import styled from "@emotion/styled";
import { BaseProps } from "./styles";

export const Row: React.FC<BaseProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <Container className={className} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
