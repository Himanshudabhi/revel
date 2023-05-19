import '@/styles/globals.css'
import "../src/assets/css/font-awesome.css"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/revel.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/style.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  // const [add ,setadd] = useState(false)
  <Head/>




  return <>
    {/* {add?<Header/> : ""}; */}
    {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
     */}
     {/* <Script src='../src/assets/js/bootstrap.bundle.min.js'/></Script>
     <Script src='../src/assets/js/jquery.slim.min.js'/></Script>
     <Script src='../src/assets/js/owl.carousel.min.js'/></Script> */}


    <Component {...pageProps} />
    
 

  </>

}
