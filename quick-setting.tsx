import {
  DeleteNode,
  DuplicateNode,
  OpenSettingDialog,
} from "@tempi/core-editor";
import React from "react";

export const QuickSetting = () => {
  return (
    <>
      <OpenSettingDialog />
      <DuplicateNode />
      <DeleteNode />
    </>
  );
};
