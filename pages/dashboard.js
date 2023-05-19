import PageHeader from "@/src/config/PageHeader";
// import { COMPONENT_TITLE } from "@/src/constant";
import Dashboard from "@/src/container/dashboard/dashboard";
import Header from "@/src/common/header/header";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";

const Home = () => {
  return (
    <>
      <PageHeader title={HEADER_TITLE.DASHBOARD} />
      <Header title={NAVBAR_TITLE.HOME} />
      <Dashboard />
    </>
  );
};
export default Home;
