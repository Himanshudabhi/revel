import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import User from "@/src/container/user/user";

const UserPage = ()=>{
    return(
        <>
        <PageHeader title={HEADER_TITLE.USER}/>
        <Header title={NAVBAR_TITLE.USER}/>
        <User/>
        
        </>
    )
}
export default UserPage;