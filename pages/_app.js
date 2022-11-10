import React, {useEffect} from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../styles/meanmenu.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import {useRouter} from 'next/router'
// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
import '../styles/rtl.css'

import Layout from "../components/_App/Layout";
import { Head } from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  React.useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    router.locale === "en"
    ? import("../styles/style.css")
    : import("../styles/rtl.css")
  }, [router.locale]);
  return (
    <>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
};

export default MyApp;
