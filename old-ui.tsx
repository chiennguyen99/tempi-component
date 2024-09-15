import React from "react";
import { CustomElementInterface } from "./type";

export type CustomElementProps = CustomElementInterface;

export const CustomElement: React.FC<CustomElementProps> = (props) => {
  const { text } = props;
  return <div>{"Custom element hehehehe"}</div>;
};

CustomElement.displayName = "CustomElement";

export default CustomElement;
