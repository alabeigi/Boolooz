'use client';

import { useGetOrders } from './apis/hooks/useGetOrders';
import OrderCard from './components/layout/orderCard/orderCard';

export default function Home() {
  const { data: orders, isLoading } = useGetOrders({
    retry: 1,
    retryDelay: 3000,
  });

  return (
    <main>
      <h1 className="px-10 pb-4">درخواست مرجوعی کالا</h1>
      <div className="grid  md:grid-cols-2 gap-4 px-10">
        {isLoading ? (
          <>
            <div className="skeleton h-[177px]"></div>
            <div className="skeleton h-[177px]"></div>
          </>
        ) : (
          orders?.data.map((data) => (
            <OrderCard
              key={data.order_id}
              deliveryDate={data.created_at}
              items={data.order_items}
              orderNumber={data.order_number}
              status={data.status}
              order_id={data.order_id}
            />
          ))
        )}
      </div>
    </main>
  );
}
