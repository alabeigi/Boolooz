import React, { memo, useMemo } from 'react';
import ReturnRequest from '../icons/returnRequest';
import ProductSelection from '../icons/productSelection';
import BankInformation from '../icons/bankInformation';
import { usePathname } from 'next/navigation';
import { Routes } from '@/app/enums/routes.enums';

interface Step {
  id: number;
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
}

const Steps: React.FC = () => {
  const pathname = usePathname();

  const steps: Step[] = useMemo(
    () => [
      {
        id: 0,
        label: 'درخواست مرجوعی',
        isActive: pathname.includes(Routes.HOME),
        icon: <ReturnRequest />,
      },

      {
        id: 1,
        label: 'انتخاب کالاها',
        isActive: pathname.includes(Routes.PRODUCTION_SELECTION),
        icon: <ProductSelection />,
      },
      {
        id: 2,
        label: 'اطلاعات بانکی',
        isActive: pathname.includes(Routes.BANK_INFORMATION),
        icon: <BankInformation />,
      },
    ],
    [pathname],
  );
  return (
    <ul className="steps">
      {steps.map((data) => {
        const nextSteps = steps.slice(data.id + 1);
        const anyNextActive = nextSteps.some((step) => step.isActive);

        return (
          <li
            key={data.id}
            data-content=""
            className={`step ${
              data.isActive || anyNextActive ? 'step-primary' : ''
            } ${!anyNextActive && data.isActive && 'step-before-end'} `}
          >
            {data.icon}
            {data.label}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Steps);
