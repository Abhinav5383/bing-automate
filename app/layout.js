
export const metadata = {
  title: 'Bing Automate',
  description: 'Automate your bing searches.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="app/favicon.ico" sizes="any" />
      </head>

      <body>{children}</body>

    </html>
  )
}
