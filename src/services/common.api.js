import { REVEL_TENANT_API } from "./MainApi";

export const commonApi = (path, data, type) => {
    let url = `${path}/v1/${type}`;//tenant/v1/getAll
    let res = REVEL_TENANT_API.GET(url,data);//
    return res;
};



const commonApi1 =(path,data,type)=>{
    let url = `${path}/v1/${type}`;//tenant/v1/getAll   

}

// http://master.revel-dev.test:9876/tenant/v1/getAll
// console.log("res",commonApi)

 

//   export const commonParamsApi = (path, data, type) => {
//     let url;
//     let res = "";
//     if (type === "update") {
//       url = `${path}/${type}/${data?._id}`;
//       delete data._id;
//       res = VBS_API.POST(url, data);
//     } else {
//       url = `${path}/${type}/${data?.id}`;
//       res = VBS_API.POST(url, {});
//     }
  
//     return res;
//   };
  
//   export const commonImageUpload = async (path, data) => {
//     let url = path;
//     let res = VBS_API.POST(url, data);
//     return res;
//   };