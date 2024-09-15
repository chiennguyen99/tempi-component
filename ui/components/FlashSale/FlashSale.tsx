import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard";
// import "./styles.css";
import styled from "@emotion/styled";

// Define a type for the timer state
interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export const FlashSale: React.FC = () => {
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime({ hours: 2, minutes: 30, seconds: 60 });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <Container>
      <Header>
        <h3>Flash Sale</h3>
        <Timer>
          <span>
            {time.hours}h : {time.minutes}m : {time.seconds}s
          </span>
        </Timer>
      </Header>
      <ProductList>
        {/* Pass props to ProductCard with proper typing */}
        <ProductCard
          name="Laptop ASUS TUF Gaming"
          price="15.000.000đ"
          originalPrice="20.000.000đ"
          discount="25%"
          stock="4 sản phẩm"
        />
        <ProductCard
          name="Laptop ASUS TUF Gaming"
          price="15.000.000đ"
          originalPrice="20.000.000đ"
          discount="25%"
          stock="4 sản phẩm"
        />
        <ProductCard
          name="Laptop ASUS TUF Gaming"
          price="15.000.000đ"
          originalPrice="20.000.000đ"
          discount="25%"
          stock="4 sản phẩm"
        />
      </ProductList>
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

const ProductList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
