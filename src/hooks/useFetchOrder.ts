import { useQueryClient } from "react-query";
import { Id } from "src/models/Content";
import { Response as ResponseModel } from "src/models/Response";
import { QUERY_NAME } from "./useOrders";

export const useFetchOrder = (id: Id) => {
  const queryClient = useQueryClient();

  const data: ResponseModel | undefined = queryClient.getQueryData(QUERY_NAME, { exact: false });

  if (!data) {
    return undefined;
  }

  return data.Content.find((order) => order.Id === id);
};
