import { useQuery, UseQueryResult } from "react-query";

import { ORDERS_URL, NEW_ORDERS_URL } from "src/utils/urls";
import { requestService } from "src/services/RequestService";
import { Response as ResponseModel } from "src/models/Response";

export const QUERY_NAME = "orders";

const queryOptions = {
    refetchOnWindowFocus: false,
    retry: false,
};

const fetchOrders = async (
    isNewStatus: boolean,
    signal?: AbortSignal,
): Promise<ResponseModel> => {
    const localUrl = isNewStatus ? NEW_ORDERS_URL : ORDERS_URL;
    const url = requestService.addQueryParams(localUrl, {});

    return fetch(url, { signal }).then((res) => res.json());
};

export const useOrders = (
    isNewStatus = false,
): UseQueryResult<ResponseModel> =>
    useQuery(
        [QUERY_NAME, { isNewStatus }],
        ({ signal }) => fetchOrders(isNewStatus, signal),
        queryOptions,
    );
