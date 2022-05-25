/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Grid, IconButton } from "@mui/material";
import { AddShoppingCart, Favorite } from "@mui/icons-material";
import Animation from "../Animation";
import WishListBar from "./WishListBar";
import EmptyCart from "../../assets/empty-cart.json";
import { getUser } from "../../store/StateUser";
import {
  getUserFavorites,
  updateUserFavorites,
  addItemToCart
} from "../../Services/services";
import paths from "../../constants/paths";
import { setLocalUserFavorites } from "../../constants/helpers";
import MySnackBar from "../Alerts/MySnackBar";

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
const AddCart = styled.div`
  flex: 1;
  display: flex;
  font-family: system-ui;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const AddCartTitle = styled.div`
  font-size: 30px;
  font-weight: 200;
  font-family: system-ui;
  color: white;
`;
const WishlistPage = () => {
  const state = useSelector((s) => s);
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState();
  const [changeMade, setChangeMade] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [addCart, setAddCart] = useState(false);

  const user = getUser(state);

  const getFavorites = async (user) => {
    if (user !== undefined) {
      const id = user._id;
      const res = await getUserFavorites(id);
      if (res.status == 200) {
        setFavorites(res.data);
        setLocalUserFavorites(JSON.stringify(res.data));
        setChangeMade(true);
      }
    }
  };

  const handleRemoveFromFavorites = async (item_id) => {
    const favoritesID = favorites._id;
    const customer_id = favorites.customer_id;
    const indexOfObject = favorites.items.findIndex((item) => {
      return item.item_id === item_id;
    });
    favorites.items.splice(indexOfObject, 1);

    const res = await updateUserFavorites(
      favoritesID,
      customer_id,
      favorites.items
    );
    if (res.status == 200) {
      // console.log("removee item");
      setFavorites(res.data);
      setLocalUserFavorites(JSON.stringify(res.data));
      setChangeMade(true);
      setOpenAlert(true);
    }
  };

  const handleContinueShopping = () => {
    navigate(paths.search, { state: { value: "" } });
  };

  const handleCheckoutClicked = () => {
    navigate(paths.cart);
  };

  const handleAddToCart = async (id, item) => {
    const res = await addItemToCart(id, item);
    if (res.status == 200) {
      setAddCart(true);
    }
  };

  useEffect(() => {
    getFavorites(user);
  }, [changeMade]);
  return (
    <Container style={{ background: "#212121" }}>
      <MySnackBar
        open={openAlert}
        timeout={2000}
        severity={"error"}
        message={"item remove from wish list"}
      />
      <MySnackBar
        open={addCart}
        timeout={2000}
        severity={"success"}
        message={"The product was added to your cart "}
      />
      <WishListBar />
      <Wrapper>
        <Top>
          <TopButton onClick={handleContinueShopping}>
            Continue Shopping
          </TopButton>
          <TopTexts>
            <TopText>Wish List({favorites?.items.length})</TopText>
          </TopTexts>
          <TopButton type='filled' onClick={handleCheckoutClicked}>
            Go to Cart
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {favorites?.items.length ? (
              favorites.items.map((item) => (
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
                    <ProductAmountContainer></ProductAmountContainer>
                    <ProductPrice>{item.item_price} $</ProductPrice>
                    <Grid>
                      <IconButton
                        onClick={() => handleRemoveFromFavorites(item.item_id)}
                        style={{ color: "red" }}
                      >
                        <Favorite />
                      </IconButton>
                    </Grid>
                  </PriceDetail>
                  <AddCart>
                    <AddCartTitle>{"Add Item To Cart"}</AddCartTitle>
                    <Grid>
                      <IconButton
                        onClick={() => handleAddToCart(user._id, item)}
                        style={{ color: "blue" }}
                      >
                        <AddShoppingCart />
                      </IconButton>
                    </Grid>
                  </AddCart>
                </Product>
              ))
            ) : (
              <Grid container justifyContent='center'>
                <Animation
                  title='Your Wish List Is Empty'
                  LottieCmp={EmptyCart}
                />
              </Grid>
            )}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default WishlistPage;
