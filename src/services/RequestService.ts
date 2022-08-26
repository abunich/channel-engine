class RequestService {
    private getURLWithApiKey(url: string) {
        return `${url}&apiKey=${process.env.REACT_APP_API_KEY}`;
    }

    public addQueryParams(url: string, params?: object) {
        if (!params) {
            return url;
        }

        const searchParam = new URLSearchParams(Object.entries(params));
        url += `?${searchParam.toString()}`;

        return this.getURLWithApiKey(url);
    }
}

export const requestService = new RequestService();
