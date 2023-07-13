import axios from "axios"

export default function Button({ apiUrl,apiId,items }) {
    
    const handleTenantDelete = async (id) => {
        let token = "";
        const storedToken = localStorage.getItem("token");
        if (storedToken !== 'undefined') {
          token = JSON.parse(storedToken);
        }
        else {
          router.push("http://master.revel-himanshu.test:3000");
        }
        try {
          await axios.put(`${apiUrl}/${apiId}`, "", {
           headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
              "Accept": "*/*",
              "Cache-Control": "no-cache",
              "Accept-Encoding": "gzip, deflate, br"
            }
          });
          setTenantData(tenantData.filter((item) => item.id !== id));
          console.log('Item deleted successfully.');
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };
    return (
        <>
         <button onClick={()=>handleTenantDelete({items})}>Delete API</button>
        </>
    )
}

// http://master.revel-dev.test:9876/tenant/v1/delete/
