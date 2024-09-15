import { importShared } from './__federation_fn_import-13825f49.js';
import { n as newStyled } from './emotion-styled.browser.esm-1954e952-1726417061713.js';

const React$3 = await importShared('react');
const Banner = () => {
  return /* @__PURE__ */ React$3.createElement(BannerContainer, null, /* @__PURE__ */ React$3.createElement(BannerContent, null, /* @__PURE__ */ React$3.createElement(
    "img",
    {
      src: "https://lh3.googleusercontent.com/a7Cx2pOP6i4SoSjT6_1U-1S5rg1AORcru6y2qk5pXJ-e-G7X3ics0itRykBYKijyS7eLEBPErfCTyI2wk0uFCJ7o0nyktaVY6Q=rw-w1920",
      alt: "Back to School"
    }
  )));
};
const BannerContainer = newStyled.div`
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const BannerContent = newStyled.div`
  display: flex;
  align-items: center;
`;
newStyled.div`
  margin-left: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }
`;

const React$2 = await importShared('react');
const ProductCard = ({
  name,
  price,
  originalPrice,
  discount,
  stock
}) => {
  return /* @__PURE__ */ React$2.createElement(Container$2, null, /* @__PURE__ */ React$2.createElement(
    ProductImage,
    {
      src: "https://lh3.googleusercontent.com/sQqMpT31Gydg-oGgnBw6hWQtaLsNFTyNgegllf6UK95ssJzsM3kKyMYKNrJW4op2NJ2KEjHaPkBAgKzEUPKQvRk4npzIX0t22w=w500-rw",
      alt: name
    }
  ), /* @__PURE__ */ React$2.createElement("h4", null, name), /* @__PURE__ */ React$2.createElement(ProductPrice, null, price), /* @__PURE__ */ React$2.createElement(OriginalPrice, null, originalPrice), /* @__PURE__ */ React$2.createElement(Discount, null, discount), /* @__PURE__ */ React$2.createElement("p", { className: "stock" }, stock), /* @__PURE__ */ React$2.createElement(BuyNowButton, null, "MUA NGAY"));
};
const Container$2 = newStyled.div`
  width: 220px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ProductImage = newStyled.img`
  width: 100%;
`;
const ProductPrice = newStyled.p`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
`;
const OriginalPrice = newStyled.p`
  text-decoration: line-through;
  color: #777;
`;
const Discount = newStyled.p`
  color: #28a745;
  font-size: 14px;
`;
const BuyNowButton = newStyled.button`
  margin-top: 10px;
  background-color: #ff5722;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const React$1 = await importShared('react');
const {useState,useEffect} = React$1;
const FlashSale = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const countdown = setInterval(() => {
      setTime({ hours: 2, minutes: 30, seconds: 60 });
    }, 1e3);
    return () => clearInterval(countdown);
  }, []);
  return /* @__PURE__ */ React$1.createElement(Container$1, null, /* @__PURE__ */ React$1.createElement(Header, null, /* @__PURE__ */ React$1.createElement("h3", null, "Flash Sale"), /* @__PURE__ */ React$1.createElement(Timer, null, /* @__PURE__ */ React$1.createElement("span", null, time.hours, "h : ", time.minutes, "m : ", time.seconds, "s"))), /* @__PURE__ */ React$1.createElement(ProductList, null, /* @__PURE__ */ React$1.createElement(
    ProductCard,
    {
      name: "Laptop ASUS TUF Gaming",
      price: "15.000.000đ",
      originalPrice: "20.000.000đ",
      discount: "25%",
      stock: "4 sản phẩm"
    }
  ), /* @__PURE__ */ React$1.createElement(
    ProductCard,
    {
      name: "Laptop ASUS TUF Gaming",
      price: "15.000.000đ",
      originalPrice: "20.000.000đ",
      discount: "25%",
      stock: "4 sản phẩm"
    }
  ), /* @__PURE__ */ React$1.createElement(
    ProductCard,
    {
      name: "Laptop ASUS TUF Gaming",
      price: "15.000.000đ",
      originalPrice: "20.000.000đ",
      discount: "25%",
      stock: "4 sản phẩm"
    }
  )));
};
const Container$1 = newStyled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #eaf5fc;
`;
const Header = newStyled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Timer = newStyled.div`
  font-size: 18px;
  color: #ff0000;
`;
const ProductList = newStyled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const React = await importShared('react');
const CustomElement = (props) => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Banner, null), /* @__PURE__ */ React.createElement(FlashSale, null));
};
const Container = newStyled.div`
  font-family: Arial, sans-serif;
`;
CustomElement.displayName = "CustomElement";

export { CustomElement, CustomElement as default };
