import React from "react";
import { CustomElementInterface } from "../type";
import styled from "@emotion/styled";
import { getTrackingData, useStore } from "@tempi/core-renderer";

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
    platformConfig,
    collectionSlug,
    viewMoreText,
    availableTextConfig,
    buyNowTextConfig,
    productListBackgroundConfig,
    flashSaleIcon,
  } = props || {};
  const { globalData } = useStore();
  const isPreviewMode = globalData?.isPreviewMode;
  const isAddTracking = !isEditingMode && !isPreviewMode;

  console.log(bannerImage + " ??????????????");

  return (
    <Container
      backgroundColor={backgroundColor}
      {...(isAddTracking &&
        getTrackingData({
          isTrackContent: true,
          regionName: "CustomElementFlashSale",
        }))}
    >
      <Banner bannerImage={bannerImage} isAddTracking={isAddTracking} />
      <FlashSale
        backgroundColor={backgroundColor}
        isAddTracking={isAddTracking}
        endTime={timeVisibility?.endTime}
        viewMoreUrl={viewMoreUrl}
        viewMoreText={viewMoreText}
        platformConfig={platformConfig}
        collectionSlug={collectionSlug}
        availableTextConfig={availableTextConfig}
        buyNowTextConfig={buyNowTextConfig}
        productListBackgroundConfig={productListBackgroundConfig}
        flashSaleIcon={flashSaleIcon}
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
