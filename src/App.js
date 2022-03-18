/* eslint-disable react/react-in-jsx-scope */
import { Typography } from "@mui/material";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Typography variant='h1' alignContent='center'>
        Wellcome to AmaZol
        <Typography variant='h3' alignContent='center'>
          <p>. . . . . . . .</p>
          <p>. . . . . . . .</p>
          <p>. . . . . . . .</p>
        </Typography>
      </Typography>
      <Footer />
    </>
  );
}

export default App;
