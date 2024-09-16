import React from "react";
import { BaseProps } from "./styles";
import styled from "@emotion/styled";

interface ColProps extends BaseProps {
  size: number;
}

export const Col: React.FC<ColProps> = ({
  children,
  className = "",
  size,
  style,
}) => {
  return (
    <StyledCol className={className} size={size} style={style}>
      {children}
    </StyledCol>
  );
};

const StyledCol = styled.div<ColProps>`
  flex: ${({ size }) => `0 0 ${(size / 12) * 100}%`};
  max-width: ${({ size }) => `${(size / 12) * 100}%`};
`;
