import React, { useEffect, useState } from "react";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../constants/helpers";

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
  const navigate = useNavigate();
  const [userCart, setUserCart] = useState();

  const handleCartClicked = () => {
    navigate(paths.cart);
  };
  useEffect(() => {
    setUserCart(JSON.parse(getCart()));
  }, []);

  return (
    <IconButton onClick={handleCartClicked}>
      <StyledBadge badgeContent={userCart?.items?.length} color='primary'>
        <ShoppingCart sx={{ color: "white" }} fontSize='large' />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;
