import '@/styles/globals.css'
import "../src/assets/css/font-awesome.css"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/revel.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/style.css";
import Header from '@/src/common/header/header'

export default function App({ Component, pageProps }) {
  

  return <>
  {/* <Header/> */}
  <Component {...pageProps} />
  
  </>
  
}
