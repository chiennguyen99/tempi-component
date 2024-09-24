import React from "react";
import { CustomElementInterface } from "../type";
import styled from "@emotion/styled";
import { useStore } from "@tempi/core-renderer";
// import { ThemeProvider } from "@emotion/react";

export type CustomElementProps = CustomElementInterface;

import { Banner } from "./components/Banner";
import { FlashSale } from "./components/FlashSale";

export const CustomElement: React.FC<CustomElementProps> = (props) => {
  const {
    backgroundColor,
    isEditingMode,
    bannerImage,
    timeVisibility,
    viewMoreUrl,
  } = props || {};
  const { globalData } = useStore();
  const isPreviewMode = globalData?.isPreviewMode;
  const isAddTracking = !isEditingMode && !isPreviewMode;

  return (
    <Container backgroundColor={backgroundColor}>
      <Banner bannerImage={bannerImage} isAddTracking={isAddTracking} />
      <FlashSale
        backgroundColor={backgroundColor}
        isAddTracking={isAddTracking}
        endTime={timeVisibility?.endTime}
        viewMoreUrl={viewMoreUrl}
      />
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
