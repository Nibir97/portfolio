'use client'
import React , { use } from 'react'
import PorfolioDetailDesign from '../../page/portfolio-detail-design'
import { DataArray } from '@/app/data'

const Portfolio =(props)=>{
  const params = use(props.params)

  return(
    <>
      <PorfolioDetailDesign
      data={DataArray[params.id]}
      id={params.id}
      DataArray={DataArray}
      />
    </>
  )

}

export default Portfolio