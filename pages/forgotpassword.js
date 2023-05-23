import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import ForgotPassword from "@/src/container/forgotPassword/forgot-password";


const ForgotPasswordPage =()=>{
    return(
        <>
        <PageHeader title={HEADER_TITLE.FORGOT_PASSWORD}/>
        <Header title={NAVBAR_TITLE.HOME}/>
        <ForgotPassword/>
        
        </>
    )
}
export default ForgotPasswordPage;