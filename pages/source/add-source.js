import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import AddSource from "@/src/container/Source/add-source";

const AddSourcePage = ()=>{
    return(
        <>
        <PageHeader title={HEADER_TITLE.ADD_SOURCE}/>
        <Header title={NAVBAR_TITLE.HOME}/>
        <AddSource/>
        </>
    )
}
export default AddSourcePage;