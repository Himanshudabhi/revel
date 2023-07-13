// import { render } from "react-dom/server";
// import { render } from "react-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { cancelIcon, BackArrowIcon, MongoIcon } from "@/src/assets/img/icons";
import { useState } from "react";
import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  DropdownField,
  TextareaField,
  TextField,
  ToggleField,
} from "@/src/common/commonsource/sourceField";
import RenderDependent from "./renderDependent";
import { key } from "fontawesome";

const Mongodb = (props) => {
  const [userid, setuserid] = useState(props.id);
  const [sourceid, setsourceid] = useState(props.sourceEditId);
  console.log("source id", userid);

  const [sourceData, setsourceData] = useState([]);
  const [fleg, setfleg] = useState(false);
  const [dependent, setdependent] = useState([]);
  const [dependentFieldCheck, setDependentFieldCheck] = useState();
  const [add, setadd] = useState(false);
  const [formData, setFormData] = useState("");
  const [name, setname] = useState("");
  const [connectorType, setconnectorType] = useState("");
  const [editData, seteditData] = useState([]);
  const [editMode, seteditMode] = useState(false);
  const [firstApiData, setFirstApiData] = useState(null);
  const [secondApiData, setSecondApiData] = useState(null);
  const [middledata, setmiddledata] = useState([]);
  // console.log("sourceData", connectorType);

  //==================Key value logic =============================
  // const convertedData = formData?.map((item) => ({
  //   [item.key]: item.value,
  // }));
  // console.log("convertedData", convertedData);
  // let datas = Object.entries(formData);
  // //console.log("datas", datas);
  // let obj = datas?.map((ele) => {
  //   return {
  //     key: ele[0],
  //     value: ele[1],
  //   };
  // });
  // console.log("First obj", obj);

  const handleDataChange = (e, index) => {
    console.log("e", e.target.value);
    let dummy = [...formData];
    console.log("dummy", dummy);
    // if (dummy[index].key === e.target.key) {
      dummy[index].value = e.target.value;
    // }
    setFormData(dummy);
    console.log("dummy[index].key === e.target.key",dummy[index].key === e.target.key);
  };

  console.log("formData", formData);
  // let keys = Object.keys(formData)

  //============================================== select connection function Start =======================================
  // let value = editData?.map((val)=>{val.connectorId})
  // console.log("val",value);
  const hendalSelectConnection = async (id) => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }

    // {
    //  editData.connectorId != "" ? seteditMode(true) : seteditMode(false)

    // }

    const source = await axios.post(
      "http://master.revel-dev.test:9876/connector/v1/search",
      {
        filters: [
          {
            field: "id",
            value: userid?.sourceId,

            // value: editData.connectorId,
            op: "eq",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // setfleg(false);
    // setfleg(true);

    setsourceData(source?.data?.data?.paginatedData);
  };

  useEffect(() => {
    if (typeof userid !== "undefined") {
      hendalSelectConnection();
    }
  }, []);

  //============================================== select-connection function End =======================================

  const hendalAddSource = async () => {
    console.log("id6666", editData.connectorId);

    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
    await axios.post(
      "http://master.revel-dev.test:9876/connectorconfig/v1/add",

      {
        name: name,
        connectorId: userid?.sourceId,
        connectorConfigurations: formData,
      },

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("value",value)
    toast.success("source Add successfully");
  };
  // const handeloption = (e) => {
  //   // setadd(true)
  //   // setdependent([]);

  //   const data = sourceData[0];

  //   if (Array.isArray(data?.connectorFields)) {
  //     // console.log("index`",data?.connectorFields.name)

  //     // console.log("id perent =", e.target.getAttribute('name'))
  //     for (const field of data?.connectorFields) {
  //       // console.log(
  //       //   "field.name1",
  //       //   field.name === e.target.getAttribute("name")
  //       // );

  //       if (field.dependentFields) {
  //         for (const dependentField of field.dependentFields) {
  //           setadd(true);

  //           if (dependentField.dependsOn === e.target.value) {
  //             // return dependentField.fields

  //               setdependent(dependentField.fields);

  //             console.log("dependentField.fields =", dependent);
  //             let root = ReactDOM.createRoot(
  //               document.getElementById(e.target.getAttribute("name"))
  //             );

  //             root.render(<RenderDependent dependent={dependent} />);
  //           }
  //         }
  //       }
  //     }
  //   }
  // };

  const handeloption = (e) => {
    setdependent([]);

    //   let fullname =""
    // if(e.target.getAttribute("name") && e.target.value){
    //  fullname = e.target.getAttribute("name") +"_"+e.target.value
    // }

    // fullname.style.display='block'
    // console.log("fullname",fullname);
    // {
    //   fullname
    // }
    // {
    //   typeof fullname !== null ?  document.getElementById(fullname).style.display = "block" : "";
    // }
    // var elem = document.getElementById(fullname);
    // if( fullname != null && fullname != 'undefined' ) {
    //   console.log("fullname1",fullname)
    //   document.getElementById(fullname).style.display = "block";
    // }

    // if(typeof document.getElementById(fullname) !== null && document.getElementById(fullname) !== 'undefined' ) {
    //   document.getElementById(fullname).style.display = "block";

    // }

    // setDependentFieldCheck({
    //   fieldName: e.target.getAttribute("name"),
    //   dependName: e.target.value,
    // });

    // const data = sourceData[0];

    // if (Array.isArray(data?.connectorFields)) {
    //   for (const field of data?.connectorFields) {
    //     if (field.name === e.target.getAttribute("name")) {
    //       for (const dependentField of field.dependentFields) {
    //         if (dependentField.dependsOn === e.target.value) {
    //           // setdependent(dependentField.fields);
    //           // const responseComponent = <RenderDependent />;
    //           // let root = ReactDOM.createRoot(document.getElementById(e.target.getAttribute("name")));
    //           // root.render(
    //           //     <RenderDependent dependent={dependent}/>
    //           // );
    //         }
    //       }
    //     }

    //     // if (field.dependentFields) {
    //     //   for (const dependentField of field.dependentFields) {
    //     //     if (dependentField.dependsOn === e.target.value) {
    //     //       // return dependentField.fields
    //     //       setdependent(dependentField.fields);
    //     //       console.log("dependentField.fields", dependent);
    //     //     }
    //     //   }
    //   }
    // }
  };

  // const handeloption = ()=>{
  //   const data = sourceData[0];
  //   if(data?.connectorFields[1].name){

  //   }
  //   console.log("data.connectorFields.name",data.connectorFields[1].name)

  // }

  // console.log("dependent", dependent);

  // function findDependsOnValue(sourceData, dependsOnValue) {
  //     const data = sourceData.data;
  //     if (Array.isArray(data.connectorFields)) {
  //       for (const field of data.connectorFields) {
  //         if (field.dependentFields) {
  //           for (const dependentField of field.dependentFields) {
  //             if (dependentField.dependsOn === e.target.value) {
  //               return dependentField.fields;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     return null; // DependsOn value not found
  //   }
  //   const dependentFields = handeloption(sourceData);
  //   console.log("dependentFields23",handeloption())

  //edit function start ===========================================

  useEffect(() => {
    // First API call
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
    axios
      .get(
        `http://master.revel-dev.test:9876/connectorconfig/v1/get/${sourceid?.sourceEditId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const data = response?.data?.data;
        setadd(true);

        setFirstApiData(data);
        console.log("firstApiData`", firstApiData.connectorConfigurations);
        // setFormData();
        setname(firstApiData.name);

        console.log("response?.data?.data", response?.data?.data);
        // setconnectorType(firstApiData.connectorConfigurations[1].value)

        if (response?.data?.data?.connectorConfigurations) {
          setFormData(response?.data?.data?.connectorConfigurations);

          // setmiddledata(firstApiData.connectorConfigurations)
          //    const convertedData = firstApiData.connectorConfigurations?.map((item) => ({
          //   [item.key]: item.value,
          // }));
          // let datas2 = Object.entries(convertedData[0]);

          //   setFormData(data.connectorConfigurations [{
          //     host:localhost
          // }])

          // let obj2 = data.connectorConfigurations
          // console.log("formdta",obj2);

          // setFormData({
          //   key:obj2.key,
          //   value:obj2.valule
          // })

          // let abc = formData?.map((ele) => {
          //   return {
          //     key: ele.key,
          //     value: ele.value,
          //   };
          // });

          // console.log("formdta",formData);
        }

        // if (firstApiData && firstApiData) {
        //   setFormData(
        //     ...formData
        //     );
        // }
        // if (firstApiData && firstApiData.connectorConfigurations[0]) {
        // setFormData(firstApiData?.connectorConfigurations);
        // console.log("formdata22", formData);

        // }

        // const convertedData = formData?.map((item) => ({
        //   [item.key]: item.value,
        // }));
        // console.log("convertedData", convertedData);
        // Use the result from the first API call as a parameter for the second API call
        axios
          .post(
            `http://master.revel-dev.test:9876/connector/v1/search`,
            {
              filters: [
                {
                  field: "id",
                  // value: userid?.sourceId,

                  value: data.connectorId,
                  op: "eq",
                },
              ],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            const data = response.data?.data?.paginatedData;
            setadd(true);
            setsourceData(response.data?.data?.paginatedData);
            console.log("secondApiData", sourceData);
          })
          .catch((error) => {
            console.error("Error fetching second API:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching first API:", error);
      });
  }, [add]);

  console.log("formData", formData);

  const handalupdate = async () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
  };
  return (
    <>
      <div class="wrapper login-page">
        <nav class="navbar navbar-expand-lg brand-navbar bg-white brand-navbar breadcrumb-navbar top-0">
          <div class="container-fluid">
            <ol class="breadcrumb bg-white mb-0 p-0 align-items-center">
              <Link
                href={ROUTE_URL.ADD_SOURCE}
                class="mr-10 sidebar-toggler"
                id=""
              >
                <Image
                  src={BackArrowIcon}
                  alt="Back"
                  class="img-fluid"
                  width="8"
                />
              </Link>
            </ol>
            <ol class="breadcrumb bg-white mb-0 p-0 align-items-center ml-auto">
              <Link href={ROUTE_URL.ADD_SOURCE} class="sidebar-toggler" id="">
                <Image
                  src={cancelIcon}
                  alt="Back"
                  class="img-fluid"
                  width="15"
                  style={{ filter: "grayscale(1)" }}
                />
              </Link>
            </ol>
          </div>
        </nav>

        <main class="main-content mt-60 login-form p-0">
          <div class="container-fluid">
            <div class="row">
              {sourceData?.map((item, index) => {
                // console.log("ins?.name", item.connectorType);

                return (
                  <>
                    <div class="col-12 col-md-7 border-right">
                      <div class="text-center  py-5 position-relative">
                        <Image
                          src={item.logoURL}
                          width="100"
                          height="100"
                          alt="MongoDB"
                          class="img-fluid position-absolute page-logo"
                        />
                        <h3 class="font-24 mb-3">
                          Configure your {item.name} Data Lake
                        </h3>
                        <p>
                          Follow the guide on the right to set up your Data Lake
                        </p>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="input-wrapper mb-3">
                            <TextField
                              label={item.name + " Name"}
                              type="text"
                              placeholder="name"
                              value={name}
                              onChange={(e) => setname(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <div class="row">
                            {item.connectorFields.map((ins, index) => {
                              console.log(
                                "index",
                                formData && formData[index]?.value
                              );
                              switch (ins.type) {
                                case "text":
                                  return (
                                    <div class="col-12 col-md-6">
                                      <div class="form-group  label-left">
                                        <TextField
                                          key={ins?.name}
                                          type={ins?.type}
                                          label={ins?.label}
                                          name={ins?.name}
                                          placeholder={ins?.placeholder}
                                          required={ins?.required}
                                          description={ins?.description}
                                          value={
                                            formData && formData[index]?.value
                                          }
                                          // value={connectorType}
                                          // onChange={(e) =>
                                          //   handleDataChange(e, ins)
                                          // }
                                          onChange={(e) =>
                                            handleDataChange(e, index)
                                          }
                                          // onChange={(e)=>setconnectorType(e.target.value)}
                                        ></TextField>
                                      </div>
                                    </div>
                                  );
                                case "toggle":
                                  return (
                                    <div class="col-12 col-md-12">
                                      <ToggleField
                                        type={ins?.type}
                                        label={ins?.label}
                                        name={ins?.name}
                                        placeholder={ins?.placeholder}
                                        required={ins?.required}
                                        description={ins?.description}
                                      />
                                      {/* findDependsOnValue{" "} */}
                                    </div>
                                  );

                                case "dropdown":
                                  return (
                                    <div class="col-12 col-md-6 mb-3">
                                      {/* {console.log("dropdown", ins)} */}
                                      <DropdownField
                                        type={ins?.type}
                                        label={ins?.label}
                                        name={ins?.name}
                                        placeholder={ins?.placeholder}
                                        required={ins?.required}
                                        description={ins?.description}
                                        options={ins?.options}
                                        onChange={handeloption}
                                        // id={ins?.name}
                                      />

                                      {ins.dependentFields.length > 0 ? (
                                        ins?.dependentFields?.map((val) => {
                                          // console.log(val.dependsOn);
                                          return (
                                            <>
                                              <div
                                                style={{ display: "none" }}
                                                id={
                                                  ins.name + "_" + val.dependsOn
                                                }
                                              >
                                                {" "}
                                                <RenderDependent
                                                  dependent={val?.fields}
                                                />
                                              </div>
                                              {/* <h1>{}</h1> */}
                                            </>
                                          );
                                        })
                                      ) : (
                                        <div>df</div>
                                      )}
                                      {/* <div id={ins?.name}>
                                      
                                       
                                      </div> */}

                                      {/* {console.log(
                                        "dependentFieldCheck",
                                        dependentFieldCheck
                                      )}
                                      {ins?.name ===
                                      dependentFieldCheck?.fieldName ? (
                                        <RenderDependent
                                          dependent={dependent?.fields}
                                        />
                                      ) : (
                                        ""
                                      )} */}

                                      {/* {console.log("LOG==",ins?.name ===
                                        dependentFieldCheck?.fieldName,ins)} */}

                                      {ins?.name ===
                                        dependentFieldCheck?.fieldName &&
                                        ins?.dependentFields?.map(
                                          (val, index) => {
                                            // console.log("val",val)
                                            if (
                                              val.dependsOn ===
                                              dependentFieldCheck?.dependName
                                            ) {
                                              return (
                                                // <div id={}></div>

                                                <RenderDependent
                                                  dependent={val?.fields}
                                                />
                                                // <>{console.log("val.fields",val.fields)}</>
                                              );
                                              Database;
                                            }
                                          }
                                        )}
                                    </div>
                                  );
                                case "textarea":
                                  return (
                                    <div class="col-12 col-md-6 mb-3">
                                      <TextareaField
                                        type={ins?.type}
                                        label={ins?.label}
                                        name={ins?.name}
                                        placeholder={ins?.placeholder}
                                        required={ins?.required}
                                        description={ins?.description}
                                      />
                                    </div>
                                  );
                                // Add support for other field types (e.g., textarea, etc.) as needed
                                default:
                                  return null;
                              }
                            })}
                          </div>
                        </div>
                        <div class="d-flex justify-content-center my-3">
                          <Link
                            href={ROUTE_URL.SOURCE}
                            class="btn-lg btn btn-muted btn-default mr-2"
                          >
                            TEST CONNECTION
                          </Link>
                          <Link
                            href={ROUTE_URL.SOURCE}
                            class="btn-lg btn  btn-primary"
                            onClick={hendalAddSource}
                          >
                            TEST & CONTINUE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* {dependent.length > 0 ?  : ""}       */}
              {/* {console.log("yex",dependent.length > 0  ? "true" : "false") } */}
              {/* <RenderDependent dependent={dependent}/>  */}

              {/* <RenderDependent dependent={dependent}/> */}

              <div class="col-12 col-md-5">
                <div class="py-5">
                  <h3 class="font-24 mb-3">Prerequisites</h3>
                  <p>
                    <span class="text-primary">
                      Replication is set up for MongoDB OpLog and Change
                      Streams.
                    </span>{" "}
                    <br />
                    REVEL has{" "}
                    <span class="text-primary">
                      permissions to read the Generic MongoDB databases. Hevo’s
                      IP addresses are whitelisted.
                    </span>
                  </p>
                  <hr />
                  <p class="mb-3">
                    Perform the following steps to configure your Elasticsearch
                    Source:
                  </p>
                  <div class="step">
                    <div>
                      <span class="badge badge-primary step-badge">Step 1</span>
                      <label for="">
                        Set up MongoDB Replication for OpLog and Change Streams
                      </label>
                    </div>
                    <p>
                      Note: REVEL supports data ingestion from MongoDB via OpLog
                      and Change Streams. Change Streams internally use OpLog
                      for replication.
                    </p>
                    <p>
                      To set up replication for OpLog or Change Streams, perform
                      the following steps:
                    </p>
                    <ul class="list-unstyled">
                      <li>
                        Modify the MongoDB server configuration: MongoDB
                        configuration file,{" "}
                        <span class="text-warning"> mongod.conf</span>, is
                        generally found in{" "}
                        <span class="text-warning">/etc/ </span> directory in a
                        Linux system. The options to configure are as follow.
                        <p class="mt-3">
                          <span class="text-primary">
                            replication.replSetName:
                          </span>{" "}
                          The replica set this MongoDB is part of. <br />
                          <br />
                          <span class="text-primary">
                            replication.oplogSizeMB:
                          </span>
                          The max size of logs that mongo will persist keep{" "}
                          <br />
                          this enough high we recommend 2048 MB (2GB). <br />
                          <br />
                          <span class="text-primary">net.bindIp:</span>
                          The IP this MongoDB server should listen to.
                        </p>
                        <p>An example config will look like as follows:</p>
                      </li>
                    </ul>
                  </div>
                  <div class="step">
                    <div>
                      <span class="badge badge-primary step-badge">Step 2</span>
                      <label for="">
                        Set up Permissions to Read Generic <br />
                        MongoDB Databases
                      </label>
                    </div>
                  </div>
                  <div class="step">
                    <div>
                      <span class="badge badge-primary step-badge">Step 3</span>
                      <label for="">Whitelist Hevo’s IP Addresses</label>
                    </div>
                    <p>
                      In order to allow Hevo to access your MongoDB databases,
                      you must whitelist{" "}
                      <span class="text-primary">REVEL IP addresses.</span>{" "}
                      <br />
                      <br />
                      To do this, add the IP addresses to the list of
                      authenticated IP Addresses/CIDR of your MongoDB instance
                      by{" "}
                      <span class="text-primary">
                        {" "}
                        following these simple steps.
                      </span>
                    </p>
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
export default Mongodb;
