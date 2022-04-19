import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("page props",pageProps)
  return <Component {...pageProps} />
}

export default MyApp
