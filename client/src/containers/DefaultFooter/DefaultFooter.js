import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DialogBox from "../../components/DialogBox";
import Login from "../../assets/img/Dash Board Asset-02.png";
import logo from "../../assets/img/logo.png";
import ButtonBox from "../../components/ButtonBox";
import { linkPageDashboard, linkPageProfile, linkLogin } from "../../routes";
import AuthService from "../../services/AuthService";

class DefaultFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      toggle: false,
      visible: false,
      showlogin: true,
    };
    this.handleClickProfile = this.handleClickProfile.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("userInfo") != null) {
      this.setState({
        showlogin: false,
      });
    }
  }

  handleClickProfile() {
    if (this.state.isClosed) {
      document.removeEventListener("click", this.handleClickProfile, false);
      this.setState({
        isClosed: false,
      });
      // document.getElementById("check").classList.remove("active");
    } else {
      document.addEventListener("click", this.handleClickProfile, false);
      this.setState({
        isClosed: true,
      });
      // document.getElementById("check").classList.add("active");
    }
  }

  onToggle() {
    console.log("nav", this.props);
    this.refs.navIcon.classList.toggle("clicked");
    this.props.onToggleMenu();
  }

  navigateTo(e) {
    if (e == "scheduled") {
      window.location.href = "/console/dash/setupmeeting?type=scheduled";
    } else if (e == "join") {
      window.location.href = "/console/joinmeeting?type=join";
    } else {
      window.location.href = "/console/joinmeeting?type=hostinstant";
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="w-full  bg-primary-color-800 z-20 absolute">
          <div
            className="w-full flex flex-col sm:flex-row justify-around items-center sm:items-start p-4 "
            style={{ maxWidth: "1366px", margin: "auto" }}>
            <div className="text-xs text-primary-color-300  w-auto">
              <NavLink to="#">
                <a>Privacy Policy </a>
              </NavLink>
              |
              <NavLink to="/terms-and-conditions">
                <a> Terms & Condtions</a>
              </NavLink>
            </div>

            <div className="text-xs text-primary-color-300  w-auto">
              <a>DolphinVC&copy; Copyright 2020</a>
            </div>
            <div className="text-xs text-primary-color-300  w-auto">
              <NavLink to="#">
                <a>Powered by Viamagus</a>
              </NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
