import React, {StrictMode} from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import SEO from '../../next-seo.json'
import {ThemeProvider} from 'next-themes'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'prism-themes/themes/prism-material-light.css'
import {Provider} from 'jotai'

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
