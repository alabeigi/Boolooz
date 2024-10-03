import React from 'react';
import Steps from '../../ui/steps/steps';

export const Header = () => {
  return (
    <header className="w-full flex  flex-col items-center justify-center  gap-5 mb-10">
      <h2 className="text-3xl text-brand-500 py-5">
        بــــــــــــولــــــــــــوز
      </h2>
      <Steps />
    </header>
  );
};
