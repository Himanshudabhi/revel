import Header from "@/src/common/header/header"
import ManageTenants from "@/src/container/manage-tenants/manage-tenants"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles"
import PageHeader from "@/src/config/PageHeader"

const ManageTenantPage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.TENANT} />
            <Header title={NAVBAR_TITLE.TENANT} />
            <ManageTenants />
        </>
    )
}
export default ManageTenantPage