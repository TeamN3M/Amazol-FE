import React from 'react';
import { Chart } from 'react-google-charts';

export const options = {
  title: 'Purchases',
  is3D: true,
};

export default function App({ data }) {
  return (
    <Chart
      chartType='PieChart'
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  );
}
