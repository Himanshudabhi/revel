import PageHeader from "@/src/config/PageHeader";
// import { COMPONENT_TITLE } from "@/src/constant";
import Dashboard from "@/src/container/dashboard/dashboard";
import Header from "@/src/common/header/header";
import { HEADER_TITLE } from "@/src/constant/titles";

const Home = () => {
  return (
    <>
      <Header title={HEADER_TITLE.HOME}/>
      <Dashboard />
    </>
  );
};
export default Home;
