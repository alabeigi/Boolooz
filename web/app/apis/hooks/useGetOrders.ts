import { UseQueryOptions, useQuery } from 'react-query';

import { AxiosError, AxiosResponse } from 'axios';
import { api } from '../api';
export type OrderItem = {
  product_id: number;
  image: string;
  product_name: string;
  price: number;
  refundable: boolean;
  brand: string;
  qty: number;
};

type Order = {
  order_id: number;
  order_number: string;
  created_at: string;
  status: string;
  order_items: OrderItem[];
};

type Orders = Array<Order>;
type Data = AxiosResponse<Orders>;
export type IQueryOption<Data, Error extends AxiosError = AxiosError> = Omit<
  UseQueryOptions<Data, Error>,
  'queryKey' | 'queryFn'
>;

export const useGetOrders = (options?: IQueryOption<Data>) => {
  const query = useQuery<Data, AxiosError>(
    ['get-orders'],
    async () => {
      return await api.get(`orders`);
    },
    options,
  );

  return query;
};
