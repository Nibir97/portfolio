import React from 'react';
import PorfolioDetailDesign from '../../page/portfolio-detail-design';
import { DataArray } from '@/app/data';

export default function Portfolio({ params }: { params: { id: string } }) {
  const id = params.id;

  if (!id || !DataArray[id]) {
    return <div>Invalid portfolio ID</div>;
  }

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