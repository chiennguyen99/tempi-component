export interface ProductCardProps {
  sku: string;
  imageUrl: string;
  name: string;
  latestPrice: string;
  supplierRetailPrice: string;
  discountPercent?: number;
  totalAvailable?: number;
  availableTextConfig?: string;
  currencyConfig?: string;
  viewMoreUrl?: string;
  viewMoreText?: string;
  flashSaleIcon?: string;
}
