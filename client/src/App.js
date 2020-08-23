import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Progress from "./components/Loader/Progress";

import PageLogin from "./components/views/Login/Login";
import SignUp from "./components/views/PageSignUp/PageSignUp";
import PageReset from "./components/views/PageReset";
import { linkLogin, linkSignup, linkPosts, linkResetPwd } from "./routes";
const Page404 = React.lazy(() => import("./components/views/Page404/Page404"));
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const PagePosts = React.lazy(() =>
  import("./components/views/PagePosts/PagePosts")
);

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
              path={linkLogin}
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
              path={linkSignup}
              name="Sign Up"
              render={(props) => <SignUp {...props} />}
            />
            <Route
              exact
              path={linkResetPwd}
              name="Reset Pwd"
              render={(props) => <PageReset {...props} />}
            />
            <Route
              exact
              path={linkPosts}
              name="Posts"
              render={(props) => <PagePosts {...props} />}
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
