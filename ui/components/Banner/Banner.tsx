import React from "react";
import styled from "@emotion/styled";
import { getTrackingData } from "@tempi/core-renderer";

export const Banner: React.FC<{
  bannerImage?: string;
  isAddTracking?: boolean;
}> = ({ bannerImage, isAddTracking = true }) => {
  const imageSrc =
    (bannerImage ||
      "https://lh3.googleusercontent.com/D--D-fXFKGl8w4Wyta4IoDK7z7Oys8gzo6SVuhdRZ4qxvTwB9JWW1VDVtZRzvy3WIyvSdhrymW0VZkCgIRG6oBTOnZQmkJmw") +
    "=rw-w1749";

  return (
    <BannerContainer
      {...(isAddTracking &&
        getTrackingData({
          isTrackContent: true,
          regionName: "CustomElementFlashSaleBanner",
          contentName: imageSrc,
        }))}
    >
      <BannerImage src={imageSrc} alt="Back to School" width="100%" />
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  border-radius: 12px;
`;
