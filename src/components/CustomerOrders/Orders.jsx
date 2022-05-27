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
import { getUserOrders, updateOrderStatus } from "../../Services/services";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";
import { getJwtKey } from "../../constants/helpers";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

const MTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      const res = await getUserOrders(user._id);

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

  const handleCancle = async (orderRow) => {
    console.log(orderRow);
    const id = orderRow;
    const res = await updateOrderStatus(id, "Cancled");
    if (res.status == 200) {
      setChangeMade(true);
    }
  };

  return (
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
                  Order ID
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
                  Order Status Update
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold ",
                    backgroundColor: "#212121",
                    color: "white ",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold ",
                    backgroundColor: "#212121",
                    color: "white ",
                  }}
                >
                  Cancel order
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
                        onClick={() => {
                          handleCancle(row._id);
                          setChangeMade(false);
                        }}
                        style={{ color: "white" }}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
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
  );
};

export default MTable;
