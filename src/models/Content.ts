import { OrderStatus, Gender, Condition } from "./enums";

type ExtraData = {
  Key: string;
  Value: string;
};

type StockLocation = {
  Id: number;
  Name: string;
};

export interface Lines {
  Status: OrderStatus;
  IsFulfillmentByMarketplace: boolean;
  Gtin: string;
  Description: string;
  StockLocation: StockLocation;
  UnitVat: number;
  LineTotalInclVat: number;
  LineVat: number;
  OriginalUnitPriceInclVat: number;
  OriginalUnitVat: number;
  OriginalLineTotalInclVat: number;
  OriginalLineVat: number;
  OriginalFeeFixed: number;
  BundleProductMerchantProductNo: string;
  JurisCode: string;
  JurisName: string;
  VatRate: number;
  ExtraData: ExtraData[];
  ChannelProductNo: string;
  MerchantProductNo: string;
  Quantity: number;
  CancellationRequestedQuantity: number;
  UnitPriceInclVat: number;
  FeeFixed: number;
  FeeRate: number;
  Condition: Condition;
  ExpectedDeliveryDate: string;
}

export type Address = {
  Line1: string;
  Line2: string;
  Line3: string;
  Gender: Gender;
  CompanyName: string;
  FirstName: string;
  LastName: string;
  StreetName: string;
  HouseNr: string;
  HouseNrAddition: string;
  ZipCode: string;
  City: string;
  Region: string;
  CountryIso: string;
  Original: string;
};

type ContentExtraData = {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
};

export type Id = number;
export type OrderDate = string;
export type Email = string;
export type Phone = string;
export type CurrencyCode = string;

export interface Content {
  Id: Id;
  ChannelName: string;
  ChannelId: number;
  GlobalChannelName: string;
  GlobalChannelId: number;
  ChannelOrderSupport: string;
  ChannelOrderNo: string;
  MerchantOrderNo: string;
  Status: OrderStatus;
  IsBusinessOrder: boolean;
  AcknowledgedDate: string;
  CreatedAt: string;
  UpdatedAt: string;
  MerchantComment: string;
  BillingAddress: Address;
  ShippingAddress: Address;
  SubTotalInclVat: number;
  SubTotalVat: number;
  ShippingCostsVat: number;
  TotalInclVat: number;
  TotalVat: number;
  OriginalSubTotalInclVat: number;
  OriginalSubTotalVat: number;
  OriginalShippingCostsInclVat: number;
  OriginalShippingCostsVat: number;
  OriginalTotalInclVat: number;
  OriginalTotalVat: number;
  Lines: Lines[];
  ShippingCostsInclVat: number;
  Phone: Phone;
  Email: Email;
  CompanyRegistrationNo: string;
  VatNo: string;
  PaymentMethod: string;
  PaymentReferenceNo: string;
  CurrencyCode: CurrencyCode;
  OrderDate: OrderDate;
  ChannelCustomerNo: string;
  ExtraData: ContentExtraData;
}
