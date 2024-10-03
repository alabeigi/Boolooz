'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from '../header/header';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
    </QueryClientProvider>
  );
};

export default ClientWrapper;
