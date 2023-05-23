import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import UserProfile from "@/src/container/userprofile/user-profile";

const UserProfilePage =()=>{
    return(
        <>
        <PageHeader title={HEADER_TITLE.USER_PROFILE}/>
        <Header title={NAVBAR_TITLE.HOME}/>
        <UserProfile/>
        
        </>
    )
}
export default UserProfilePage;