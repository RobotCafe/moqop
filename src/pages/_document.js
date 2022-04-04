import { Html, Head, Main, NextScript } from 'next/document'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
      </Head>
      <body>
        <Header />

        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  )
}