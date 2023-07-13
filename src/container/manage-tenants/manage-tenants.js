// import Header from "@/src/common/header/header";
// import Image from "next/image";
// // import { LogoImg } from "@/src/assets/img"
// import { QuotoneIcon, RydotIcon } from "@/src/assets/img/icons";
// import { LogoImg } from "@/src/assets/img";
// import logo from "../../assets/img/logo.svg";
// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { BUTTON_LABEL } from "@/src/constant/labels";
// import Link from "next/link";
// import { ROUTE_URL } from "@/src/constant/url";
// import queryString from "query-string";
// import axios from "axios";
// import useFetch from "@/src/customHooks/useGetApi";

// const ManageTenants = (props) => {
//   const { title } = props;
//   const [visibal, setvisible] = useState(7);
//   const [tenantData, setTenantData] = useState(null);
//   const [flag, setflag] = useState(false);

//   const showmoreitem = () => {
//     setvisible((predata) => predata + 8);
//   };
//   const { data, isLoading, error } = useFetch(
//     "http://master.revel-dev.test:9876/tenant/v1/getAll"
//   );
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   // const handelAddTenant = async () => {
//   //   let token = "";
//   //   if (typeof window !== "undefined") {
//   //     token = JSON.parse(localStorage.getItem("token"));
//   //   }
//   //   const response = await axios.get(
//   //     "http://master.revel-dev.test:9876/tenant/v1/getAll",
//   //     {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${token}`,
//   //         "Access-Control-Allow-Origin": "*",
//   //         "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
//   //       },
//   //     }
//   //   );
//   //   setTenantData(response?.data?.data);
//   // };

//   // useEffect(() => {
//   //   handelAddTenant();
//   // }, []);
//   console.log("tenantData", tenantData);

//   return (
//     <>
//       <div className="wrapper app-header">
//         <main className="main-content" id="main">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="login-form  p-0 mt-5">
//                   <div className="col-9 mx-auto ">
//                     <div className="text-center mb-5">
//                       <h3 className="font-36 mb-3">Manage the Tenants </h3>
//                       <p className="font-16 ">
//                         You can add, edit and delete Tenant anytime.
//                       </p>
//                     </div>
//                     <div className="row data-lake-cards tenants ">
//                       {data?.slice(0, visibal).map((items) => {
//                         return (
//                           <>
//                             <div className="col-12 col-md-3 mb-4">
//                               <div className="card text text-center mb-0">
//                                 <Link href={ROUTE_URL.DASHBOARD}>
//                                   <div className="icon">
//                                     <Image
//                                       src={items.logo}
//                                       alt=""
//                                       className="img-fluid mx-auto"
//                                       width="140"
//                                     />
//                                   </div>
//                                 </Link>
//                                 {items.profile.name}
//                                 <div className="actions">
//                                   <ul className="list-unstyled d-flex flex-row mb-0 justify-content-center">
//                                     <li>
//                                       <Link href="#">
//                                         <i className="r-icon r-icon-info-outline"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="r-icon r-icon-pencil"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="#"
//                                         className="text-danger"
//                                         onClick={() =>
//                                           deleteTenantRecord(items.id)
//                                         }
//                                       >
//                                         <i className="r-icon r-icon-delete"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         );
//                       })}
//                       <div className="col-12 col-md-3">
//                         <Link href={ROUTE_URL.ADD_TENANT}>
//                           <label for="logo" className="upload-box card">
//                             <div className="inner-content">
//                               <div className="icon-box">
//                                 <i className="r-icon r-icon-plus"></i>
//                               </div>
//                               <span>Add Tenant</span>
//                             </div>
//                           </label>
//                         </Link>
//                       </div>
//                     </div>

//                     <div className="text-center my-4">
//                       {/* <a href="#" className="btn btn-primary btn-lg min-width-150">{BUTTON_LABEL.SAVE}</a> */}
//                       <button
//                         className="btn btn-success "
//                         onClick={showmoreitem}
//                       >
//                         load More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };
// export default ManageTenants;

import Image from "next/image";
import Link from "next/link";
import { Logo, No_User } from "../../assets/img";
import { quotoneIcon, rydotIcon } from "../../assets/img/icons";
import React, { useState, useEffect } from "react";
import { API_URL, ROUTE_URL } from "@/src/constant/url";
import axios from "axios";
import { useQuery } from "react-query";
import Token from "@/src/common/token/token";
import Button from "@/src/common/deleteApi/deleteApi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_QUERY } from "@/src/constant/apiReqField";
import { commonApi } from "@/src/services/common.api";
import { OPERATION_TYPE } from "@/src/constant/staticObject";

const ManageTenants = (props) => {
  // apiUrl="
  // apiId={id}
  const router = useRouter();

  const apiUrl = "http://master.revel-dev.test:9876/tenant/v1/delete";
  // const apiId = '63da194dfb70e03be873d21f';
  const { id } = props;
  console.log("id", id);
  //   const [userId, setUserId] = useState(id);
  const [tenantData, setTenantData] = useState([]);
  const [visible, setVisible] = useState(3);
  const [deleteRecord, setDeleteRecord] = useState([]);
  const [flag, setflag] = useState(false);

  const showmoreitem = () => {
    setVisible((predata) => predata + 8);
  };
  // useEffect(() => {
  //   const getAllTenants = async () => {
  //     //   let token = "";
  //     // if (typeof window !== "undefined") {
  //     //   token = JSON.parse(localStorage.getItem("token"));
  //     // }
  //     let token = "";
  //     const storedToken = localStorage.getItem("token");
  //     if (storedToken !== "undefined") {
  //       token = JSON.parse(storedToken);
  //     } else {
  //       router.push("http://master.revel-himanshu.test:3000");
  //     }
  //     // let resp = null;
  //     // const storedResp = localStorage.getItem("token");
  //     // if (storedResp) {
  //     //   try {
  //     //     resp = JSON.parse(storedResp);
  //     //   } catch (e) {}
  //     // }
  //     // const token =JSON.parse(localStorage.getItem("token"));
  //     try {
  //       setflag(true);
  //       const response = await axios.get(
  //         "http://master.revel-dev.test:9876/tenant/v1/getAll",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //             "Access-Control-Allow-Origin": "*",
  //             "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
  //           },
  //         }
  //       );
  //       setTenantData(response.data.data);
  //       // console.log("data",response.data)
  //     } catch (error) {
  //       console.log("Error fetching tenants:", error);
  //     }
  //   };
  //   getAllTenants();
  //   // console.log("token",<Token/>)
  //   // <Token/>
  // }, []);

  const {} = useQuery(
    [API_QUERY.GET_TENANT],
    () => commonApi(API_URL.TENANT, {}, OPERATION_TYPE.GET_ALL),
    {
      onSuccess: (data) => {
        setTenantData(data?.data?.data?.paginatedData);
      },
    }
  );
  console.log("tenantData",tenantData);

  // const hendalgettenant = async () => {

  //   let token = "";
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken !== 'undefined') {
  //     token = JSON.parse(storedToken);
  //   }

  //   const response = await axios.get(
  //     "http://master.revel-dev.test:9876/tenant/v1/getAll",
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
  //       },
  //     }
  //   );
  //   setTenantData(response?.data?.data)
  //   setflag(true)

  // };

  // useEffect(()=>{

  //   hendalgettenant();
  // },[flag])

  // const hendalEdittenets = async (id) => {

  //     let token = "";
  //     if (typeof window !== "undefined") {
  //         token = JSON.parse(localStorage.getItem("token"));
  //     }
  //          axios.put( `http://master.revel-dev.test:9876/tenant/v1/delete/${id}`, {
  //         headers: {
  //             "Content-Type": "application/json",
  //             "Authorization": `Bearer ${token}`,
  //         }
  //     })

  // }

  const handleTenantDelete = async (id) => {
    let token = "";
    const storedToken = localStorage.getItem("token");
    if (storedToken !== "undefined") {
      token = JSON.parse(storedToken);
    } else {
      router.push("http://master.revel-himanshu.test:3000");
    }
    try {
      await axios.put(
        `http://master.revel-dev.test:9876/tenant/v1/delete/${id}`,
        "",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
            "Cache-Control": "no-cache",
            "Accept-Encoding": "gzip, deflate, br",
          },
        }
      );
      setTenantData(tenantData.filter((item) => item.id !== id));
      toast.success("Item deleted successfully.");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const hasRecords = tenantData && tenantData.length > visible;
  return (
    <>
      <div className="wrapper app-header">
        <main className="main-content" id="main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="login-form  p-0 mt-5">
                  <div className="col-9 mx-auto ">
                    <div className="text-center mb-5">
                      <h3 className="font-36 mb-2">Manage the Tenants</h3>
                      <p className="font-16 ">
                        You can add, edit and delete Tenant anytime.
                      </p>
                    </div>
                    <div className="row data-lake-cards tenants">
                      {tenantData?.slice(0, visible).map((items, index) => {
                        console.log("item", items);
                        return (
                          <>
                            <div
                              className="col-12 col-md-3 mb-4"
                              key={index.id}
                            >
                              <div className="card text text-center mb-0">
                                <Link href={ROUTE_URL.DASHBOARD}>
                                  <div className="icon-box">
                                    <Image
                                      // src={items.logo}\
                                      src={
                                        items?.logo?.logoUrl
                                          ? items.logo.logoUrl
                                          : No_User
                                      }
                                      alt=""
                                      className="img-fluid mx-auto"
                                      width="140"
                                    />
                                  </div>
                                </Link>
                                {items?.profile?.name}
                                <div className="actions">
                                  <ul className="list-unstyled d-flex flex-row mb-0 justify-content-center">
                                    <li>
                                      <Link href="#">
                                        <i className="r-icon r-icon-info-outline"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href={`${ROUTE_URL.EDIT_TENANT}${items?.id}`}
                                      >
                                        <i className="r-icon r-icon-pencil"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="#"
                                        className="text-danger"
                                        // onClick={() => deleteTenantRecord(items?.id)}
                                        onClick={() =>
                                          handleTenantDelete(items?.id)
                                        }
                                      >
                                        <i className="r-icon r-icon-delete"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="col-12 col-md-3">
                        <Link href={ROUTE_URL.ADD_TENANT}>
                          <label htmlFor="logo" className="upload-box card">
                            <div className="inner-content">
                              <div className="icon-box">
                                <i className="r-icon r-icon-plus"></i>
                              </div>
                              Add Tenant
                            </div>
                          </label>
                        </Link>
                      </div>
                    </div>
                    <div className="text-center my-4 ">
                      <div className="d-flex justify-content-center my-3">
                        {hasRecords && (
                          <button
                            className="btn btn-success btn-lg min-width-150"
                            onClick={showmoreitem}
                          >
                            Load More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default ManageTenants;
