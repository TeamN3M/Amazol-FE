import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { getAllOrders, updateOrderStatus } from "../../Services/services";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";
import { getJwtKey } from "../../constants/helpers";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppBar, Toolbar } from "@mui/material";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const ITEM_HEIGHT = 48;

const MTable = () => {
  const [HourValue, setHourValue] = useState("");
  const [DateValue, setDateValue] = useState("");
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const handleHourChange = (newValue) => {
    setHourValue(newValue);
  };

  const options = [
    {
      name: "Pending",
    },
    {
      name: "Active",
    },
    {
      name: "Done",
    },
    {
      name: "Cancled",
    },
  ];

  const state = useSelector((s) => s);
  const user = getUser(state);

  useEffect(() => {
    const localJwt = getJwtKey();
    const func = async () => getUser();

    if (localJwt) {
      func().then((res) => {
        if (res.status === 200) {
          console.log("find user");
        } else {
          console.log("not found");
        }
      });
    }
  }, []);
  const [changeMade, setChangeMade] = useState(false);
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    if (user !== undefined) {
      const res = await getAllOrders();

      if (res.status == 200) {
        console.log("got orders");
        console.log(res.data);
        setOrders(res.data);
      }
    }
  };
  if (!orders.length) getOrders();
  useEffect(() => {
    getOrders(user);
  }, [changeMade]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [status_new, setStatus] = useState("");
  // const [orderRow, setOrderRow] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSave = async (orderRow) => {
    console.log(status_new);
    console.log(orderRow);
    const id = orderRow;
    const newStatus = status_new;
    const res = await updateOrderStatus(id, newStatus);
    if (res.status == 200) {
      setChangeMade(true);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      direction="column"
      alignItems="center"
      padding={10}
    >
      <Grid>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#212121 !important ",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",

            // width: "min",
            // margin: "auto",
          }}
          style={{
            border: "solid white 0.1px",
          }}
        >
          <Toolbar>
            <Typography
              variant="body1"
              style={{
                color: "white",
                marginTop: 10,
              }}
            >
              Add new delivery time
            </Typography>
            <Grid item xs={6}>
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Date desktop"
                      inputFormat="MM/dd/yyyy"
                      value={DateValue}
                      onChange={handleDateChange}
                      // error={!!DateValueErrorText}
                      // helperText={DateValueErrorText}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color: "white !important" },
                            input: { color: "white !important" },
                            label: { color: "white !important" },
                          }}
                        />
                      )}
                    />
                    <TimePicker
                      label="Time"
                      value={HourValue}
                      onChange={handleHourChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color: "white !important" },
                            input: { color: "white !important" },
                            label: { color: "white !important" },
                          }}
                        />
                      )}
                      // error={!!HourValueErrorText}
                      // helperText={HourValueErrorText}
                      shouldDisableTime={(timeValue, clockType) => {
                        return clockType === "minutes" && timeValue > 0;
                      }}
                      style={{
                        color: "white",
                      }}
                      autoFocus
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
            </Grid>
            <Button
              sx={{ m: 2, textTransform: "capitalize" }}
              variant="outlined"
              size="small"
              onClick={handleSave}
            >
              ADD
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid>
        <CssBaseline />
        <Container component="main" sx={{ mb: 25, mt: 15 }}>
          <TableContainer
            component={Paper}
            style={{ margin: "10px 10px", width: "100%" }}
            sx={{ borderColor: "red " }}
          >
            <Table
              style={{
                backgroundColor: "#212121",
                minWidth: 700,
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Order ID <br></br>Costumer ID
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold ",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Products Number
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold ",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Order Date
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold ",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Current Status
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold ",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Change Status
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold ",
                      backgroundColor: "#212121",
                      color: "white ",
                    }}
                  >
                    Save
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row._id}>
                      <TableCell>
                        <Grid container>
                          <Grid item lg={6}>
                            <Typography
                              style={{ fontWeight: "bold", color: "#7EC8E3" }}
                            >
                              {row._id}
                            </Typography>
                            <Typography
                              style={{ fontWeight: "bold", color: "#7EC8E3" }}
                            >
                              {row.customer_id}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Typography color="primary" variant="subtitle2">
                          {row.price}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="primary">
                          {row.items.length}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="primary">
                          {row.updatedAt.substring(0, 10)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            backgroundColor:
                              (row.status === "Pending" && "blue") ||
                              (row.status === "Active" && "green") ||
                              (row.status === "Done" && "orange") ||
                              (row.status === "Cancled" && "red"),

                            fontSize: "0.75rem",
                            color: "white ",
                            borderRadius: 8,
                            padding: "3px 10px",
                            display: "inline-block",
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                          style={{ color: "white" }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          disableScrollLock={true}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 5,
                              width: "20ch",
                            },
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem
                              key={option.name}
                              style={{ color: "black" }}
                              selected={option === "Pyxis"}
                              divider="true"
                              onClick={() => {
                                setStatus(option.name);
                                handleClose();
                              }}
                            >
                              {option.name}
                            </MenuItem>
                          ))}
                        </Menu>
                      </TableCell>
                      <TableCell>
                        <Button
                          sx={{
                            m: 2,
                            textTransform: "capitalize",
                            color: "white !important",
                            border: "solid 1px white",
                            backgroundcolor: "#333333 !important",
                          }}
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            handleSave(row._id);
                            setChangeMade(false);
                          }}
                        >
                          SAVE
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 50]}
                  component="div"
                  count={orders.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MTable;
