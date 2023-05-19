import Header from "@/src/common/header/header";
import PageHeader from "@/src/config/PageHeader";
import { HEADER_TITLE, NAVBAR_TITLE } from "@/src/constant/titles";
import SourceManagement from "@/src/container/Source/source-management";


const SourcePage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.SOURCE} />
            <Header title={NAVBAR_TITLE.SOURCE} />
            <SourceManagement />
        </>
    )
}
export default SourcePage;