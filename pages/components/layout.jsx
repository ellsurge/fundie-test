import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Script id="smartsupp-script" strategy="lazyOnload">
        {`
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = 'bcb315e9b30697e9027a90181781c1c051909ddd';
          window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
          })(document);
        `}
      </Script>

      <Header />
      {children}
      <Footer />

    </>
  );
}
