"use client";
import ImageView from "@/components/ImageView";
import ScrollTop from "@/components/ScrollTop";
import VideoPopup from "@/components/VideoPopup";
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
      <VideoPopup />
      <ImageView />
      <Header header={header ?? 1} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          <Footer footer={footer ?? 1} />
        </div>
      </div>
      <ScrollTop />
    </Fragment>
  );
};
export default CodeLabLayout;
