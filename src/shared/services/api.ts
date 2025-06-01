
import type { Method, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAxiosInstance } from '../axios/axios.instance';

export class Api {
  constructor(private readonly url: string) {}

  private request<T>(
    method: Method,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return getAxiosInstance().request<T>({
      method,
      url: this.url,
      data,
      ...config,
    });
  }

  get<T = any>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request('GET', undefined, config);
  }

  post<T = any>(data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request('POST', data, config);
  }

  put<T = any>(data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request('PUT', data, config);
  }

  delete<T = any>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request('DELETE', undefined, config);
  }

  withParams(params: Record<string, any>): Api {
    const query = new URLSearchParams(params).toString();
    return new Api(`${this.url}?${query}`);
  }
}
