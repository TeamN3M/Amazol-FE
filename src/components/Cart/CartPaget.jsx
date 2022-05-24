/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Grid, IconButton } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import Animation from "../Animation";
import FreeShipping from "./FreeShiping";
import EmptyCart from "../../assets/empty-cart.json";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { getUser } from "../../store/StateUser";
import { updateCart, getCartById } from "../../Services/services";
import paths from "../../constants/paths";
import { setUserCart } from "../../constants/helpers";

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
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 20px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
`;

const ProductName = styled.span`
  font-size: 20px;
  font-family: system-ui;
  color: "blue";
`;

const ProductRating = styled.span`
  font-size: 20px;
  font-family: system-ui;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  font-family: system-ui;
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
  font-family: system-ui;
  margin: 5px;
  color: white;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  font-family: system-ui;
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
  const navigate = useNavigate();
  const [cart, setCart] = useState();
  const [total, setTotal] = useState(0);

  const user = getUser(state);

  const getUserCart = async (user) => {
    if (user !== undefined) {
      const id = user._id;
      const res = await getCartById(id);
      if (res.status == 200) {
        setCart(res.data);
        setUserCart(JSON.stringify(res.data));
        console.log("got cart", res.data);
        // setTotalCart(cart.items.length);
        calcTotalPrice();
      }
    }
  };

  const handleRemoveFromCart = async (item_id) => {
    const cartID = cart._id;
    const customer_id = cart.customer_id;
    const indexOfObject = cart.items.findIndex((item) => {
      return item.item_id === item_id;
    });
    cart.items.splice(indexOfObject, 1);

    const res = await updateCart(cartID, customer_id, cart.items);
    if (res.status == 200) {
      console.log("removee item");
    }
  };

  const handleContinueShopping = () => {
    navigate(paths.search);
  };

  const handleCheckoutClicked = () => {
    navigate(paths.purchase);
  };

  const calcTotalPrice = () => {
    let totalPrice = 0;
    cart.items.map((item) => {
      totalPrice += item.item_price * item.quantity;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    getUserCart(user);
  }, []);
  // console.log("user cart from local ", user.first_name, cart.items);
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
                    <Image src={item.item_pictures[0]} />
                    <Details>
                      <ProductName>
                        <b>Name:</b> {item.item_name}
                      </ProductName>
                      <ProductRating>
                        <b>Rating:</b> {item.item_rating}
                      </ProductRating>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      {item.item_price * item.quantity} $
                    </ProductPrice>
                    <Grid>
                      <IconButton
                        onClick={() => handleRemoveFromCart(item._id)}
                        style={{ color: "red" }}
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
              <SummaryItemPrice> {total} $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice> 15 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice> -15 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> {total} $</SummaryItemPrice>
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
