import { Content } from "./Content";

export interface Response {
  Content: Content[];
  Count: number;
  TotalCount: number;
  ItemsPerPage: number;
  StatusCode: number;
  RequestId: string;
  LogId: string;
  Success: boolean;
  Message: string;
  ValidationErrors: object;
}
