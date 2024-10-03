import { UseMutationOptions, useMutation } from 'react-query';

import { api } from '../api';

import { AxiosError, AxiosResponse } from 'axios';
type RefundItem = {
  product_id: number;
  qty: number;
  description: string;
};
type RefundRequest = {
  order_id: number;
  refund_items: RefundItem[];
  cart_number: string;
  full_name: string;
  phone_number: string;
};
type Detail = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
type RefundResponse = {
  detail: Detail[];
};

type Req = RefundRequest;
type Options = Omit<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UseMutationOptions<any, AxiosError, Req, unknown>,
  'mutationFn'
>;

export const useRefund = (options?: Options) => {
  const mutation = useMutation<AxiosResponse<RefundResponse>, AxiosError, Req>(
    async (body: Req) => {
      return api.post('refund', body);
    },
    options,
  );

  return mutation;
};
