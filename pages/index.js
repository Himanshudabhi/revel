import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE } from "@/src/constant/titles"
import Login from "@/src/container/login/login"
import { useEffect  } from "react"
import { OAUTH_CLIENT_ID, OAUTH_PROVIDER_AUTH_URL, OAUTH_REDIRECT_URL } from '../src/config/config';

const Home = () => {

  useEffect(() => {
    const handleLogin = async () => {
      // Redirect the user to the OAuth2 provider's authorization URL
      window.location.href = `${OAUTH_PROVIDER_AUTH_URL}?response_type=code&client_id=${OAUTH_CLIENT_ID}&scope=api.read&redirect_uri=${OAUTH_REDIRECT_URL}`;
    };
    handleLogin();
  }, []);
  // return <div>Logging in...</div>;
  return (
    <>
      <PageHeader title={HEADER_TITLE.SINGIN} />
      <Login />

    </>
  )
}
export default Home