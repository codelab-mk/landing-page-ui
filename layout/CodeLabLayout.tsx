"use client";

import ScrollTop from "@/components/ScrollTop";
import { Fragment } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";

const CodeLabLayout = ({ children, header, footer }: { children: React.ReactNode; header?: number; footer?: number }) => {
  return (
    <Fragment>
      <Header />
      <div>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <ScrollTop />
    </Fragment>
  );
};
export default CodeLabLayout;
