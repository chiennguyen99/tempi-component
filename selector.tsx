import { withSelector } from "@tempi/core-editor";
import React from "react";
import { DEFAULT_CUSTOM_ELEMENT } from "./constants";
import { QuickSetting } from "./quick-setting";
import { Setting } from "./setting";
import { CustomElement, CustomElementProps } from "./ui";

export const CustomElementEditor = withSelector(
  (props: CustomElementProps) => {
    return <CustomElement {...props} />;
  },
  {
    displayName: "Custom element",
    tag: CustomElement?.displayName?.toLowerCase() || "",
    props: DEFAULT_CUSTOM_ELEMENT,
    quickSetting: QuickSetting,
    customAttributes: Setting,
    rules: {
      canDrag: () => true,
      canDrop: () => true,
    },
  }
);

export default CustomElementEditor;
