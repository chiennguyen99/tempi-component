import React, { ReactNode } from "react";

export interface BaseProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
