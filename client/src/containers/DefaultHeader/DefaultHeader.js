import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Login from "../../assets/img/Dash Board Asset-02.png";
import logo from "../../assets/img/logo.svg";
import ButtonBox from "../../components/ButtonBox";
import DialogBox from "../../components/DialogBox";
import {
  linkLogin,
  linkPageDashboard,
  linkPageProfile,
  linkSignup,
} from "../../routes";
import AuthService from "../../services/AuthService";
class DefaultHeader extends Component {
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
    console.log(window.location.pathname, "LOCATION");
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
        <DialogBox
          visible={this.state.visible}
          className="bg-white w-full sm:w-1/2 rounded-md"
          onHide={() => this.setState({ ...this.state, visible: false })}
          onClickOfFooter={""}
          includCloseButton={true}
          includeStandardHeader={true}
          position="top"
          style={{ boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.2)" }}
        />
        <div
          className="flex flex-col"
          style={{ zIndex: "99px", height: "120px" }}
        >
          <div className="bg-gray-basic">
            <div
              className="w-full flex justify-center lg:justify-end items-center p-2"
              style={{ maxWidth: "1366px", margin: "auto" }}
            >
              <div className="text-xs sm:text-h6 text-black mr-5px sm:mr-4 w-auto">
                Need Help?{" "}
                <a href="mailto:contact@dolphinvc.com">contact@dolphinvc.com</a>
              </div>

              {this.state.showlogin ? (
                <div className="flex">
                  {" "}
                  <div className="text-xs sm:text-h5 font-bold text-black  w-auto mr-5px xs:mr-4">
                    <NavLink
                      to={linkLogin}
                      className="nav-link text-black pr-2"
                    >
                      Sign In
                    </NavLink>
                  </div>
                  <div className="text-xs sm:text-h5 font-bold text-primary-color-400  w-auto mr-5px xs:mr-4">
                    <NavLink to={linkSignup} className="nav-link">
                      Sign Up
                    </NavLink>
                  </div>
                </div>
              ) : (
                <div
                  className=" relative block lg:inline-block lg:mt-0 text-primary
              hover:text-primary text-left cursor-pointer"
                >
                  <div
                    className={`focus:outline-none focus:border-white w-8`}
                    onClick={(e) => this.handleClickProfile()}
                  >
                    <img src={Login} alt="login" />
                    {/*   <div className="arrow-down" id="check"></div> */}
                  </div>
                  <div
                    className={`${
                      this.state.isClosed ? `block` : `hidden`
                    } absolute mt-2 py-2 text-base w-32 bg-white rounded-lg z-50`}
                    style={{
                      boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.2)",
                      right: "-1.5rem",
                      top: "2rem",
                    }}
                  >
                    <NavLink to={linkPageProfile}>
                      <a className="block px-4 py-2  text-gray-800 hover:bg-primary ">
                        Profile
                      </a>
                    </NavLink>
                    <NavLink to={linkPageDashboard}>
                      <a className="block px-4 py-2  text-gray-800 hover:bg-primary ">
                        Dashboard
                      </a>
                    </NavLink>
                    {/*    <hr className="w-full" /> */}
                    <div
                      onClick={() => AuthService.logOut()}
                      className="block px-4 py-2 text-gray-800 hover:bg-primary "
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <nav
            className="w-full flex items-center justify-between bg-white flex-wrap py-4 pl-0 lg:pl-4"
            style={{
              maxWidth: "1366px",
              margin: "auto",
              padding:
                window.location.pathname === "/console" ||
                window.location.pathname === "/console/" ||
                window.location.pathname === "/console/expiredlinkemail" ||
                window.location.pathname === "/console/forgotpwdexpired" ||
                window.location.pathname === "/console/forgotpassword" ||
                window.location.pathname === "/console/finalstepsemail" ||
                window.location.pathname === "/console/finalstepsphone" ||
                window.location.pathname === "/console/signup" ||
                window.location.pathname === "/console/joinmeeting"
                  ? "4px"
                  : "",
            }}
          >
            {this.state.showlogin ? (
              ""
            ) : window.location.pathname === "/console/" ||
              window.location.pathname === "/console" ||
              window.location.pathname === "/console/expiredlinkemail" ||
              window.location.pathname === "/console/forgotpwdexpired" ||
              window.location.pathname === "/console/forgotpassword" ||
              window.location.pathname === "/console/finalstepsemail" ||
              window.location.pathname === "/console/finalstepsphone" ||
              window.location.pathname === "/console/signup" ||
              window.location.pathname === "/console/joinmeeting" ? (
              ""
            ) : (
              <div
                className="w-auto lg:w-24 text-black text-sm cursor-pointer block lg:hidden"
                onClick={() => this.onToggle()}
              >
                {this.state.isExpanded ? (
                  ""
                ) : (
                  <div
                    class="nav-icon absolute lg:fixed customLeft"
                    ref="navIcon"
                  >
                    <div></div>
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center flex-shrink-0 text-white mr-0 sm:mr-6 pl-8 lg:pl-0">
              <NavLink to={linkPageDashboard} className="nav-link">
                <img
                  className="h-8 md:h-10 self-center"
                  src={logo}
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={(e) =>
                  this.setState({ isExpanded: !this.state.isExpanded })
                }
                className={
                  "flex items-center  px-3 py-2 border rounded text-teal-200 border-teal-400 mr-10" +
                  "  hover:border-white"
                }
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`${
                this.state.isExpanded ? `block` : `hidden`
              }  w-full flex-grow lg:flex lg:items-center lg:w-auto
          z-10 bg-header text-center lg:text-left mt-2 lg:mt-0`}
            >
              <div className="text-sm lg:flex-grow "></div>
              <div className="text-sm flex flex-col lg:flex-row items-center bg-white pb-4 lg:pb-0">
                <div className="cursor-pointer pr-0 sm:pr-6 text-sm text-black hover:text-primary mb-2 lg:mb-0">
                  <a
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    Home
                  </a>
                </div>

                <div className="text-button2 font-bold w-48 mb-2 lg:mb-0">
                  {/*             <NavLink to="/dash/setupmeeting?type=scheduled"> */}
                  <ButtonBox
                    buttonColor="bg-secondary"
                    buttonSize="small"
                    className="text-white"
                    rounded={true}
                    label="Setup Meeting"
                    onClick={(e) => this.navigateTo("scheduled")}
                  />
                  {/*         </NavLink> */}
                </div>
                <div className="pr-4"></div>
                <div className="text-button2 font-bold w-48 mb-2 lg:mb-0">
                  {/*    <NavLink to="/joinmeeting?type=join"> */}
                  <ButtonBox
                    buttonSize="small"
                    label="Join Meeting"
                    className="text-white"
                    rounded={true}
                    buttonColor="bg-secondary-color-800"
                    onClick={(e) => this.navigateTo("join")}
                  />
                  {/*   </NavLink> */}
                </div>
                <div className="pr-4"></div>

                <div className="text-button2 font-bold w-48">
                  <ButtonBox
                    buttonSize="small"
                    buttonColor="bg-secondary"
                    label="Host Instant Meeting"
                    className="text-white"
                    rounded={true}
                    onClick={(e) => this.navigateTo("hostinstant")}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultHeader;
