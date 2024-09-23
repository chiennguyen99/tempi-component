import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { ProductCardProps } from "../types";
import { ProductCard } from "../ProductCard";

interface Props {
  products: ProductCardProps[];
}

const Container = styled.div`
  overflow: hidden;
  width: 100%; // Ensure the container takes full width it's allowed
  position: relative;
  touch-action: pan-y;
`;

const ProductList = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.3s ease-out;
  will-change: transform;
  transform: translateX(${(props) => props.offset}px);
`;

const SwipeableProductList: React.FC<Props> = ({ products }) => {
  const [startX, setStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  // const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = containerRef.current;
    const handleTouchStart = (e: TouchEvent) => {
      setStartX(e.touches[0].clientX);
      setIsSwiping(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - startX;
      setCurrentOffset(-(current?.offsetWidth || 0) * currentIndex + diffX);
    };

    const handleTouchEnd = () => {
      setIsSwiping(false);
      const threshold = (containerRef.current?.offsetWidth || 0) / 4;
      const endPosition =
        currentOffset -
        -(containerRef.current?.offsetWidth || 0) * currentIndex;

      if (endPosition < -threshold && currentIndex < products.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (endPosition > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        // Re-align to the current index if no change
        setCurrentOffset(
          -(containerRef.current?.offsetWidth || 0) * currentIndex
        );
      }
    };

    current?.addEventListener?.("touchstart", handleTouchStart);
    current?.addEventListener?.("touchmove", handleTouchMove);
    current?.addEventListener?.("touchend", handleTouchEnd);

    return () => {
      current?.removeEventListener?.("touchstart", handleTouchStart);
      current?.removeEventListener?.("touchmove", handleTouchMove);
      current?.removeEventListener?.("touchend", handleTouchEnd);
    };
  }, [currentIndex, isSwiping, currentOffset, products.length]);

  useEffect(() => {
    // Reset the offset whenever the currentIndex changes
    setCurrentOffset(-(containerRef?.current?.offsetWidth || 0) * currentIndex);
  }, [currentIndex]);

  if (!products || products?.length === 0) return <EmptyProduct />;

  return (
    <Container ref={containerRef}>
      <ProductList offset={currentOffset}>
        {products.map((product, index) => (
          <ProductCard {...product} key={product.sku + index} />
        ))}
      </ProductList>
    </Container>
  );
};

const EmptyProduct = () => {
  return <Wrapper>Danh sách sản phẩm trống</Wrapper>;
};

const Wrapper = styled.div`
  height: 200px;
  line-height: 200px;
  text-align: center;
`;

export default SwipeableProductList;
