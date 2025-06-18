import React from 'react';
import PorfolioDetailDesign from '../../page/portfolio-detail-design';
import { DataArray } from '@/app/data';

interface PortfolioProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioPage({ params }: PortfolioProps) {
  const { id } = await params;

  return (
    <>
      <PorfolioDetailDesign
        data={DataArray[id]}
        id={id}
        DataArray={DataArray}
      />
    </>
  );
}