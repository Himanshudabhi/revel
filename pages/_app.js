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

  const get = async(e)=>{
    e.preventDefault();

    // const queryParams = {
    //   client_id: 'master',
    //   redirect_uri: './',
    //   response_type: 'code',
    //   scope: 'api.read',
    // };
    const val = await axios.get(`http://master.revel-dev.test:8051/oauth2/authorize/`,queryParams)
    setapi(val.data)

    useEffect(()=>{
      get();
      // window.location.href = '/auth'; 
    },[])
  

        // 
  }





  return <>
    


    <Component {...pageProps} />
    
 

  </>

}
