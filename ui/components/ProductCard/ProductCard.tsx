import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "../ds";
import { formatCurrencyVND } from "@tempi/core-renderer";
import { DEFAULT_IMAGE } from "../../../constants";

// Define types for the props
interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  supplierRetailPrice: string;
  discountPercent?: number;
  totalAvailable?: number;
  availableTextConfig?: string;
  // currencyConfig?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  supplierRetailPrice,
  discountPercent,
  totalAvailable,
  availableTextConfig = "Còn {{totalAvailable}} sản phẩm",
  imageUrl,
  // currencyConfig = "đ",
}) => {
  return (
    <Container>
      <ProductImage src={imageUrl || DEFAULT_IMAGE} alt={name} />
      <ProductName>{name}</ProductName>
      <Row style={{ alignItems: "center" }}>
        {!!price && (
          <Col size={9}>
            <ProductPrice>{formatCurrencyVND(Number(price))}</ProductPrice>
          </Col>
        )}
        {!!discountPercent && (
          <Col size={2}>
            <Discount>{`${discountPercent}%`}</Discount>
          </Col>
        )}
      </Row>
      {!!supplierRetailPrice && (
        <OriginalPrice>
          {formatCurrencyVND(Number(supplierRetailPrice))}
        </OriginalPrice>
      )}
      {!!totalAvailable && !!availableTextConfig && (
        <Stock>
          {availableTextConfig.replace(
            "{{totalAvailable}}",
            totalAvailable?.toString()
          )}
        </Stock>
      )}
      <BuyNowButton>MUA NGAY</BuyNowButton>
    </Container>
  );
};

const Container = styled.div`
  margin: 4px;
  width: 240px;
  padding: 15px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductPrice = styled.p`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
`;

const OriginalPrice = styled.p`
  text-decoration: line-through;
  color: #777;
`;

const ProductName = styled.p`
  font-size: 15px;
  font-weight: 400;

  line-height: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #434657;
`;

const Discount = styled.div`
  display: inline-block;
  padding: 2px 6px 2px 6px;
  font-size: 13px;
  color: #ff3b30; /* Red text */
  background-color: #ffecec; /* Light red background */
  border: 1px solid #ff3b30; /* Red border */
  border-radius: 8px;
  text-align: center;
`;

const BuyNowButton = styled.button`
  margin-top: 10px;
  background-color: #ff2638;
  color: #fff;
  padding-top: 4px;
  padding-bottom: 4px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
`;

const Stock = styled.p`
  color: #00a2fd;
  font-size: 14px;
  border: 1px dashed #00a2fd;
  border-radius: 6px;
  margin-top: 10px;
`;
