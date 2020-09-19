import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Progress from "../components/Loader/Progress";
import AuthValidator from "../components/AuthValidator/AuthValidator";
import NavBar from "../components/NavBar/NavBar";
import routes from "../routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <NavBar history={this.props.history} />
        <React.Suspense fallback={<Progress />}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <AuthValidator authorizedcomponent={route.component} urlpath={route.path} {...props} />}
                />
              ) : null;
            })}
            <Redirect from="/" to="/login" />
          </Switch>
        </React.Suspense>
      </main>
    );
  }
}

export default DefaultLayout;
