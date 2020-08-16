import React from "react";

//links
export const linkLogin = "/login";
export const linkSignup = "/signup";
//authenticated links
export const linkPageDashboard = "/dash/dashboard";
export const linkPageSetupMeeting = "/dash/setupmeeting";
export const linkPageProfile = "/dash/profile";
//linknames
export const linkNamePageProfile = "Profile";

//imports
const PageProfile = React.lazy(() =>
  import("./components/views/PageProfile/PageProfile")
);

const PageHome = React.lazy(() => import("./components/views/Home/Home"));

const routes = [
  // { path: "/console", exact: true, name: "Home", component: View1 },
  // { path: "/console/view2", name: "View2", component: View2 },
  {
    path: "/dash",
    exact: true,
    name: "Home",
    component: PageHome,
  },
  {
    path: linkPageProfile,
    exact: true,
    name: linkNamePageProfile,
    component: PageProfile,
  },

  //{ path: linkSignup, exact: true, name: linkNameSignup, component: SignUp },
];

export default routes;
