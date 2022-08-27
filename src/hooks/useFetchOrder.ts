import { useQueryClient } from "react-query";
import { Id } from "src/models/Content";
import { QUERY_NAME } from "./useOrders";
import { Response as ResponseModel } from "src/models/Response";

export const useFetchOrder = (id: Id) => {
  const queryClient = useQueryClient();

  const data: ResponseModel | undefined = queryClient.getQueryData(QUERY_NAME, { exact: false });

  if (!data) {
    return undefined;
  }

  return data.Content.find((order) => order.Id === id);
};
