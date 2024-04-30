import React from 'react';
import Map from './map';
import Chart from './chart';
import './body.css'

const Body = () => {
  return (
    <div className='bodydiv'>
        <Chart />

        <Map />
    </div>
  )
}

export default Body