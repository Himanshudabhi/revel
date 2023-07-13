import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";

import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import AddTenant from "@/src/container/manage-tenants/add-tenant";
import ManageTenants from "@/src/container/manage-tenants/manage-tenants";
import { useRouter } from "next/router";

const EditTenant =()=>{
    const router = useRouter();
    const tenantId = router.query;
    // console.log("tenantId",tenantId)
return(
    <>
    <PageHeader title={HEADER_TITLE.EDIT_TENANT} />
    {/* <Header title={NAVBAR_TITLE.TENANT} /> */}
    <Header title={NAVBAR_TITLE.TENANT}/>
    <AddTenant id={tenantId}/>
    
    </>
)
}

export default EditTenant;