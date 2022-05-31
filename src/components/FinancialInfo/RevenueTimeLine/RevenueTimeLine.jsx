// import React from 'react';
// import { Chart } from 'react-google-charts';

// export const options = {
//   chartArea: { height: '80%', width: '90%' },
//   hAxis: { slantedText: false },

//   legend: { position: 'bottom' },
//   curveType: 'function',
// };

// export default function App({ data }) {
//   return (
//     <Chart
//       chartType='LineChart'
//       width='100%'
//       height='400px'
//       data={data}
//       options={options}
//       chartPackages={['corechart', 'controls']}
//       controls={[
//         {
//           controlType: 'ChartRangeFilter',
//           options: {
//             filterColumnIndex: 0,
//             ui: {
//               chartType: 'LineChart',
//               chartOptions: {
//                 chartArea: { width: '90%', height: '50%' },
//                 hAxis: { baselineColor: 'none' },
//               },
//             },
//           },
//           controlPosition: 'bottom',
//           controlWrapperParams: {
//             state: {
//               range: {
//                 start: new Date(1997, 1, 9),
//                 end: new Date(2022, 2, 20),
//               },
//             },
//           },
//         },
//       ]}
//     />
//   );
// }
import React from 'react';
import { Chart } from 'react-google-charts';
// export const data = [
//   ['Date', 'Value'],
//   [new Date(1996, 1, 1), 2000 * Math.random()],
//   [new Date(1997, 1, 1), 2000 * Math.random()],
//   [new Date(1998, 1, 1), 2000 * Math.random()],
//   [new Date(1999, 1, 1), 2000 * Math.random()],
//   [new Date(2000, 1, 1), 2000 * Math.random()],
//   [new Date(2001, 1, 1), 2000 * Math.random()],
//   [new Date(2002, 1, 1), 2000 * Math.random()],
//   [new Date(2003, 1, 1), 2000 * Math.random()],
//   [new Date(2004, 1, 1), 2000 * Math.random()],
//   [new Date(2005, 1, 1), 2000 * Math.random()],
//   [new Date(2006, 1, 1), 2000 * Math.random()],
//   [new Date(2007, 1, 1), 2000 * Math.random()],
//   [new Date(2008, 1, 1), 2000 * Math.random()],
//   [new Date(2009, 1, 1), 2000 * Math.random()],
// ];
export const options = {
  chartArea: { height: '80%', width: '90%' },
  hAxis: { slantedText: false },

  legend: { position: 'none' },
};
export default function App({ data }) {
  return React.createElement(Chart, {
    chartType: 'Bar',
    width: '100%',

    data: data,
    options: options,
    chartPackages: ['corechart', 'controls'],
    controls: [
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
        controlPosition: 'top',
        controlWrapperParams: {
          state: {},
        },
      },
    ],
  });
}
