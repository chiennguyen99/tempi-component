import { CustomElementInterface } from "./type";

export const DEFAULT_CUSTOM_ELEMENT: CustomElementInterface = {
  text: "Custom element",
};

export const BANNER_IMAGE_KEY = "bannerImage";

export const BACKGROUND_COLOR = "backgroundColor";

export const FLASH_SALE_ICON = "flashSaleIcon";

export const DEFAULT_IMAGE =
  "https://landingbuilder-cdn.tekoapis.com/static-assets/images/default_image.svg";

export const PLATFORM_CONFIG = "platformConfig";

export const PLATFORM = {
  phongvu: {
    domain: "https://phongvu.vn/",
    name: "Phong vũ",
    terminalId: 4,
    terminalCode: "phongvu",
  },
  taka: {
    domain: "https://online.takashimaya-vn.com/",
    name: "Takashimaya Online Store",
    terminalId: 168,
    terminalCode: "TKS_DESKTOP_0001",
  },
};
