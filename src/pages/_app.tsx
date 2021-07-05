import {DefaultSeo} from 'next-seo'
import {ThemeProvider} from 'next-themes'
import {AppProps} from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'prism-themes/themes/prism-material-light.css'
import React, {StrictMode, useEffect} from 'react'
import SEO from '../../next-seo.json'
import '../styles/globals.css'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({Component, pageProps, router}: AppProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    void new Audio('/clack.mp3').play().catch(() => null)
  }, [router.pathname])

  return (
    <StrictMode>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  )
}

export default MyApp
