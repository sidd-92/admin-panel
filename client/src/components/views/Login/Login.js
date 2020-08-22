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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: "",
    };
  }
  render() {
    return (
      <div className="w-full flex justify-center items-center h-screen p-2 sm:p-12">
        <Card className="w-full sm:w-1/3 h-full px-0 py-0 sm:px-4 sm:py-8">
          <CardContent>
            <div className="text-2xl font-bold">Login</div>
            <div className="text-lg font-light">Welcome To Admin Panel</div>
            <form noValidate autoComplete="off">
              <div className="pt-6">
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
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
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
