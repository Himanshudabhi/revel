import AddSource from "@/src/container/Source/add-source"
import Mongodb from "@/src/container/Source/mongodb";
import { useRouter } from "next/router"

const EditSource = ()=>{
    const router = useRouter();
    const sourceId = router.query;
    return(
        <>
            <Mongodb id={sourceId}/>
        </>
    )
}
export default EditSource