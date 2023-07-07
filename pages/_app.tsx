import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
