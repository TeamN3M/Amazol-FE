import { CssBaseline } from '@mui/material';
import useStyles from './styles';
import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { useEffect, useState } from 'react';
import GeoMap from './GeoMap/GeoMap';
import PieChart from './PieChart/PieChart';
import RevenueTimeLine from './RevenueTimeLine/RevenueTimeLine';
import TotalCard from './TotalCard/TotalCard';
import { getAllOrders, getItems } from '../../Services/services';

const graphdata = [
  ['Date', 'Revenue', 'Expenses'],
  [new Date(1996, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(1997, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(1998, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(1999, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2000, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2001, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2002, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2003, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2004, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2005, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2006, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2007, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2008, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
  [new Date(2009, 1, 1), 2000 * Math.random(), 2000 * Math.random()],
];

const mapdata = [
  ['Country', 'Total Revenue'],
  ['Germany', 200],
  ['Israel', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
];

const makeGraphData = (orders, items) => {
  let keyboardCounter = 0;
  let chairCounter = 0;
  let mouseCounter = 0;
  let headphoneCounter = 0;
  let controllerCounter = 0;
  let otherCounter = 0;
  let productsum = 0;
  let revenuesum = 0;
  console.log('items V');
  console.log(items);
  console.log('orders V');
  console.log(orders);
  for (const purchase of orders) {
    if (purchase.status == 'Active' || purchase.status == 'Done') {
      revenuesum += purchase.price;
      for (const product of purchase.items) {
        console.log('Got Here');
        for (const item of items) {
          console.log(item._id);
          console.log('==');
          console.log(product.item_id);
          if (item._id == product.item_id) {
            console.log(product);
            if (item.item_name.toLowerCase().includes('keyboard'))
              keyboardCounter++;
            else if (item.item_name.toLowerCase().includes('chair'))
              chairCounter++;
            else if (item.item_name.toLowerCase().includes('mouse'))
              mouseCounter++;
            else if (item.item_name.toLowerCase().includes('headphone'))
              headphoneCounter++;
            else if (item.item_name.toLowerCase().includes('controller'))
              controllerCounter++;
            else otherCounter++;
            productsum++;
          }
        }
      }
    }
  }
  return {
    keyboardCounter: keyboardCounter,
    chairCounter: chairCounter,
    mouseCounter: mouseCounter,
    headphoneCounter: headphoneCounter,
    controllerCounter: controllerCounter,
    otherCounter: otherCounter,
    productsum: productsum,
    revenuesum: revenuesum.toString(),
  };
};

let graphsdata = [];

const FinancialInfoPage = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);

  const [piedata, setPieData] = useState([
    ['Category', 'Purchases'],
    ['Mice', 1],
    ['Chairs', 1],
    ['Controllers', 1],
    ['Keyboards', 1],
    ['Other', 1],
    ['empty'],
  ]);

  const getOrders = async () => {
    const res = await getAllOrders();
    if (res.status == 200) {
      setOrders(res.data);
    }
  };

  const getAllItems = async () => {
    const res = await getItems();
    if (res.status == 200) {
      setItems(res.data);
    }
  };

  if (!items.length) getAllItems();
  if (items.length && !orders.length) getOrders();

  if (items.length && orders.length) {
    graphsdata = makeGraphData(orders, items);
    console.log('Graph Data V');

    console.log(graphsdata);
    if (piedata.length == 7)
      setPieData([
        ['Category', 'Purchases'],
        ['Mice', graphsdata.mouseCounter],
        ['Chairs', graphsdata.chairCounter],
        ['Controllers', graphsdata.controllerCounter],
        ['Keyboards', graphsdata.keyboardCounter],
        ['Other', graphsdata.otherCounter],
      ]);
  }

  const classes = useStyles();

  return (
    <>
      {/* Page Header */}
      <Card className={classes.header}>
        Financial Info Page <CssBaseline />
      </Card>
      {/* Dashboard Grid */}
      <Grid container spacing={3} className={classes.grid}>
        <Grid item sm={12} xs={12} md={12} lg={12}>
          <Card isLoading={isLoading} className={classes.griditem}>
            <RevenueTimeLine data={graphdata} /> {/* Item 1 - timeline */}
          </Card>
        </Grid>

        <Grid item sm={12} xs={12} md={6} lg={6}>
          <Card isLoading={isLoading} className={classes.griditem}>
            <PieChart data={piedata} /> {/* Item 2 - Pie Chart */}
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={6}>
          <Grid
            container
            direction='column'
            justifyContent='space-around'
            spacing={6}
          >
            <Grid item>
              <Card isLoading={isLoading} className={classes.griditem}>
                <TotalCard
                  title='Total Revenue (current month)'
                  amount={graphsdata.revenuesum + '$'}
                />
                {/* Item 3 - Counter1 */}
              </Card>
            </Grid>
            <Grid item>
              <Card isLoading={isLoading} className={classes.griditem}>
                <TotalCard
                  title='Total Expenses (current month)'
                  amount='6969$'
                />
                {/* Item 4 - Counter2 */}
              </Card>
            </Grid>
            <Grid item>
              <Card isLoading={isLoading} className={classes.griditem}>
                <TotalCard
                  title='Total Products Sold (All Time)'
                  amount={graphsdata.productsum}
                />
                {/* Item 5 - Counter3 */}
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12} md={6} lg={6}></Grid>

        <Grid item xs={12}>
          <Card isLoading={isLoading} className={classes.griditem}>
            <GeoMap data={mapdata} /> {/* Item 5 - Geo Graph */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default FinancialInfoPage;
