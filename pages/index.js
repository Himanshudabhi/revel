import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE } from "@/src/constant/titles"
import Login from "@/src/container/login/login"

const Home = () => {
  return (
    <>
      <PageHeader title={HEADER_TITLE.SINGIN} />
      <Login />

    </>
  )
}
export default Home