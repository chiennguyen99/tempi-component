import React from "react";
import styled from "@emotion/styled";
import { ProductCardProps } from "../types";
import SwipeableProductList from "../SwipeableProductList/SwipeableProductList";
import { Col, Row } from "../ds";
import { Timer } from "../Timer";

interface FlashSaleProps {
  flashSaleTextConfig?: string;
  flashSaleTextColorConfig?: string;
}

export const FlashSale: React.FC<FlashSaleProps> = ({
  flashSaleTextConfig = "SIÊU KHUYẾN MÃI",
  flashSaleTextColorConfig = "#F8FD00",
}) => {
  return (
    <Container>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Col size={2} style={{ textAlign: "start" }}>
          <Timer />
        </Col>
        <Col size={6} style={{ textAlign: "center" }}>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <img
              src={
                "https://lh3.googleusercontent.com/Sa4OwefXizuyqAYBYhJ_IM7n0W-PoKyxAKt8DjqqYK-MYhhpNQP0NHBWnrw5_QSNaMkaYvHA_dYZC6OoArsu8-QRyuaGizv2"
              }
              style={{
                marginRight: 12,
              }}
            />
            <FlashSaleText color={flashSaleTextColorConfig}>
              {flashSaleTextConfig}
            </FlashSaleText>
          </Row>
        </Col>
        <Col size={2} style={{ textAlign: "end" }}>
          <DetailButton>Xem chi tiết &#8250;</DetailButton>
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
  // margin-top: 20px;
  padding: 20px;
  background-color: #07a1ff;
`;

const FlashSaleText = styled.p<{ color: string }>`
  font-size: 40px;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 540px) {
    font-size: 18px;
  }

  color: ${({ color }) => color};
`;

const ProductListContainer = styled.div<{ productListBackground?: string }>`
  padding: 24px;
  background-color: ${({ productListBackground }) =>
    productListBackground ? productListBackground : "#5AC5FF"};
  border-radius: 24px;
`;

const DetailButton = styled.button`
  background-color: #00a1f1;
  color: white;
  border: 2px solid #fff;
  padding: 10px 20px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008bd1; /* Darker background on hover */
  }
`;
