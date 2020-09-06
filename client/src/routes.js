import React from "react";

//links
export const linkLogin = "/login";
export const linkSignup = "/signup";
export const linkPosts = "/dash/posts";
export const linkCreatePost = "/dash/createPost";
export const linkForgotPwd = "/forgotPassword";
export const linkResetPwd = "/reset";
//authenticated links
export const linkPageProfile = "/dash/profile";
//linknames
export const linkNamePageProfile = "Profile";

//imports
const PageProfile = React.lazy(() =>
  import("./components/views/PageProfile/PageProfile")
);

const PageHome = React.lazy(() => import("./components/views/Home/Home"));
const PagePosts = React.lazy(() =>
  import("./components/views/PagePosts/PagePosts")
);
const PageCreatePost = React.lazy(() =>
  import("./components/views/PageCreatePost/PageCreatePost")
);

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
  {
    path: linkPosts,
    exact: true,
    name: "Posts",
    component: PagePosts,
  },
  {
    path: linkCreatePost,
    exact: true,
    name: "Posts",
    component: PageCreatePost,
  },

  //{ path: linkSignup, exact: true, name: linkNameSignup, component: SignUp },
];

export default routes;
