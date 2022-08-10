import React from "react";
import Alert from "@mui/material/Alert";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../services";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
function Orders(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { cart, token } = state;

  return (
    <Container>
      <br/>
      <br/>
      <Alert severity="success">My Orders — {cart.length}</Alert>
      <br/>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="My Cart">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>image</TableCell>
              <TableCell>price</TableCell>
              <TableCell>qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img src={row.image} width={100} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.new}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.qty}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default Orders;
