import React from "react";
import styled from "@emotion/styled";

// Define types for the props
interface ProductCardProps {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  stock: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  discount,
  stock,
}) => {
  return (
    <Container>
      <ProductImage
        src="https://lh3.googleusercontent.com/sQqMpT31Gydg-oGgnBw6hWQtaLsNFTyNgegllf6UK95ssJzsM3kKyMYKNrJW4op2NJ2KEjHaPkBAgKzEUPKQvRk4npzIX0t22w=w500-rw"
        alt={name}
        // className="product-image"
      />
      <h4>{name}</h4>
      <ProductPrice>{price}</ProductPrice>
      <OriginalPrice>{originalPrice}</OriginalPrice>
      <Discount>{discount}</Discount>
      <p className="stock">{stock}</p>
      <BuyNowButton>MUA NGAY</BuyNowButton>
    </Container>
  );
};

const Container = styled.div`
  width: 220px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
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

const Discount = styled.p`
  color: #28a745;
  font-size: 14px;
`;

const BuyNowButton = styled.button`
  margin-top: 10px;
  background-color: #ff5722;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
