import styled from "@emotion/styled";
import React from "react";
import { ProductCardProps } from "../types";
import { formatCurrencyVND, getTrackingData } from "@tempi/core-renderer";

export const ProductCarousel: React.FC<{
  products: ProductCardProps[];
  availableTextConfig?: string;
  isAddTracking?: boolean;
  buyNowTextConfig?: string;
}> = ({
  products,
  availableTextConfig = "Còn {{totalAvailable}} sản phẩm",
  isAddTracking = true,
  buyNowTextConfig = "Mua ngay",
}) => {
  return (
    <ProductListContainer>
      {products.map(
        ({
          imageUrl,
          name,
          latestPrice,
          discountPercent,
          supplierRetailPrice,
          totalAvailable,
          sku,
        }) => (
          <ProductItem
            {...(isAddTracking &&
              getTrackingData({
                isTrackContent: true,
                regionName: "CustomElementFlashSale",
                contentName: sku,
                target: "productDetail",
              }))}
          >
            <ImageContainer>
              <ProductImage src={imageUrl} />
            </ImageContainer>
            <ProductName>{name}</ProductName>
            <PriceContainer>
              {!!latestPrice && (
                <LatestPrice>
                  {formatCurrencyVND(Number(latestPrice))}
                </LatestPrice>
              )}
              {!!discountPercent && (
                <DiscountPercent>{`${discountPercent}%`}</DiscountPercent>
              )}
            </PriceContainer>
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
            <BuyNowButton>{buyNowTextConfig.toUpperCase()}</BuyNowButton>
          </ProductItem>
        )
      )}
    </ProductListContainer>
  );
};

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const LatestPrice = styled.div`
  font-size: 20px;
  color: #ff0000;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const DiscountPercent = styled.div`
  display: inline-block;
  padding: 2px 6px 2px 6px;
  font-size: 13px;
  color: #ff3b30; /* Red text */
  background-color: #ffecec; /* Light red background */
  border: 1px solid #ff3b30; /* Red border */
  border-radius: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 0.7em;
    padding: 3px 8px;
  }
`;

const ProductListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  scrollbar-width: none;
`;

const ProductItem = styled.div`
  min-width: 200px; /* Minimum width of each product */
  flex-shrink: 0; /* Prevent shrinking */
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #fff;

  @media (max-width: 600px) {
    min-width: 150px;
  }
`;

const ImageContainer = styled.div`
  width: 100%; /* Makes the container responsive */
  position: relative;
  padding-bottom: 100%; /* Forces a square aspect ratio (1:1) */
  overflow: hidden;
  // border-radius: 10px;
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OriginalPrice = styled.p`
  text-decoration: line-through;
  color: #777;
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

const ProductName = styled.div`
  font-size: 1em;
  font-weight: 500;
  color: #000000;
  max-width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* Show "..." when text overflows */
  white-space: normal;

  @media (max-width: 600px) {
    max-width: 150px;
    font-size: 0.8em;
  }
`;
