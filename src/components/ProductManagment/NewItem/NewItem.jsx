import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography
  //   Grid,
} from "@material-ui/core";
import Box from "@mui/material/Box";
// import { AddShoppingCart } from '@material-ui/icons';
import Divider from "@mui/material/Divider";
import useStyles from "./styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { addItem } from "../../../Services/services";

//import MainTheme from "../../../themes/MainTheme";
// const styleForPaper = {
//   width: '96vw',
//   height: '20vh',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const styleForIcon = {
  width: "2vw",
  height: "3vh",
  "&:hover": {
    width: "4vw",
    height: "6vh"
  }
};

// const styleForPrice = {
//   font: '5rem',
// };
const NewItem = () => {
  const [count, setCount] = React.useState(parseInt("5"));
  const [itemVisible, setItemVisible] = React.useState(true);
  const classes = useStyles();

  const handleAddItem = async () => {
    console.log("adding new item");
    const n = "dildo";
    const des = "hard!";
    const price = 10;
    const rating = 5;
    const q = 50;
    const p = ["dildo pic.png"];

    const res = await addItem(n, des, price, rating, q, true, p);
    if (res.status == 200) {
      console.log("add dildo sexes");
    } else {
      console.log("no sex fuck u");
    }
    // const id = "625fdca0feb8f3c8601f67dc";
    // const res = await getItemById(id);
    // if (res.status == 200) {
    //   console.log("get id id : ", id);
    //   console.log(res.data);
    // } else {
    //   console.log("no sex fuck u");
    // }
  };

  if (itemVisible != true) return <></>;
  return (
    <Card className={classes.card} sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "solid 1px grey"
        }}
      >
        <CardMedia
          className={classes.media}
          image={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEXp7vGprbClqazX3N/M0NPs8fTQ1Nfw9Pe1ubyytrnq8PLn7/Gjp6qssLO6vsHJzdDe4uXm6u3Dx8qnp6z1+fzi5OieoqXV2NvAwsZENSMMAAAIBUlEQVR4nO2ci3arKBRA8Sgi9wKKTar//6VzDvhKapponBWZOXuttnkQZIe3QIVgGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhPsef9/m0wiO8EPKaH8NVftpmFdlUcBSuOaGjLCE7DIDudIqyM8cJIiY/m6I81I/4tNEdQxn9Qt6sghQFRQXdp51ukVVIVd+V79P14dty5yqmUlOiKiWklO/1hhiBCpHpUxqGRP19CzEWiBQMxd8dtuLMhlAdk6g0DLE6hZ9dkSVgKEWhwWS6FHuSmYChzLPQp+HvPUOT8xvKch7BmXJ7Qs9v2CyHqF/N9sjObhh7jslwe0pPb5jfTKO+zOa53tkNZXs7UYT2YVIf9CanN6zupkEPh9DSrTdDpzfUd4aPkiodmNWp/OkN3Wt5KHtDs8CVN09vWN/Vw3r9E3EWuKZ4dkPR3BmudoiD4OoNmdMb3jY1sFpIJ0EM8EPx9IbC32SiXwu+7FHgvsM8v6Fc9Pk/c0j86DLvFc9vKORVh6EpQOXXBO/aonvFBAwpG3ttdb86d/ohiNwoJmEYRmTrg7I1wQyWizGJGD4MWa/f/l8opm0oi0cLONc5TMqGsni8gDN1KykbLu9vrCiOTXFKhrJZdvjP1hiHsCkZSp/ZWVF2zxZRY9iUDD2+aKfC93wRNX4d6RhiDmZBMT7LX1gGX9wlSMHQ22xWfEkwaiVj6O3opEnwpXX+pAyHHBwUm9d2aqRkuBTE5L7kl5ThreDLJGRo9+0fSsfw1VKZrKHeuwMsFcPdgqkYVvv38CVh+OOu/n/PcG8rw4afhQ3ZkA0/z43hG1va0zC836mwhTTuYkipdrNYYj2x4fuRseEnmHayHxLZaQ1BK3kIp9yrP5y3OOC4RVm6M563EMOayyEn12JMJzszI8QbneA6J8vCV+9pv8z5zq69sHS2gTOeP6TFUAfGHFEPDbiznpP1B50DXttmdBLCOZl32XUKhWEY5lQc1uR/hucdjSyyQ3rtD2Gy4oni7xvPUgDKJ4b7lt/PhP09E+WBw+cPAWz46QS+zXZDW2n6ZW9fu6uv+p3FiudUz6Ofgmw3rC45ZPWlXrwExeVuKVuIbZkPm4Lby/VZeKvG08c7DBUaunypBLW6M/R+U5Khu/QbgmPynxrKMchOw+z2GM/bhuV9BL8n/98xBN1XVJgGQ3oDoOpp7WwwBDOFFt6Ac3q8pVgND2mYoUNQ69ziW/pGQypUWDh6bRbXnO5Jhsfg+vChwdDYfowE8K1qfIwvw3ZDcF4pJVoIhhDqIbS0quQdRENTX6b9ed47ge+Fq0BNwa7oCOXF5coD2IYWlqZ97PYihbpYysoQchLsQv2GnP5cro7i6SZD7adIoAgLVeFxiFv0YqthhXa698pBMGxVi4Jop1sc9wRDU6tm+vK9l2VVNXR9vHqDwejePBTyKsoaMi+LqsrnslY0sivQROWVrudV46HwQoeXBYUf0q5RuYmGWsha4xeGJQqvj5for3TACBrVYdxyqyF4WVEpwRYq5qFswYbbvihW4I8jwbl4+XjYh44eanwdMtPTx3AYbCkrFR3HM81U+QyqQNZT6jPop4huDGU4fQJe6WCIJm6IBDB1WEJB087qVuZYzCHfWkqr2PiaroTJsI0lxOY12lU3gmgYvxeBqZSOZieGHhfxGJcQ31Qj3VROgwqmOa52TP8o7DYPwxgZr1wAdQVa+tAd9KiFVR6l0LAxGElYFHJbDdvh8AeM9VC2JuYENQ/4NJeLg650UMIMhuYqy7ooitpLjQWWOgVMHL1SFNNu9qBihqWA0fRHKY0LNHh5MuyHFFmFfSOYqi9wLtiAkTESu7GUYkGv5xo5GObTjjV8KhshFuOa2FuQ4ddVjEvWo2Elx5euN4bKxyf5umEMXA2GrYpnwqzElgubwYtsOsq3IZJsaz2sZRzDLPMwH6oR0NPclMuliqWhsgaMMd/f2Wiomm98ie6IL4ujkTGXoBmbmslQzoZOdSbk4WCoQ4kVbWbwD1bPnXkYSjuFvuZzPSxivmpfmtBbeOWmcrowzGUf87kYDXHGFr4LXY4DmWh4HTamTAtXo2ETDMVQXOqQh0PLgD1Wado4UQ+GPn49Tm3tLfCqQM1cFwy/yDDW9VAdyRB6OS+pzYbUNFIbWFH7Fw3HZjBXS0N6lxKKLdi4qIOvtKGNlKEtpYqObamNbSk2qhArLbU+ISUyXIIOG5nNbSk6XKusp64q5iH1h53Kta2pB489fjOvN82GlIZSZ9RtUopDwcZS1Vvdza0vNrh5S6WgsBZ7zqlCV8pXmcPOlQyFbDPdkH4w7LE3znToDzE+l4U+MAt9rbXd5v6QGvo4fhnmFlRCsUmIQ5BhbmHV1MHFuQXETiME81UY08QSW4XhSD5lOTY+EvNGh6GOn6dGcZCT15dQD8PAhb7EMLeAVozPx1HTVeH17JXGNJXYPLfA0V4bmzhr4w8NVds2Vh07vDN++9Yu/lCwYSf0lDuu7W92g+k21LhqCjlcNV4BP4aGZr5c6Bqzvu3jKQew9Dn8HSqBq7HOTElJZo4P6umc8MEH2fDghO5mHNNs/2Aqhln+8Fz776RjuO1WzuJzyRju5X9g+Pv2QfXp9B3Akzxc+8cjSfHLP8AbcB9c/TsA45740Qa1ImVe+ieNB2z6+Rwv+DEMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzDJ8w9wB5Har5VUmQAAAABJRU5ErkJggg=="
          }
          title={"name"}
          component='img'
          height={"25%"}
          width={"25%"}
          align={"left"}
        />
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <Button onClick={handleAddItem}>ADD NEW ITEM</Button>
          <Typography component='h2' className={classes.name}>
            Add a New Product
          </Typography>
        </Grid>
        <CardContent>
          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            id='code'
            color='secondary'
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input
              }
            }}
            value={"name"}
            // onChange={(e) => setCode(e.target.value)}
          />

          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            id='code'
            color='secondary'
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input
              }
            }}
            value={"description"}
            // onChange={(e) => setCode(e.target.value)}
          />
        </CardContent>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            id='code'
            color='secondary'
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input
              }
            }}
            value={"$ price"}
            // onChange={(e) => setCode(e.target.value)}
          />
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <ButtonGroup className={classes.amount}>
            <Button
              variant='text'
              className={classes.amount}
              aria-label='reduce'
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize='large' />
            </Button>
            <Button variant='text' disabled>
              <Typography
                className={classes.amount}
                style={{ alignContent: "center", fontSize: "1.5rem" }}
                gutterBottom
              >
                {" "}
                {count}
              </Typography>
            </Button>
            <Button
              variant='text'
              className={classes.amount}
              aria-label='increase'
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize='large' />
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <Button
            variant='text'
            className={classes.amount}
            aria-label='reduce'
            style={styleForIcon}
            onClick={() => {
              setItemVisible(false);
            }}
          >
            <AddBoxIcon style={styleForIcon} sx={{ color: "#00AA00" }} />
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default NewItem;
