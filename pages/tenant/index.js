import Header from "@/src/common/header/header"
import ManageTenants from "@/src/container/manage-tenants/manage-tenants"
import { HEADER_TITLE } from "@/src/constant/titles"
import PageHeader from "@/src/config/PageHeader"

const ManageTenantPage = () => {
    return (
        <>
            <Header title={HEADER_TITLE.TENANT} />
            <ManageTenants />
        </>
    )
}
export default ManageTenantPage