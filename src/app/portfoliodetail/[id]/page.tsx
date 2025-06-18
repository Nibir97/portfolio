import React from 'react';
import PorfolioDetailDesign from '../../page/portfolio-detail-design';
import { DataArray } from '@/app/data';

interface PortfolioProps {
  params: {
    id: string;
  };
}

const Portfolio = ({ params }: PortfolioProps) => {
  const { id } = params;

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
};

export default Portfolio;