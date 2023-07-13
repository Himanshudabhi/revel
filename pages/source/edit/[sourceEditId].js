import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import Mongodb from "@/src/container/Source/mongodb";
import { useRouter } from "next/router"

const EditSource = ()=>{
    const router = useRouter();
    const sourceEditId = router.query;
    return(
        <>
        {/* <PageHeader title={HEADER_TITLE.EDIT_SOURCE}/> */}
        {/* <Header title={NAVBAR_TITLE.SOURCE}/> */}
        <Mongodb sourceEditId={sourceEditId}/>
        
        </>
    )
}
export default EditSource