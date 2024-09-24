import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "@tempi/core-renderer";
import { ProductCardProps } from "../types";
import SwipeableProductList from "../SwipeableProductList/SwipeableProductList";
import { Col, Row } from "../ds";
import { Timer } from "../Timer";
import { FLASH_SALE_ICON, PLATFORM } from "../../../constants";
import { BlockCountdown } from "../BlockCountdown";
import { ProductCarousel } from "../ProductCarousel";
import { Link } from "../Link";

interface FlashSaleProps {
  backgroundColor?: string;
  flashSaleTextConfig?: string;
  flashSaleTextColorConfig?: string;
  flashSaleIcon?: string;
  endTime?: string;
  viewMoreUrl?: string;
  viewMoreText?: string;
  productListBackgroundConfig?: string;
  isAddTracking?: boolean;
}

export const FlashSale: React.FC<FlashSaleProps> = ({
  backgroundColor,
  flashSaleTextConfig = "SIÊU KHUYẾN MÃI",
  flashSaleTextColorConfig = "#F8FD00",
  flashSaleIcon,
  endTime,
  viewMoreUrl,
  viewMoreText = "Xem chi tiết",
  productListBackgroundConfig,
  isAddTracking = true,
}) => {
  const { device } = useStore();
  const { leftSize, centerSize, rightSize } =
    device === "desktop"
      ? {
          leftSize: 3,
          centerSize: 6,
          rightSize: 3,
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
          mode: "cors",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
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
      .then((data) => {
        setProducts(data.data.products);
      })
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
          <BlockCountdown endTime={endTime} isMobile={device === "mobile"} />
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
            <Link
              link={{
                href: viewMoreUrl,
              }}
              children={<>{viewMoreText} &#8250;</>}
            />
          </DetailButton>
        </Col>
      </Row>

      <ProductListContainer
        isMobile={device === "mobile"}
        productListBackground={productListBackgroundConfig}
      >
        {/* <SwipeableProductList products={products} /> */}
        <ProductCarousel products={products} isAddTracking={isAddTracking} />
        {/* <SwipeableProductList
          products={Array.from(
            { length: 20 },
            (_, index) =>
              ({
                sku: `sku${index}`,
                imageUrl:
                  "https://lh3.googleusercontent.com/sQqMpT31Gydg-oGgnBw6hWQtaLsNFTyNgegllf6UK95ssJzsM3kKyMYKNrJW4op2NJ2KEjHaPkBAgKzEUPKQvRk4npzIX0t22w=w500-rw",
                name: "Laptop ASUS TUF Gaming",
                latestPrice: "15000000",
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
  font-weight: 700;
  font-style: italic;

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

const DetailButton = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#00a1f1"};
  color: white;
  border: 1px solid #fff;
  padding: 8px 8px 8px 12px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 2px 8px 2px 8px;
  }
`;
