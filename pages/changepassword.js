import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import ChangePassword from "@/src/container/changePassword/chnage-password";


const ForgotPasswordPage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.CHANGE_PASSWORD} />
            <Header title={NAVBAR_TITLE.HOME} />
            <ChangePassword />

        </>
    )
}
export default ForgotPasswordPage;