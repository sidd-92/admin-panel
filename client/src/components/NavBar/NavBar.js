import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  item: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Admin Panel
          </Typography>{" "}
          <Button
            onClick={() => {
              props["history"].push("/posts");
              console.log(props["history"].location.pathname === "/posts");
            }}
            style={{
              outline: "none",
              backgroundColor:
                props["history"].location.pathname === "/posts" ? "white" : "",
              color:
                props["history"].location.pathname === "/posts"
                  ? "#3f51b5"
                  : "white",
            }}
          >
            Manage Posts
          </Button>
          <Button
            onClick={() => {
              props["history"].push("/dash/profile");
            }}
            style={{
              outline: "none",
              backgroundColor:
                props["history"].location.pathname === "/dash/profile"
                  ? "white"
                  : "",
              color:
                props["history"].location.pathname === "/dash/profile"
                  ? "#3f51b5"
                  : "white",
            }}
          >
            Profile
          </Button>
          <div>
            <IconButton
              style={{ outline: "none" }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
