import PageHeader from "@/src/config/PageHeader"
import { HEADER_TITLE } from "@/src/constant/titles"
import Mongodb from "@/src/container/Source/mongodb"

const MongodbPage = () => {
    return (
        <>
            <PageHeader title={HEADER_TITLE.MONGO_DB} />
            <Mongodb />

        </>
    )
}
export default MongodbPage