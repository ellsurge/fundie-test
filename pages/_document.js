import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Buscom - Multipurpose Business and Corporate Template"
        />

        <link rel="shortcut icon" href="/img/favi.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
