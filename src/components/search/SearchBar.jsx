import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import paths from "../../constants/paths";
//import Products from "../ItemCatalog/Products/Products";
import { useNavigate } from "react-router-dom";
//import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchBar = () => {
  const navigate = useNavigate();
  //   const handleSearch = (e) => {
  //     const searchText = e.target.value;
  //     const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
  //     setDisplayProducts(matchedProducts);
  // }
  const [searchTerm, setSearchTerm] = useState("");
  const toComponentProducts = () => {
    navigate(paths.search, { state: { value: searchTerm } });
  };
  return (
    <Search>
      <Box /*onSubmit={handleSubmit}*/>
        <IconButton onClick={() => toComponentProducts()}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </IconButton>
        <StyledInputBase
          className="input"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          type="text"
          value={searchTerm}
          name="s"
          id="site-search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
    </Search>
  );
};

export default SearchBar;
