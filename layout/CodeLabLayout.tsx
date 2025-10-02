"use client";

import ScrollTop from "@/components/ScrollTop";
import { _config } from "@/utilities";
import { Fragment, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";

const CodeLabLayout = ({ children, header, footer }: { children: React.ReactNode; header?: number; footer?: number }) => {
  useEffect(() => {
    _config.smooth_scroll();
  }, []);

  return (
    <Fragment>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <ScrollTop />
    </Fragment>
  );
};
export default CodeLabLayout;
