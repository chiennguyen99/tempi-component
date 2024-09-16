import React from "react";
import styled from "@emotion/styled";

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <img
          src="https://lh3.googleusercontent.com/a7Cx2pOP6i4SoSjT6_1U-1S5rg1AORcru6y2qk5pXJ-e-G7X3ics0itRykBYKijyS7eLEBPErfCTyI2wk0uFCJ7o0nyktaVY6Q=rw-w1920"
          alt="Back to School"
          width="100%"
        />
        <BannerText>
          <h2>Back to School 2021</h2>
          <p>Free shipping nationwide - Installment support up to 36 months</p>
        </BannerText>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
`;

const BannerText = styled.div`
  margin-left: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }
`;
