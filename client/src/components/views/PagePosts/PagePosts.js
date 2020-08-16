import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";
import Typography from "@material-ui/core/Typography";

export default class PagePosts extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar history={this.props.history} />
        <Typography variant="h5" gutterBottom>
          h2. Heading
        </Typography>
      </React.Fragment>
    );
  }
}
