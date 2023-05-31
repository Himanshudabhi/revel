import Header from "@/src/common/header/header"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles"
import RoleManagement from "@/src/container/role-management/role-management";
import PageHeader from "@/src/config/PageHeader";

const RoleManagementPage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.ROLE_MANAGEMENT} />
            <Header title={NAVBAR_TITLE.HOME} />
            <RoleManagement />

        </>
    )
}
export default RoleManagementPage