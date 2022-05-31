import { CssBaseline } from "@mui/material";
import useStyles from "./styles";
import React from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import GeoMap from "./GeoMap/GeoMap";
import PieChart from "./PieChart/PieChart";
import RevenueTimeLine from "./RevenueTimeLine/RevenueTimeLine";
import TotalCard from "./TotalCard/TotalCard";
import { getAllOrders, getItems } from "../../Services/services";

import Animation from "../Animation";
import Financial from "../../assets/financial.json";

const makeGraphData = (orders, items) => {
  let keyboardCounter = 0;
  let chairCounter = 0;
  let mouseCounter = 0;
  let headphoneCounter = 0;
  let controllerCounter = 0;
  let otherCounter = 0;
  let productsum = 0;
  let revenuesum = 0;
  let ordersByCountry = {};
  let ordersByDate = {};
  let monthrevsum = 0;
  let date, newdate;
  let today = new Date();

  const getOrderCountry = (order) => {
    let addressWords = order.address.split(" ");
    return addressWords[addressWords.length - 1];
  };

  for (const purchase of orders) {
    if (purchase.status == "Active" || purchase.status == "Done") {
      if (getOrderCountry(purchase) in ordersByCountry) {
        ordersByCountry[getOrderCountry(purchase)].push(purchase);
      } else ordersByCountry[getOrderCountry(purchase)] = [purchase];
      newdate = new Date(purchase.createdAt);
      date = new Date(
        newdate.getFullYear(),
        newdate.getMonth(),
        newdate.getDate()
      );
      if (date in ordersByDate) {
        ordersByDate[date].push(purchase);
      } else ordersByDate[date] = [purchase];
      if (newdate.getMonth() == today.getMonth()) monthrevsum += purchase.price;
      revenuesum += purchase.price;
      for (const product of purchase.items) {
        for (const item of items) {
          if (item._id == product.item_id) {
            if (item.item_name.toLowerCase().includes("keyboard"))
              keyboardCounter++;
            else if (item.item_name.toLowerCase().includes("chair"))
              chairCounter++;
            else if (item.item_name.toLowerCase().includes("mouse"))
              mouseCounter++;
            else if (item.item_name.toLowerCase().includes("headphone"))
              headphoneCounter++;
            else if (item.item_name.toLowerCase().includes("controller"))
              controllerCounter++;
            else otherCounter++;
            productsum++;
          }
        }
      }
    }
  }
  let sum = 0;
  let ordersByCountryArray = [["Country", "Total Revenue"]];
  for (let [key, orders] of Object.entries(ordersByCountry)) {
    sum = 0;
    for (const o of orders) sum += o.price;
    ordersByCountryArray.push([key, sum]);
  }

  let ordersByDateArray = [];
  for (let [key, orders] of Object.entries(ordersByDate)) {
    sum = 0;
    for (const o of orders) sum += o.price;
    ordersByDateArray.push([key, sum]);
  }
  ordersByDateArray.push(["Date", "Total Revenue"]);
  ordersByDateArray.reverse();

  return {
    keyboardCounter: keyboardCounter,
    chairCounter: chairCounter,
    mouseCounter: mouseCounter,
    headphoneCounter: headphoneCounter,
    controllerCounter: controllerCounter,
    otherCounter: otherCounter,
    productsum: productsum,
    revenuesum: revenuesum.toString(),
    ordersByCountry: ordersByCountryArray,
    ordersByDate: ordersByDateArray,
    monthRevSum: monthrevsum
  };
};

let graphsdata = [];

const FinancialInfoPage = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [mapdata, setMapdata] = useState([]);
  const [graphdata, setGraphdata] = useState([]);
  const [piedata, setPieData] = useState([
    ["Category", "Purchases"],
    ["Mice", 1],
    ["Chairs", 1],
    ["Controllers", 1],
    ["Keyboards", 1],
    ["Other", 1],
    ["empty"]
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
    if (!mapdata.length) setMapdata(graphsdata.ordersByCountry);
    if (!graphdata.length) setGraphdata(graphsdata.ordersByDate);
    console.log("graphsdata");
    console.log(graphsdata);

    if (piedata.length == 7)
      setPieData([
        ["Category", "Purchases"],
        ["Mice", graphsdata.mouseCounter],
        ["Chairs", graphsdata.chairCounter],
        ["Controllers", graphsdata.controllerCounter],
        ["Keyboards", graphsdata.keyboardCounter],
        ["Other", graphsdata.otherCounter]
      ]);
  }

  const classes = useStyles();
  if (isLoading) {
    return (
      <Grid
        container
        justifyContent='center'
        style={{ color: "white", marginBottom: 30 }}
      >
        <Animation title='Loading...' LottieCmp={Financial} />
        <CssBaseline />
      </Grid>
    );
  }
  return (
    <>
      {/* Page Header */}
      <Typography
        color={"white"}
        variant='h1'
        sx={{ alignItems: "center" }}
        class={classes.header}
      >
        Financial Information
      </Typography>{" "}
      <CssBaseline />
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
                  amount={graphsdata.monthRevSum + "$"}
                />
                {/* Item 3 - Counter1 */}
              </Card>
            </Grid>
            <Grid item>
              <Card isLoading={isLoading} className={classes.griditem}>
                <TotalCard
                  title='Total Revenue (All Time)'
                  amount={graphsdata.revenuesum + "$"}
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
