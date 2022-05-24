import { orders } from "./OrdersList";
import React from "react";
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

const MTable = () => {
  let USERS = [],
    STATUSES = ["Active", "Pending", "Blocked"];

  {
    orders.map(
      (order, index) =>
        (USERS[index] = {
          id: order.orderid,
          productname: order.productname,
          orderdate: order.orderdate,
          status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
        })
    );
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                  Costumer Name
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold ",
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
                  Order Date
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
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {USERS.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={6}>
                        <Typography
                          style={{ fontWeight: "bold", color: "#7EC8E3" }}
                        >
                          {row.id}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.productname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary">{row.orderdate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        backgroundColor:
                          (row.status === "Active" && "green") ||
                          (row.status === "Pending" && "blue") ||
                          (row.status === "Blocked" && "orange"),

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
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={USERS.length}
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
