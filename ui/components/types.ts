export interface ProductCardProps {
  sku: string;
  imageUrl: string;
  name: string;
  price: string;
  supplierRetailPrice: string;
  discountPercent?: number;
  totalAvailable?: number;
  availableTextConfig?: string;
  currencyConfig?: string;
}
