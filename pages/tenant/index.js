import Header from "@/src/common/header/header"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles"
import PageHeader from "@/src/config/PageHeader"
import ManageTenants from "@/src/container/manage-tenants/manage-tenants"

const ManageTenantPage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.TENANT} />
            <Header title={NAVBAR_TITLE.HOME} />
            <ManageTenants/>
           
        </>
    )
}
export default ManageTenantPage
