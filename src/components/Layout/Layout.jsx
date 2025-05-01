import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import AIAssistant from "../AIAssistant/AIAssistant";

function Layout() {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
        <AIAssistant />
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
