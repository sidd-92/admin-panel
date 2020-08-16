import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { linkLogin } from "../../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "20px",
    cursor: "pointer",
  },
  lastItem: {
    flexGrow: 1,
  },
  logo: {
    marginRight: "40px",
    cursor: "pointer",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.logo}>
            Admin Panel
          </Typography>
          <Typography variant="body1" className={classes.title}>
            Upload
          </Typography>
          <Typography
            variant="body1"
            className={(classes.title, classes.lastItem)}
          >
            View
          </Typography>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            onClick={() => {
              props.history.push("/login");
            }}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
