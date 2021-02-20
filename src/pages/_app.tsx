import {Provider} from 'jotai'
import {DefaultSeo} from 'next-seo'
import {ThemeProvider} from 'next-themes'
import {AppProps} from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'prism-themes/themes/prism-material-light.css'
import React, {StrictMode} from 'react'
import SEO from '../../next-seo.json'
import '../styles/globals.css'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({Component, pageProps}: AppProps) {
  return (
    <StrictMode>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default MyApp
