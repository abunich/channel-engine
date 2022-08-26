import { useQuery, UseQueryResult } from "react-query";

import { ORDERS_URL } from "src/utils/urls";
import { requestService } from "src/services/RequestService";
import {} from "src/models/Response";

const queryOptions = {
    refetchOnWindowFocus: false,
    retry: false,
};

const fetchOrders = async (
    filters: any = {},
    signal?: AbortSignal,
): Promise<Response> => {
    const url = requestService.addQueryParams(ORDERS_URL, filters);

    return fetch(url, { signal }).then((res) => res.json());
};

export const useOrders = (
    filters = {},
): UseQueryResult<Response> =>
    useQuery(
        ["orders", { filters }],
        ({ signal }) => fetchOrders(filters, signal),
        queryOptions,
    );
