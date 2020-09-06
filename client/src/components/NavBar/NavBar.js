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
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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
  const [isMenuOpen, setMenuOpen] = React.useState(false);
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

  const list = () => (
    <div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className="block sm:hidden">
            <IconButton
              edge="start"
              onClick={() => setMenuOpen(true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h5" className={classes.title}>
            Admin Panel
          </Typography>
          <div className="hidden sm:block">
            <Button
              onClick={() => {
                props["history"].push("/dash/posts");
                console.log(
                  props["history"].location.pathname === "/dash/posts"
                );
              }}
              style={{
                outline: "none",
                backgroundColor:
                  props["history"].location.pathname === "/dash/posts"
                    ? "white"
                    : "",
                color:
                  props["history"].location.pathname === "/dash/posts"
                    ? "#3f51b5"
                    : "white",
              }}
            >
              Manage Posts
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button
              onClick={() => {
                props["history"].push("/dash/createPost");
                console.log(
                  props["history"].location.pathname === "/dash/createPost"
                );
              }}
              style={{
                outline: "none",
                backgroundColor:
                  props["history"].location.pathname === "/dash/createPost"
                    ? "white"
                    : "",
                color:
                  props["history"].location.pathname === "/dash/createPost"
                    ? "#3f51b5"
                    : "white",
              }}
            >
              Create Posts
            </Button>
          </div>
          <div className="hidden sm:block">
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
          </div>
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
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
