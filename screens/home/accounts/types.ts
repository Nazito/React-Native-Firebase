export type TypeCurrency = "Black" | "Standart";
export type TypeName = "UAH" | "USD";

export interface IAccount {
  _id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  currency: TypeCurrency;
  name: TypeName;
}
