import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
import { useState } from "react";
const AddTenant = () => {
  const [activetab, setActiveTab] = useState("tab-p_1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div class="wrapper">
        <main className="main-content" id="main">
          <div className="wrapper login-page">
            <ul className="nav nav-tabs stepper " role="tablist">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activetab === "tab-p_1" ? "active" : ""}`}
                  data-toggle="tab"
                  href="#"
                  onClick={() => handleTabChange("tab-p_1")}
                >
                  <span className="number">1</span>
                  <span>Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activetab === "tab-p_2" ? "active" : ""}`}
                  data-toggle="tab"
                  href="#"
                  onClick={() => handleTabChange("tab-p_2")}
                >
                  <span className="number">2</span>
                  <span>Email Settings</span>
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
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Password "
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
                                />
                              </div>
                            </div>
                            <div className="text-center my-3">

                              <Link
                                className={` btn btn-primary  ${activetab === "tab-p_2" ? "active" : ""} `}
                                data-toggle="tab"
                                href="#tab-p_2"
                                onClick={() => handleTabChange("tab-p_2")}
                              >Next</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activetab === "tab-p_2" && (
              <div className="tab-pane" id="tab-p_2" role="tabpane2">
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
                                placeholder="Port
                                        "
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
                              />
                            </div>
                            <div className="col-lg-12 text-center">
                              <Link
                                href="javascript:void(0)"
                                className="btn btn-success btn-lg min-width-150"
                              >
                                Test Connection
                              </Link>
                            </div>
                          </div>
                          <div className="text-center my-4">
                            <Link
                              href={ROUTE_URL.ManageTenant}
                              className="btn btn-primary btn-lg min-width-150"
                            >
                              Submit
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