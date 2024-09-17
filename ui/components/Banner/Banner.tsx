import React from "react";
import styled from "@emotion/styled";

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage
        src="https://lh3.googleusercontent.com/D--D-fXFKGl8w4Wyta4IoDK7z7Oys8gzo6SVuhdRZ4qxvTwB9JWW1VDVtZRzvy3WIyvSdhrymW0VZkCgIRG6oBTOnZQmkJmw"
        alt="Back to School"
        width="100%"
      />
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  background-color: #07a1ff;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  border-radius: 12px;
`;
