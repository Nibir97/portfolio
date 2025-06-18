'use client';
import React from 'react';
import PorfolioDetailDesign from '../../page/portfolio-detail-design';
import { DataArray } from '@/app/data';
import { useParams } from 'next/navigation';

const Portfolio = () => {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : '';

  if (!id || !DataArray[id]) {
    return <div>Invalid portfolio ID</div>
  }

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