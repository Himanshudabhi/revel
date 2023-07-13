import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE } from "@/src/constant/titles"
import Login from "@/src/container/login/login"
import Link from "next/link";
import { useEffect  } from "react"
import { OAUTH_CLIENT_ID, OAUTH_PROVIDER_AUTH_URL, OAUTH_REDIRECT_URL } from '../src/config/config';

const Home = () => {

   
  
  return (
    <>
      <PageHeader title={HEADER_TITLE.SINGIN} />
      <Login />


    </>
  )
}

export default Home