import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import Input from "@material-ui/core/Input";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import bgImage from "../../../assets/img/adminbg.jpg";
import IconButton from "@material-ui/core/IconButton";
const queryString = require("query-string");

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: "",
      email: "",
      id: "",
    };
  }
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({ email: parsed.email, id: parsed.id });
  }
  render() {
    return (
      <div className="bg-login h-screen pt-10 sm:pt-20">
        <div className="cursive bg-transparent text-white text-center text-5xl p-2 sm:p-0">
          Welcome To Admin Panel
        </div>
        <div className="w-full flex justify-center items-center p-2 sm:p-12">
          <Card className="w-full xl:w-1/3 px-0 py-0 sm:px-4 sm:py-6">
            <CardContent>
              <div className="text-2xl font-bold text-center">Reset</div>
              <form noValidate autoComplete="off">
                <div className="pt-6">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={this.state.email}
                    disabled={true}
                    fullWidth={true}
                  />
                </div>
                <div className="pt-6">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={this.state.showPassword ? "text" : "password"}
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              this.setState({
                                showPassword: !this.state.showPassword,
                              })
                            }
                            edge="end"
                          >
                            {this.state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="pt-6">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={this.state.showPassword ? "text" : "password"}
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              this.setState({
                                showPassword: !this.state.showPassword,
                              })
                            }
                            edge="end"
                          >
                            {this.state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="pt-8">
                  <Button
                    fullWidth={true}
                    style={{ padding: "14px" }}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Reset
                  </Button>
                </div>
              </form>
              <div className="w-full flex">
                <div
                  onClick={() => {
                    this.props.history.push("/forgotpassword");
                  }}
                  className="mr-auto text-sm pt-2 text-purple-800 font-medium transition duration-200 underline hover:text-pink-700 cursor-pointer"
                >
                  Forgot Password
                </div>
                <div
                  onClick={() => {
                    this.props.history.push("/signup");
                  }}
                  className="ml-auto text-sm pt-2 text-purple-800 font-medium transition duration-200 underline hover:text-pink-700 cursor-pointer"
                >
                  Sign Up Here
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

/* import React, { Component } from "react";
const queryString = require("query-string");
export default class PageReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      id: "",
    };
  }
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({ email: parsed.email, id: parsed.id });
  }
  render() {
    return (
      <div>
        Email: {this.state.email} ID: {this.state.id}
      </div>
    );
  }
}
 */
