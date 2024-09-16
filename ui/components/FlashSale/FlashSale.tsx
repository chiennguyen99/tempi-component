import React, { useState, useEffect } from "react";
// import { ProductCard } from "../ProductCard";
// import "./styles.css";
import styled from "@emotion/styled";
import { ProductCardProps } from "../types";
import { Slider } from "@tempi/core-elements";
import {} from "@tempi/core-editor";
import SwipeableProductList from "../SwipeableProductList/SwipeableProductList";
import { Col, Row } from "../ds";
// import FlashSaleImage from "../../../assets/flash-sale.svg";
// import { formatCurrencyVND } from "@tempi/core-renderer";

// Define a type for the timer state
interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

interface FlashSaleProps {
  flashSaleTextConfig?: string;
  flashSaleTextColorConfig?: string;
}

export const FlashSale: React.FC<FlashSaleProps> = ({
  flashSaleTextConfig = "SIÊU KHUYẾN MÃI",
  flashSaleTextColorConfig = "#F8FD00",
}) => {
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime({ hours: 2, minutes: 30, seconds: 60 });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <Container>
      {/* <Header>
        <h3>Flash Sale</h3>
        <Timer>
          <span>
            {time.hours}h : {time.minutes}m : {time.seconds}s
          </span>
        </Timer>
      </Header> */}
      <Row>
        <Col size={2}>
          <span>
            {time.hours}h : {time.minutes}m : {time.seconds}s
          </span>
        </Col>
        <Col size={4}>
          <Row>
            <Col size={2}>
              <img
                src={
                  "https://lh3.googleusercontent.com/Sa4OwefXizuyqAYBYhJ_IM7n0W-PoKyxAKt8DjqqYK-MYhhpNQP0NHBWnrw5_QSNaMkaYvHA_dYZC6OoArsu8-QRyuaGizv2"
                }
              />
            </Col>
            <Col size={8}>
              <FlashSaleText color={flashSaleTextColorConfig}>
                {flashSaleTextConfig}
              </FlashSaleText>
            </Col>
          </Row>
        </Col>
      </Row>

      <ProductListContainer>
        <SwipeableProductList
          products={Array.from(
            { length: 10 },
            (_, index) =>
              ({
                sku: `sku${index}`,
                imageUrl:
                  "https://lh3.googleusercontent.com/sQqMpT31Gydg-oGgnBw6hWQtaLsNFTyNgegllf6UK95ssJzsM3kKyMYKNrJW4op2NJ2KEjHaPkBAgKzEUPKQvRk4npzIX0t22w=w500-rw",
                name: "Laptop ASUS TUF Gaming",
                price: "15000000",
                supplierRetailPrice: "20000000",
                discountPercent: 10,
                totalAvailable: 4,
              }) as ProductCardProps
          )}
        />
      </ProductListContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #eaf5fc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Timer = styled.div`
  font-size: 18px;
  color: #ff0000;
`;

const FlashSaleText = styled.p<{ color: string }>`
  font-size: 40px;
  color: ${({ color }) => color};
`;

const ProductListContainer = styled.div<{ productListBackground?: string }>`
  padding: 24px;
  background-color: ${({ productListBackground }) =>
    productListBackground ? productListBackground : "#5AC5FF"};
  border-radius: 24px;
`;
