'use client'
import React , { use } from 'react'
import PorfolioDetailDesign from '../../page/portfolio-detail-design'
import { DataArray } from '@/app/data'

interface PortfolioProps {
  params: {
    id: string;
  };
}

const Portfolio: React.FC<PortfolioProps> =({ params }) => {
  const id = params.id;

  return(
    <>
      <PorfolioDetailDesign
      data={DataArray[id]}
      id={id}
      DataArray={DataArray}
      />
    </>
  );
};

export default Portfolio