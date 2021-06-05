import React, { Fragment } from 'react'
import Head from 'next/head'

function Layout({children}) {
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
        <title>Natours | Exciting tours for adventurous people</title>
      </Head>
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
