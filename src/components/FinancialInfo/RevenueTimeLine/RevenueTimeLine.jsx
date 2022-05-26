import React from 'react';
import { Chart } from 'react-google-charts';

export const options = {
  chartArea: { height: '80%', width: '90%' },
  hAxis: { slantedText: false },
  vAxis: { viewWindow: { min: 0, max: 2000 } },
  legend: { position: 'bottom' },
  curveType: 'function',
};

export default function App({ data }) {
  return (
    <Chart
      chartType='LineChart'
      width='100%'
      height='400px'
      data={data}
      options={options}
      chartPackages={['corechart', 'controls']}
      controls={[
        {
          controlType: 'ChartRangeFilter',
          options: {
            filterColumnIndex: 0,
            ui: {
              chartType: 'LineChart',
              chartOptions: {
                chartArea: { width: '90%', height: '50%' },
                hAxis: { baselineColor: 'none' },
              },
            },
          },
          controlPosition: 'bottom',
          controlWrapperParams: {
            state: {
              range: {
                start: new Date(1997, 1, 9),
                end: new Date(2022, 2, 20),
              },
            },
          },
        },
      ]}
    />
  );
}
