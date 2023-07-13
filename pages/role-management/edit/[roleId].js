import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import AddRole from "@/src/container/role-management/add-role";


import { useRouter } from "next/router";

const EditTenant =()=>{
    const router = useRouter();
    const roleId = router.query;
    // console.log("tenantId",tenantId)
return(
    <>
    <PageHeader title={HEADER_TITLE.EDIT_ROLE}/>
    {/* <Header title={NAVBAR_TITLE.TENANT} /> */}
    <Header title={NAVBAR_TITLE.ROLE_MANAGEMENT}/>
    {/* <AddRol id={roleId}/> */}
    <AddRole id={roleId}/>
    
    </>
)
}

export default EditTenant;