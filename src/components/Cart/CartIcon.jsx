import React from "react";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserCart } from "../../store/StateUser";

import paths from "../../constants/paths";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid white`,
    padding: "0 4px"
  }
}));

const CartIcon = () => {
  const state = useSelector((s) => s);
  const navigate = useNavigate();
  const cart = getUserCart(state);
  console.log("your cart ", cart);

  const handleCartClicked = () => {
    navigate(paths.cart);
  };

  return (
    <IconButton onClick={handleCartClicked}>
      <StyledBadge badgeContent={cart.length} color='primary'>
        <ShoppingCart sx={{ color: "white" }} fontSize='large' />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;
