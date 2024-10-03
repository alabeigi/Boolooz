'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const ProductSelection = () => {
  const param = useParams();
  return (
    <main>
      <h1 className="px-10 pb-4">{param.order_id}</h1>
    </main>
  );
};
export default ProductSelection;
