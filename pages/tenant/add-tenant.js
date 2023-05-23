import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import AddTenant from "@/src/container/manage-tenants/add-tenant";

const AddTenantPage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.ADD_TENANT} />
            <Header title={NAVBAR_TITLE.TENANT} />
            <AddTenant />

        </>
    )
}
export default AddTenantPage;