import Header from "@/src/common/header/header"
import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles"
import DataSet from "@/src/container/dataset/dataset"

const DataSetIndexPage = ()=>{
    return(
        <>
        <PageHeader title={HEADER_TITLE.DATASET}/>
        <Header title={NAVBAR_TITLE.DATASET}/>
        <DataSet/>
        
        </>
    )
}
export default DataSetIndexPage