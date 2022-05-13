import { Html, Head, Main, NextScript } from 'next/document'
// import Header from 'components/header'
// import Footer from 'components/footer'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
        <link href="/images/favicon.png" rel="icon" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;800&display=swap" rel="stylesheet" />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
      </Head>
      <body>
        {/* <Header /> */}

        <Main />
        <NextScript />

        {/* <Footer /> */}
      </body>
    </Html>
  )
}