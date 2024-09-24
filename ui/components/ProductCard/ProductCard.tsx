import React from "react";
import styled from "@emotion/styled";
import { Row, Col } from "../ds";
import { formatCurrencyVND, ImageBase } from "@tempi/core-renderer";
import { DEFAULT_IMAGE } from "../../../constants";
import { Link } from "../Link";

// Define types for the props
interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  supplierRetailPrice: string;
  discountPercent?: number;
  totalAvailable?: number;
  availableTextConfig?: string;
  link?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  supplierRetailPrice,
  discountPercent,
  totalAvailable,
  availableTextConfig = "Còn {{totalAvailable}} sản phẩm",
  imageUrl,
  link = "",
}) => {
  const productVisualElement = (
    <ProductVisualWrapper>
      <div style={{ position: "relative", paddingBottom: "100%" }}>
        <StyledImage
          commonStyle={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
          autoOptimize
          src={imageUrl || DEFAULT_IMAGE}
          alt={name}
        />
      </div>
    </ProductVisualWrapper>
  );

  const renderProductVisual = () => {
    // Thêm link khi click vào sản phẩm dựa trên đường dẫn trong cấu hình danh sách sản phẩm.
    return (
      <Link
        {...{
          eventType: "link",
          link: { openNewTab: true, nofollow: true, href: link },
        }}
      >
        {productVisualElement}
      </Link>
    );
  };

  return (
    <Container>
      {/* <ProductImage src={imageUrl || DEFAULT_IMAGE} alt={name} /> */}
      {renderProductVisual()}
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
  padding: 15px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductVisualWrapper = styled.div`
  position: relative;
  margin-bottom: 4px;
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

const StyledImage = styled(ImageBase)`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  height: 100%;
  inset: 0;
`;
