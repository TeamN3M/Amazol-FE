/* eslint-disable no-confusing-arrow */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import MainTheme from "../../themes/MainTheme";
import { Grid, IconButton } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import Animation from "../Animation";
import FreeShipping from "./FreeShiping";
import EmptyCart from "../../assets/empty-cart.json";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { getUserCart, removeFromCart } from "../../store/StateUser";
import { findCartItemIndex } from "../../constants/helpers";
import paths from "../../constants/paths";

const Container = styled.div`
  backgroundcolor: #212121;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: solid white 0.1px;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: white !important;
  text-transform: capitalize;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  color: white;
  font-family: sans-serif;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  color: white;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  color: white;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: white;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  color: white;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  color: white;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  color: white;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
  font-family: cursive;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  font-family: cursive;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  text-transform: capitalize;
`;

const Cart = () => {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const user = getUser(state);
  const cart = getUserCart(state);

  console.log("cart: ", cart.items);

  const handleRemoveFromCart = (item_id) => {
    dispatch(removeFromCart({ id: item_id }));
    const item_index = findCartItemIndex(cart.items, item_id);
    console.log(JSON.parse(JSON.stringify(cart.items)).splice(item_index, 1));
  };

  const handleContinueShopping = () => {
    navigate(paths.search);
  };

  const handleCheckoutClicked = () => {
    navigate(paths.purchase);
  };

  return (
    <Container style={{ background: "#212121" }}>
      <FreeShipping />
      <Wrapper>
        <Top>
          <TopButton onClick={handleContinueShopping}>
            Continue Shopping
          </TopButton>
          <TopTexts>
            <TopText>Shopping Cart({cart?.items.length})</TopText>
          </TopTexts>
          <TopButton type='filled' onClick={handleCheckoutClicked}>
            Checkout Now
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.items.length ? (
              cart.items.map((item) => (
                <Product key={item._id}>
                  <ProductDetail>
                    <Image src={item?.item_pictures[0]} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.item_name}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item._id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      ₪ {item.item_price * item.quantity}
                    </ProductPrice>
                    <Grid>
                      <IconButton
                        onClick={() => handleRemoveFromCart(item._id)}
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </PriceDetail>
                </Product>
              ))
            ) : (
              <Grid container justifyContent='center'>
                <Animation title='Your Cart Is Empty' LottieCmp={EmptyCart} />
              </Grid>
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₪ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 15</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -15</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button
              startIcon={<PaidOutlinedIcon />}
              onClick={handleCheckoutClicked}
            >
              Checkout Now
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
