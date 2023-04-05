import React from "react";
import { Outlet } from "react-router-dom";

import "./style.scss";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout = () => (
  <React.Fragment>
    <Header />
    <main className="main">
      <Navbar />
      <Outlet />
    </main>
    {/* <Footer /> */}
  </React.Fragment>
);

export default Layout;
