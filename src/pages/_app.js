import { Head } from 'next/document'
import GlobalStyle from "@/styles/globalStyle"

export default function App({ Component, pageProps }) {
  return (
    <>
      
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
}
