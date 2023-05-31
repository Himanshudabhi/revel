import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import AddRole from "@/src/container/role-management/add-role";

const AddUserManagement = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.ROLE_ADD_USER} />
            <Header title={NAVBAR_TITLE.ROLE_MANAGEMENT} />
            <AddRole />
        </>
    )
}
export default AddUserManagement;