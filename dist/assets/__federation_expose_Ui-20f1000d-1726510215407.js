import { importShared } from './__federation_fn_import-13825f49.js';

const React$6 = await importShared('react');

const styled$6 = await importShared('@emotion/styled');

const Banner = () => {
  return /* @__PURE__ */ React$6.createElement(BannerContainer, null, /* @__PURE__ */ React$6.createElement(BannerContent, null, /* @__PURE__ */ React$6.createElement(
    "img",
    {
      src: "https://lh3.googleusercontent.com/a7Cx2pOP6i4SoSjT6_1U-1S5rg1AORcru6y2qk5pXJ-e-G7X3ics0itRykBYKijyS7eLEBPErfCTyI2wk0uFCJ7o0nyktaVY6Q=rw-w1920",
      alt: "Back to School",
      width: "100%"
    }
  ), /* @__PURE__ */ React$6.createElement(BannerText, null, /* @__PURE__ */ React$6.createElement("h2", null, "Back to School 2021"), /* @__PURE__ */ React$6.createElement("p", null, "Free shipping nationwide - Installment support up to 36 months"))));
};
const BannerContainer = styled$6.div`
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const BannerContent = styled$6.div`
  display: flex;
  align-items: center;
`;
const BannerText = styled$6.div`
  margin-left: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }
`;

const React$5 = await importShared('react');

const styled$5 = await importShared('@emotion/styled');

const Row = ({
  children,
  className = "",
  style
}) => {
  return /* @__PURE__ */ React$5.createElement(Container$4, { className, style }, children);
};
const Container$4 = styled$5.div`
  display: flex;
`;

const React$4 = await importShared('react');

const styled$4 = await importShared('@emotion/styled');

const Col = ({
  children,
  className = "",
  size,
  style
}) => {
  return /* @__PURE__ */ React$4.createElement(StyledCol, { className, size, style }, children);
};
const StyledCol = styled$4.div`
  flex: ${({ size }) => `0 0 ${size / 12 * 100}%`};
  max-width: ${({ size }) => `${size / 12 * 100}%`};
`;

const React$3 = await importShared('react');

const styled$3 = await importShared('@emotion/styled');
const ProductCard = ({
  name,
  price,
  supplierRetailPrice,
  discountPercent,
  totalAvailable,
  availableTextConfig = "Còn {{totalAvailable}} sản phẩm",
  imageUrl,
  currencyConfig = "đ"
}) => {
  return /* @__PURE__ */ React$3.createElement(Container$3, null, /* @__PURE__ */ React$3.createElement(
    ProductImage,
    {
      src: imageUrl,
      alt: name
    }
  ), /* @__PURE__ */ React$3.createElement(ProductName, null, name), /* @__PURE__ */ React$3.createElement(Row, { style: { alignItems: "center" } }, /* @__PURE__ */ React$3.createElement(Col, { size: 9 }, /* @__PURE__ */ React$3.createElement(ProductPrice, null, price + currencyConfig)), !!discountPercent && /* @__PURE__ */ React$3.createElement(Col, { size: 2 }, /* @__PURE__ */ React$3.createElement(Discount, null, `${discountPercent}%`))), /* @__PURE__ */ React$3.createElement(OriginalPrice, null, supplierRetailPrice + currencyConfig), !!totalAvailable && !!availableTextConfig && /* @__PURE__ */ React$3.createElement(Stock, null, availableTextConfig.replace(
    "{{totalAvailable}}",
    totalAvailable?.toString()
  )), /* @__PURE__ */ React$3.createElement(BuyNowButton, null, "MUA NGAY"));
};
const Container$3 = styled$3.div`
  margin: 4px;
  width: 220px;
  padding: 15px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ProductImage = styled$3.img`
  width: 100%;
`;
const ProductPrice = styled$3.p`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
`;
const OriginalPrice = styled$3.p`
  text-decoration: line-through;
  color: #777;
`;
const ProductName = styled$3.p`
  font-size: 15px;
  font-weight: 500;
`;
const Discount = styled$3.div`
  display: inline-block;
  padding: 2px 6px 2px 6px;
  font-size: 13px;
  color: #ff3b30; /* Red text */
  background-color: #ffecec; /* Light red background */
  border: 1px solid #ff3b30; /* Red border */
  border-radius: 8px;
  text-align: center;
`;
const BuyNowButton = styled$3.button`
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
const Stock = styled$3.p`
  color: #00a2fd;
  font-size: 14px;
  border: 1px dashed #00a2fd;
  border-radius: 6px;
  margin-top: 10px;
`;

const React$2 = await importShared('react');
const {useState: useState$1,useRef,useEffect: useEffect$1} = React$2;

const styled$2 = await importShared('@emotion/styled');
const Container$2 = styled$2.div`
  overflow: hidden;
  width: 100%; // Ensure the container takes full width it's allowed
  position: relative;
  touch-action: pan-y;
`;
const ProductList = styled$2.div`
  display: flex;
  transition: transform 0.3s ease-out;
  will-change: transform;
  transform: translateX(${(props) => props.offset}px);
`;
const SwipeableProductList = ({ products }) => {
  const [startX, setStartX] = useState$1(0);
  const [currentOffset, setCurrentOffset] = useState$1(0);
  const [isSwiping, setIsSwiping] = useState$1(false);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState$1(0);
  useEffect$1(() => {
    const current = containerRef.current;
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
      setIsSwiping(true);
    };
    const handleTouchMove = (e) => {
      if (!isSwiping)
        return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - startX;
      setCurrentOffset(-current.offsetWidth * currentIndex + diffX);
    };
    const handleTouchEnd = () => {
      setIsSwiping(false);
      const threshold = containerRef.current.offsetWidth / 4;
      const endPosition = currentOffset - -containerRef.current.offsetWidth * currentIndex;
      if (endPosition < -threshold && currentIndex < products.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (endPosition > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentOffset(-containerRef.current.offsetWidth * currentIndex);
      }
    };
    current.addEventListener("touchstart", handleTouchStart);
    current.addEventListener("touchmove", handleTouchMove);
    current.addEventListener("touchend", handleTouchEnd);
    return () => {
      current.removeEventListener("touchstart", handleTouchStart);
      current.removeEventListener("touchmove", handleTouchMove);
      current.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, isSwiping, currentOffset, products.length]);
  useEffect$1(() => {
    setCurrentOffset(-containerRef.current.offsetWidth * currentIndex);
  }, [currentIndex]);
  return /* @__PURE__ */ React$2.createElement(Container$2, { ref: containerRef }, /* @__PURE__ */ React$2.createElement(ProductList, { offset: currentOffset }, products.map((product, index) => /* @__PURE__ */ React$2.createElement(ProductCard, { ...product, key: product.sku + index }))));
};

const React$1 = await importShared('react');
const {useState,useEffect} = React$1;

const styled$1 = await importShared('@emotion/styled');
const FlashSale = ({
  flashSaleTextConfig = "SIÊU KHUYẾN MÃI",
  flashSaleTextColorConfig = "#F8FD00"
}) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const countdown = setInterval(() => {
      setTime({ hours: 2, minutes: 30, seconds: 60 });
    }, 1e3);
    return () => clearInterval(countdown);
  }, []);
  return /* @__PURE__ */ React$1.createElement(Container$1, null, /* @__PURE__ */ React$1.createElement(Row, null, /* @__PURE__ */ React$1.createElement(Col, { size: 2 }, /* @__PURE__ */ React$1.createElement("span", null, time.hours, "h : ", time.minutes, "m : ", time.seconds, "s")), /* @__PURE__ */ React$1.createElement(Col, { size: 4 }, /* @__PURE__ */ React$1.createElement(Row, null, /* @__PURE__ */ React$1.createElement(Col, { size: 2 }, /* @__PURE__ */ React$1.createElement(
    "img",
    {
      src: "https://lh3.googleusercontent.com/Sa4OwefXizuyqAYBYhJ_IM7n0W-PoKyxAKt8DjqqYK-MYhhpNQP0NHBWnrw5_QSNaMkaYvHA_dYZC6OoArsu8-QRyuaGizv2"
    }
  )), /* @__PURE__ */ React$1.createElement(Col, { size: 8 }, /* @__PURE__ */ React$1.createElement(FlashSaleText, { color: flashSaleTextColorConfig }, flashSaleTextConfig))))), /* @__PURE__ */ React$1.createElement(ProductListContainer, null, /* @__PURE__ */ React$1.createElement(
    SwipeableProductList,
    {
      products: Array.from(
        { length: 10 },
        (_, index) => ({
          sku: `sku${index}`,
          imageUrl: "https://lh3.googleusercontent.com/sQqMpT31Gydg-oGgnBw6hWQtaLsNFTyNgegllf6UK95ssJzsM3kKyMYKNrJW4op2NJ2KEjHaPkBAgKzEUPKQvRk4npzIX0t22w=w500-rw",
          name: "Laptop ASUS TUF Gaming",
          price: "15000000",
          supplierRetailPrice: "20000000",
          discountPercent: 10,
          totalAvailable: 4
        })
      )
    }
  )));
};
const Container$1 = styled$1.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #eaf5fc;
`;
styled$1.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
styled$1.div`
  font-size: 18px;
  color: #ff0000;
`;
const FlashSaleText = styled$1.p`
  font-size: 40px;
  color: ${({ color }) => color};
`;
const ProductListContainer = styled$1.div`
  padding: 24px;
  background-color: ${({ productListBackground }) => productListBackground ? productListBackground : "#5AC5FF"};
  border-radius: 24px;
`;

const React = await importShared('react');

const styled = await importShared('@emotion/styled');
const CustomElement = (props) => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Banner, null), /* @__PURE__ */ React.createElement(FlashSale, null));
};
const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;
CustomElement.displayName = "CustomElement";

export { CustomElement, CustomElement as default };
