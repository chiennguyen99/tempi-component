import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "@tempi/core-renderer";
import { ProductCardProps } from "../types";
import SwipeableProductList from "../SwipeableProductList/SwipeableProductList";
import { Col, Row } from "../ds";
import { Timer } from "../Timer";
import { FLASH_SALE_ICON, PLATFORM } from "../../../constants";
import { BlockCountdown } from "../BlockCountdown";

interface FlashSaleProps {
  backgroundColor?: string;
  flashSaleTextConfig?: string;
  flashSaleTextColorConfig?: string;
  flashSaleIcon?: string;
  endTime?: string;
  viewMoreUrl?: string;
  productListBackgroundConfig?: string;
}

export const FlashSale: React.FC<FlashSaleProps> = ({
  backgroundColor,
  flashSaleTextConfig = "SIÊU KHUYẾN MÃI",
  flashSaleTextColorConfig = "#F8FD00",
  flashSaleIcon,
  endTime,
  viewMoreUrl,
  productListBackgroundConfig,
}) => {
  const { device } = useStore();
  const { leftSize, centerSize, rightSize } =
    device === "desktop"
      ? {
          leftSize: 2,
          centerSize: 6,
          rightSize: 2,
        }
      : {
          leftSize: 5,
          centerSize: 1,
          rightSize: 5,
        };
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(
        "https://discovery.tekoapis.com/api/v2/search-skus-v2",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            terminalId: PLATFORM["phongvu"].terminalId,
            slug: "/c/flash-sales-3-1",
            blockId: "580",
            itemId: "72531",
            pageSize: 20,
            sorting: {},
          }),
        }
      );
    };

    fetchData()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Col size={leftSize} style={{ textAlign: "start" }}>
          <BlockCountdown endTime={endTime} />
        </Col>
        <Col size={centerSize} style={{ textAlign: "center" }}>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <FlashSaleImage
              src={
                flashSaleIcon ||
                "https://lh3.googleusercontent.com/Sa4OwefXizuyqAYBYhJ_IM7n0W-PoKyxAKt8DjqqYK-MYhhpNQP0NHBWnrw5_QSNaMkaYvHA_dYZC6OoArsu8-QRyuaGizv2"
              }
              style={{
                marginRight: 12,
                width: device === "desktop" ? 70 : 40,
              }}
            />
            {device === "desktop" && (
              <FlashSaleText color={flashSaleTextColorConfig}>
                {flashSaleTextConfig}
              </FlashSaleText>
            )}
          </Row>
        </Col>
        <Col size={rightSize} style={{ textAlign: "end" }}>
          <DetailButton backgroundColor={backgroundColor}>
            Xem chi tiết &#8250;
          </DetailButton>
        </Col>
      </Row>

      <ProductListContainer isMobile={device === "mobile"}>
        <SwipeableProductList products={products} />
        {/* <SwipeableProductList
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
        /> */}
      </ProductListContainer>
    </Container>
  );
};

const Container = styled.div`
  // margin-top: 20px;
  padding: 0px 20px 20px 20px;

  // background-color: #07a1ff;
`;

const FlashSaleImage = styled.img`
  max-width:;
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

const ProductListContainer = styled.div<{
  productListBackground?: string;
  isMobile?: boolean;
}>`
  padding: ${({ isMobile }) => (isMobile ? "12px" : "24px")};
  background-color: ${({ productListBackground }) =>
    productListBackground ? productListBackground : "#5AC5FF"};
  border-radius: 24px;
`;

const DetailButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#00a1f1"};
  color: white;
  border: 2px solid #fff;
  padding: 4px 8px;
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
    opacity: 0.7;
  }
`;
