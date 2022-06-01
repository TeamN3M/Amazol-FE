

  import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        backgroundColor: '#212121',
        bgcolor: '#212121',
        border: '2px solid #FFF',
        boxShadow: 24,
        p: 4,
        padding: '20px',
        display: "flex",
        minWidth: '300px'

    },
    review:{
      marginTop: '5px',
      maxHeight: "100%",

    },
    grid:{
      display: "flex",
      maxHeight: "100%",

      padding: "1em",
      overflowY: "auto"
    }
}));
