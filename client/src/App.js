import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Progress from "./components/Loader/Progress";

import PageLogin from "./components/views/Login/Login";
import SignUp from "./components/views/PageSignUp/PageSignUp";
const Page404 = React.lazy(() => import("./components/views/Page404/Page404"));
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const Home = React.lazy(() => import("./components/views/Home/Home"));

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <React.Suspense fallback={<Progress />}>
          <Switch>
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login"
              render={(props) => <PageLogin {...props} />}
            />

            {/* 
              <Route
                exact
                path="/dashboard"
                name="Dashboard"
                render={(props) => <PageDashboard {...props} />}
              /> */}
            {/** Other Un-Authenticated Pages Start */}
            <Route
              exact
              path="/signup"
              name="Sign Up"
              render={(props) => <SignUp {...props} />}
            />

            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
