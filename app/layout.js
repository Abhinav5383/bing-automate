import Head from "next/head";
import Script from "next/script";


export const metadata = {
  title: 'Bing Automate',
  description: 'Automate your bing searches.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="app/favicon.ico" sizes="any" />

        <link
          rel="stylesheet"
          href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.css"
        />


      </Head>

      <body>
        {children}

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8708861413425372"
          crossorigin="anonymous"></script>

      </body>

    </html>
  )
}
