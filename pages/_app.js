import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import "@/styles/font-awesome.min.css";
import "@/styles/themify-icons.css";
import "@/styles/elegant-icons.css";
import "@/styles/flaticon-set.css";
import "@/styles/magnific-popup.css";
import "@/styles/owl.carousel.min.css";
import "@/styles/owl.theme.default.min.css";
import "@/styles/animate.css";
import "@/styles/bootsnav.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import "@/styles/extra.css";
import Layout from "./components/layout";
import $ from "jquery";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://code.jquery.com/jquery-1.12.4.js"></Script>
      <Script src="/js/jquery-1.12.4.min.js" />
      <Script src="/js/jquery.appear.js" />
      <Script src="/js/jquery.easing.min.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/equal-height.min.js" />
      <Script src="/js/count-to.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="/js/modernizr.custom.13711.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/wow.min.js" />
      <Script src="/js/progress-bar.min.js" />
      <Script src="/js/isotope.pkgd.min.js" />
      <Script src="/js/imagesloaded.pkgd.min.js" />
      <Script src="/js/YTPlayer.min.js" />
      <Script src="/js/circle-progress.js" />
      <Script src="/js/bootsnav.js" />
      <Script src="/js/main.js" />
    </>
  );
}
