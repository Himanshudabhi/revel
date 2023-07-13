import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ElasticSearchIcon,
  MongoIcon,
  CassandraIcon,
} from "@/src/assets/img/icons";
import { ROUTE_URL } from "@/src/constant/url";
import axios from "axios";
import usePostApi from "@/src/customHooks/usePostApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTenant = (props) => {
  const [userid, setuserid] = useState(props.id);
  // console.log("userid", userid);
  const [tenantData, setTenantData] = useState([]);
  const [fleg, setfleg] = useState(false);

  const [selectedOption, setSelectedOption] = useState("option2");
  const [activetab, setActiveTab] = useState("tab-p_1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  //profile Onchange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setvalue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //emailAccount state
  const [value, setvalue] = useState({
    host: "",
    port: "",
    secure: "",
    username: "",
    password: "",
  });

  //profile State
  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    designation: "",
    phoneNumber: "",
    email: "",
    country: "",
  });

  const handleChangeProfile = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //start AddTenant apicalling

  // const { postApi, loading, error} = usePostApi;

  // const handelAddTenant = async()=>{
  //   const data = {
  //     profile: formData,
  //     emailAccount: value,
  //     dataLake: {
  //       dataLakeConnectorId: "",
  //       useDefaultDataLake: true,
  //       datalakeConfigurations: {},
  //     },
  //   };
  //   const url = 'http://master.revel-dev.test:9876/tenant/v1/add';

  //   postApi(url, data);

  // }

  const handelAddTenant = async () => {
    const AddTenant = {
      profile: formData,
      emailAccount: value,
      dataLake: {
        dataLakeConnectorId: "",
        useDefaultDataLake: true,
        datalakeConfigurations: {},
      },
    };

    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }

    fetch("http://master.revel-dev.test:9876/tenant/v1/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(AddTenant),
    })
      .then((response) => response.json())

      .catch((error) => {
        console.error("Error:", error);
      });
      toast.success("tenant Add successfully")

    setfleg(true);

  };

  //update tenets start

  const hendalEdit = async () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
    const res = await axios.get(
      `http://master.revel-dev.test:9876/tenant/v1/get/${userid?.tenantId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
          "Cache-Control": "no-cache",
        },
      }
    );
    setfleg(true);
    setTenantData(res.data.data);
    
    if (tenantData && tenantData.profile) {
      setFormData({
        name: tenantData.profile.name,
        fullName: tenantData.profile.fullName,
        designation: tenantData?.profile?.designation,
        phoneNumber: tenantData.profile.phoneNumber,
        email: tenantData?.profile?.email,
        country: tenantData?.profile?.country,
      });
    }
    if (tenantData && tenantData.emailAccount) {
      setvalue({
        host: tenantData.emailAccount.host,
        port: tenantData.emailAccount.port,
        secure: tenantData.emailAccount.secure == true ? "true" : "false",
        username: tenantData.emailAccount.username,
        password: tenantData.emailAccount.password,
      });
    }
  };

  useEffect(() => {
    if (typeof userid !== "undefined") {
      hendalEdit();
    }
  }, [fleg]);

  const handelUpdate = async () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }

    await axios.put(
      `http://master.revel-dev.test:9876/tenant/v1/update/${userid?.tenantId}`,
      {
        profile: formData,
        emailAccount: value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
      
    );
    toast.success("tenant Update successfully")
  };

  return (
    <>
      <div className="wrapper app-header">
        <main className="main-content" id="main">
          <div className="wrapper login-page">
            <ul className="nav nav-tabs stepper " role="tablist">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activetab === "tab-p_1" ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="#"
                  // onClick={() => handleTabChange("tab-p_1")}
                >
                  <span className="number">1</span>
                  <span>Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activetab === "tab-p_2" ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="#"
                  // onClick={() => handleTabChange("tab-p_2")}
                >
                  <span className="number">2</span>
                  <span>Website Logo Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activetab === "tab-p_3" ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="#"
                  // onClick={() => handleTabChange("tab-p_3")}
                >
                  <span className="number">3</span>
                  <span>Email Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activetab === "tab-p_4" ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="#"
                  // onClick={() => handleTabChange("tab-p_4")}
                >
                  <span className="number">4</span>
                  <span>Data Lake</span>
                </Link>
              </li>
            </ul>
            {/* Tab Panel 1 */}
            {activetab === "tab-p_1" && (
              <div className="tab-content">
                <div
                  className="tab-pane active show"
                  id="tab-p_1"
                  role="tabpanel"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="login-form  p-0 mt-5">
                          <div className="col-9 mx-auto">
                            <div className="login-form p-0 row">
                              <div className="mb-3 col-md-6">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                >
                                  {" "}
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChangeProfile}
                                />
                              </div>
                              <div className="mb-3 col-md-6">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                >
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Company Name
                                    "
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChangeProfile}
                                />
                              </div>
                              <div className="mb-3 col-md-6">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                >
                                  Designation
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Designation "
                                  name="designation"
                                  value={formData.designation}
                                  onChange={handleChangeProfile}
                                />
                              </div>
                              <div className="mb-3 col-md-6">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Phone Number
                                    "
                                  name="phoneNumber"
                                  value={formData.phoneNumber}
                                  onChange={handleChangeProfile}
                                />
                              </div>
                              <div className="mb-3 col-md-6">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="email "
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChangeProfile}
                                />
                              </div>
                              <div className="mb-3 col-md-6">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Country "
                                  name="country"
                                  value={formData.country}
                                  onChange={handleChangeProfile}
                                />
                              </div>
                            </div>
                            <div className="text-center my-4 d-flex justify-content-center">
                              <Link
                                href={"#tab-p_2"}
                                className="btn btn-primary btn-lg min-width-150"
                                onClick={() => handleTabChange("tab-p_2")}
                              >
                                Next
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Tab Panel 2 */}
            {activetab === "tab-p_2" && (
              <div className="tab-pane" id="tab-p_2" role="tabpanel2">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="login-form  p-0 mt-5">
                        <div className="col-9 mx-auto">
                          <div className="row">
                            <div className="col-12 col-md-5">
                              <div className="form-group">
                                <label className="d-block">
                                  <strong>Logo</strong>
                                </label>
                                <input
                                  type="file"
                                  className="form-control sr-only"
                                  id="logo"
                                />
                                <label for="logo" className="upload-box">
                                  <div className="inner-content">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="20"
                                      viewBox="0 0 26 20"
                                    >
                                      <path
                                        id="icons8_full_image_1"
                                        d="M3,6V26H29V6ZM5,8H27V21.563l-7.781-7.781-.719-.687-.719.688L15.5,16.063l-3.781-3.781L11,11.594l-.719.688L5,17.563ZM22.5,9A2.5,2.5,0,1,0,25,11.5,2.518,2.518,0,0,0,22.5,9Zm0,2a.5.5,0,1,1-.5.5A.484.484,0,0,1,22.5,11ZM11,14.438,14.063,17.5,7.563,24H5V20.438Zm7.5,1.5L26.563,24H10.438Z"
                                        transform="translate(-3 -6)"
                                        fill="#C2C2C2"
                                      />
                                    </svg>
                                    <span>Upload logo</span>
                                  </div>
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="d-block">
                                  <strong>Favicon</strong>
                                </label>
                                <input
                                  type="file"
                                  className="form-control sr-only"
                                  id="favicon"
                                />
                                <label for="favicon" className="upload-box">
                                  <div className="inner-content">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="20"
                                      viewBox="0 0 26 20"
                                    >
                                      <path
                                        id="icons8_full_image_1"
                                        d="M3,6V26H29V6ZM5,8H27V21.563l-7.781-7.781-.719-.687-.719.688L15.5,16.063l-3.781-3.781L11,11.594l-.719.688L5,17.563ZM22.5,9A2.5,2.5,0,1,0,25,11.5,2.518,2.518,0,0,0,22.5,9Zm0,2a.5.5,0,1,1-.5.5A.484.484,0,0,1,22.5,11ZM11,14.438,14.063,17.5,7.563,24H5V20.438Zm7.5,1.5L26.563,24H10.438Z"
                                        transform="translate(-3 -6)"
                                        fill="#C2C2C2"
                                      />
                                    </svg>
                                    <span>Upload favicon</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="col-12 col-md-5 ml-auto">
                              <div className="form-group">
                                <label className="d-block">
                                  <strong>Preview</strong>
                                </label>
                                <input
                                  type="file"
                                  className="form-control sr-only"
                                  id="preview"
                                />
                                <label
                                  for="preview"
                                  className="upload-box logo-preview"
                                >
                                  <div className="inner-content">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="130.572"
                                      height="68.078"
                                      viewBox="0 0 130.572 68.078"
                                    >
                                      <path
                                        id="icons8_eye_2"
                                        d="M65.942,8C30.474,8,3.183,39.247,3.183,39.247L.656,42.039l2.526,2.792S28.064,73.2,61.156,75.812a43.214,43.214,0,0,0,9.574,0C103.821,73.2,128.7,44.832,128.7,44.832l2.527-2.792L128.7,39.247S101.411,8,65.942,8Zm0,8.51a61.633,61.633,0,0,1,25.529,5.984,29.321,29.321,0,0,1,4.255,15.291,29.764,29.764,0,0,1-26.46,29.652c-.083.017-.183-.017-.266,0-1.014.05-2.028.133-3.058.133-1.13,0-2.227-.066-3.324-.133A29.865,29.865,0,0,1,40.28,22.626h-.133A61.782,61.782,0,0,1,65.942,16.51Zm0,8.51A12.765,12.765,0,1,0,78.707,37.784,12.768,12.768,0,0,0,65.942,25.02Zm-37.23,3.989A37.833,37.833,0,0,0,33.5,58.128a98.71,98.71,0,0,1-20.61-16.089A101.812,101.812,0,0,1,28.712,29.009Zm74.461,0A101.833,101.833,0,0,1,119,42.039a98.726,98.726,0,0,1-20.61,16.089,37.833,37.833,0,0,0,4.787-29.12Z"
                                        transform="translate(-0.656 -8)"
                                        fill="#C2C2C2"
                                      />
                                    </svg>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text-center my-4 d-flex justify-content-center">
                            <Link
                              href={"#tab-p_1"}
                              className="btn btn-primary btn-lg min-width-150 mr-3"
                              onClick={() => handleTabChange("tab-p_1")}
                            >
                              previous
                            </Link>
                            <Link
                              href={"#tab-p_3"}
                              className="btn btn-primary btn-lg min-width-150"
                              onClick={() => handleTabChange("tab-p_3")}
                            >
                              Next
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activetab === "tab-p_3" && (
              <div className="tab-pane" id="tab-p_3" role="tabpanel3">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="login-form  p-0 mt-5">
                        <div className="col-9 mx-auto">
                          <div className="login-form p-0 row">
                            <div className="mb-3 col-md-6">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="form-label"
                              >
                                {" "}
                                Host
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Host"
                                name="host"
                                value={value.host}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="form-label"
                              >
                                Port
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Port"
                                name="port"
                                value={value.port}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="" className="mr-3">
                                  Secure
                                </label>
                                <div className="custom-control custom-radio custom-control-inline">
                                  <input
                                    type="radio"
                                    id="true"
                                    name="secure"
                                    checked={value.secure === "true"}
                                    value="true"
                                    onChange={handleChange}

                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="true"
                                  >
                                    True
                                  </label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                  <input
                                    type="radio"
                                    id="false"
                                    name="secure"
                                    checked={value.secure === "false"}
                                    value="false"
                                    onChange={handleChange}

                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="false"
                                  >
                                    false
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="mb-3 col-md-6">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="form-label"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Username "
                                name="username"
                                value={value.username}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="form-label"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Password "
                                name="password"
                                value={value.password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-12 text-center">
                              <Link
                                href="#"
                                className="btn btn-success btn-lg min-width-150"
                              >
                                Test Connection
                              </Link>
                            </div>
                          </div>
                          <div className="text-center my-4">
                            <Link
                              href={"#tab-p_2"}
                              className="btn btn-primary btn-lg min-width-150 mr-3"
                              onClick={() => handleTabChange("tab-p_2")}
                            >
                              previous
                            </Link>
                            <Link
                              href={"#tab-p_4"}
                              className="btn btn-primary btn-lg min-width-150"
                              onClick={() => handleTabChange("tab-p_4")}
                            >
                              Next
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Tab Panel 4 */}
            {activetab === "tab-p_4" && (
              <div className="tab-pane" id="tab-p_4" role="tabpanel4">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="login-form  p-0 mt-5">
                        <div className="col-9 mx-auto">
                          <div
                            className="row data-lake-cards"
                            value={selectedOption}
                            onChange={handleChange}
                          >
                            <div className="col-12 col-md-3">
                              <Link
                                href="elasticsearch-data-lake.html"
                                className="card text text-center mb-0"
                              >
                                <div className="icon">
                                  <Image
                                    src={ElasticSearchIcon}
                                    alt="Elasticsearch"
                                    className="img-fluid mx-auto"
                                  />
                                </div>
                                Elasticsearch
                              </Link>
                            </div>
                            <div className="col-12 col-md-3">
                              <Link
                                href={ROUTE_URL.SELECT_SOURCE}
                                className="card text text-center mb-0"
                              >
                                <div className="icon">
                                  <Image
                                    src={MongoIcon}
                                    alt="MongoDB"
                                    className="img-fluid mx-auto"
                                  />
                                </div>
                                MongoDB
                              </Link>
                            </div>
                            <div className="col-12 col-md-3">
                              <Link
                                href="#"
                                className="card text text-center mb-0"
                              >
                                <div className="icon">
                                  <Image
                                    src={CassandraIcon}
                                    alt="Cassandra"
                                    className="img-fluid mx-auto"
                                  />
                                </div>
                                Cassandra
                              </Link>
                            </div>
                            <div className="or"></div>
                            <div
                              className="col-12 col-md-3 or-item"
                              value="option2"
                            >
                              <div className="card text text-center mb-0">
                                <p className="mb-0 font-16">
                                  Don't have a Warehouse?
                                </p>
                                <div className="icon my-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="59.286"
                                    height="56.196"
                                    viewBox="0 0 59.286 56.196"
                                  >
                                    <path
                                      id="icons8_workstation"
                                      d="M12.021,6A7.029,7.029,0,0,0,5,13.021V55.145a7.029,7.029,0,0,0,7.021,7.021H29.182A7.029,7.029,0,0,0,36.2,55.145V13.021A7.029,7.029,0,0,0,29.182,6ZM36.483,6a10.1,10.1,0,0,1,2.84,7.021V49.684h3.12v7.8h-3.4a10.127,10.127,0,0,1-2.557,4.68H44.4a2.34,2.34,0,0,0,.759,0h5.866a2.34,2.34,0,1,0,0-4.68h-3.9v-7.8H57.265a7.029,7.029,0,0,0,7.021-7.021V13.021A7.029,7.029,0,0,0,57.265,6Zm-22.9,6.241H27.622a2.339,2.339,0,0,1,2.34,2.34V33.3a2.339,2.339,0,0,1-2.34,2.34H13.581a2.339,2.339,0,0,1-2.34-2.34V14.581A2.339,2.339,0,0,1,13.581,12.241Zm2.34,4.68V21.6h9.361v-4.68Zm0,9.361v4.68h9.361v-4.68ZM20.6,48.124a3.12,3.12,0,1,1-3.12,3.12A3.119,3.119,0,0,1,20.6,48.124Z"
                                      transform="translate(-5 -6)"
                                      fill="#0084C9"
                                    />
                                  </svg>
                                </div>
                                <p className="mb-0 font-14">
                                  Set up REVEL Managed Warehouse
                                </p>
                              </div>
                            </div>
                          </div>
                          

                          <div className="text-center my-4">
                            <Link
                              href={"#tab-p_3"}
                              className="btn btn-primary btn-lg min-width-150 mr-3"
                              onClick={() => handleTabChange("tab-p_3")}
                            >
                              previous
                            </Link>
                            <Link
                              href={ROUTE_URL.MANAGE_TENANT}
                              className="btn btn-primary btn-lg min-width-150 "
                              // onClick={handelAddTenant}

                              onClick={
                                typeof userid !== "undefined"
                                  ? handelUpdate
                                  : handelAddTenant 
                              }
                            >
                              {typeof userid !== "undefined"
                                ? "Update"
                                : "Finish"}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};
export default AddTenant;
