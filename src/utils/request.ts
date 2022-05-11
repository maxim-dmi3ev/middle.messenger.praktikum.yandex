import { queryStringify } from "./queryStringify";

export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHODS;
  timeout?: number;
  data?: any;
  headers?: Record<string, string>;
};

type OptionsWithoutMethod = Omit<Options, "method">;

type Response<T> = Promise<Omit<XMLHttpRequest, "response"> & { response: T }>;

export class HTTPTransport {
  get = <T>(
    url: string,
    options: Omit<OptionsWithoutMethod, "data"> & { data?: Record<string, any> }
  ): Response<T> => {
    const { data, ...restOptions } = options || {};
    let requestUrl = url;

    if (data) {
      requestUrl = `${url}${queryStringify(data)}`;
    }

    return this.request(requestUrl, { ...restOptions, method: METHODS.GET });
  };

  put = <T>(url: string, options: OptionsWithoutMethod): Response<T> =>
    this.request(url, { ...options, method: METHODS.PUT });

  patch = <T>(url: string, options: OptionsWithoutMethod): Response<T> =>
    this.request(url, { ...options, method: METHODS.PATCH });

  post = <T>(url: string, options: OptionsWithoutMethod): Response<T> =>
    this.request(url, { ...options, method: METHODS.POST });

  delete = <T>(url: string, options: OptionsWithoutMethod): Response<T> =>
    this.request(url, { ...options, method: METHODS.DELETE });

  request = <T>(url: string, options?: Options): Response<T> =>
    new Promise((resolve, reject) => {
      const { method = METHODS.GET, data, timeout = 5000, headers = {} } = options || {};
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.timeout = timeout;

      Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));

      xhr.onload = () => resolve(xhr);
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        let dataToSend = data;
        if (headers["Content-Type"] === "application/json") {
          dataToSend = JSON.stringify(data);
        }
        xhr.send(dataToSend);
      }
    });
}
