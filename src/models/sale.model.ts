interface Icart {
  name: string;
  productId: string;
  quantity: number;
  soldPrice: string;
}

export interface saleStateType {
  cartList: Icart[];
}
