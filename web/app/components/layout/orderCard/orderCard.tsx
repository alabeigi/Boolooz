import { OrderItem } from '@/app/apis/hooks/useGetOrders';
import { convertToJalali } from '@/app/utils/convertToJalali';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React, { memo } from 'react';

type OrderCardProps = {
  orderNumber: string;
  status: string;
  order_id: number;
  deliveryDate: string;
  items: OrderItem[];
};

const OrderCard: React.FC<OrderCardProps> = ({
  orderNumber,
  status,
  deliveryDate,
  order_id,
  items,
}) => {
  const route = useRouter();
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-gray-600 text-lg font-bold ">
          شماره سفارش: {orderNumber}
        </h6>
        <button
          onClick={() => {
            route.push(`/product-selection/${order_id}`);
          }}
          className="btn btn-outline btn-sm border-orange-600 text-orange-600 hover:bg-orange-600 hover:border-orange-600"
        >
          درخواست مرجوعی
        </button>
      </div>
      <hr className="my-2" />
      <div className="text-right">
        <div className="flex justify-between">
          <h6>وضعیت سفارش</h6>
          <h6 className="text-green-500">
            {status.includes('delivered') && 'تحویل داده شده'}
          </h6>
        </div>
        <div className="flex justify-between">
          <h6>تاریخ سفارش</h6>
          <h6>{convertToJalali(deliveryDate)}</h6>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        {items.map((item, index) => (
          <Image
            width={48}
            height={48}
            key={index}
            src={item.image}
            alt={`Item ${index + 1}`}
            className="w-12 h-12 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default memo(OrderCard);
