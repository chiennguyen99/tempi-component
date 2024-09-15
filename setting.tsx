import { InputConfig } from "@tempi/core-editor";
import React from "react";

export const Setting = () => {
  return (
    <>
      <InputConfig
        propKey="text"
        formItemProps={{ label: "Text", layout: "vertical" }}
      />
    </>
  );
};
