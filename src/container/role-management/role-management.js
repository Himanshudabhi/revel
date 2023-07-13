import Image from "next/image";
import { PlusIcon, searchimg } from "@/src/assets/img/icons";
import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
import { plusIcon } from "@/src/assets/img/icons";
// import Label from "@/src/common/labels/label";
// import TextBox from "@/src/common/textBox/textBox";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const RoleManagement = () => {
  const [rolesData, setRolesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const FetchRoles = async () => {
    let token = "";
    const storedToken = localStorage.getItem("token");
    if (storedToken !== "undefined") {
      token = JSON.parse(storedToken);
    }
    try {
      const response = await axios.get(
        "http://master.revel-dev.test:9876/role/v1/getAll",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
          },
        }
      );
      setRolesData(response.data.data);
      // console.log(response.data)
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };
  useEffect(() => {
    FetchRoles();
  }, []);
  const handleSearch = async () => {
    let token = "";
    const storedToken = localStorage.getItem("token");
    if (storedToken !== "undefined") {
      token = JSON.parse(storedToken);
    }
    try {
      const response = await axios.post(
        "http://master.revel-dev.test:9876/role/v1/search",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
          },
        }
      );
      setRolesData(response.data);
      console.log("search:", response);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  const handleRolesDelete = async (id) => {
    let token = "";
    const storedToken = localStorage.getItem("token");
    if (storedToken !== "undefined") {
      token = JSON.parse(storedToken);
    } else {
      router.push("http://master.revel-yax.test:3000");
    }
    try {
      await axios.put(
        `http://master.revel-dev.test:9876/role/v1/delete/${id}`,
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
      setRolesData(rolesData.filter((item) => item.id !== id));
    //   toast.success("Item deleted successfully.");
    } catch (error) {
    //   toast.error("Error deleting item:", error);
    }
  };
  return (
    <>
      <div className="wrapper app-header">
        <main className="main-content" id="main">
          <div className="container-fluid">
            <div className="row px-2">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 className="page-title font-20 text-dark mb-1 mt-3">
                      Role Management
                    </h4>
                    <p className="text-muted font-12">
                      Edit role permissions, create new roles and set Link
                      default for new people in your instance
                    </p>
                  </div>
                  <div className="buttons mt-3">
                    <Link
                      href={ROUTE_URL.ADD_MANAGEMENT_USER}
                      className="btn mr-2 btn-primary"
                    >
                      <Image src={PlusIcon} alt="Add" />
                      Add Role
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-2 align-items-center">
              <div className="col-12 col-md-6">
                {/* <p className="text-muted">Filtered to 2 people of 2</p> */}
              </div>
              <div className="col-12 col-md-6 text-right d-flex">
                <Link href="#" className="btn btn-outline-light mr-2 ml-auto">
                  10 COLUMNS SELECTED OF 20
                </Link>
                <Link href="#" className="btn btn-outline-light mr-2">
                  CLEAR FILTERS
                </Link>
                <div className="form-group mb-0 search-form position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search user"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fa fa-search" onClick={handleSearch}></i>
                </div>
              </div>
            </div>
            <div className="table-responsive mt-3">
              <Table className="table table-light user-table" hover>
                <thead>
                  <tr>
                    <th>
                      <div className="custom-control custom-checkbox text-muted">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="check_all"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="check_all"
                        >
                          &nbsp;
                        </label>
                      </div>
                    </th>
                    <th>
                      Role Name
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter text-muted"></i>
                      </span>
                    </th>
                    <th>
                      Created
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter text-muted"></i>
                      </span>
                    </th>
                    <th>
                      Last Activity
                      <span className="text-right float-right">
                        <i className="r-icon r-icon-filter text-muted"></i>
                      </span>
                    </th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rolesData.map((roles) => {
                    return (
                      <>
                        <tr key={roles.id}>
                          <td>
                            <div className="custom-control custom-checkbox text-muted">
                              <inpu
                                type="checkbox"
                                className="custom-control-input"
                                id={roles.id}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>{roles.name}</td>
                          <td>
                            {new Date(roles.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })}
                          </td>
                          <td>{roles.lastActivity}</td>
                          <td>
                            <div className="buttons">
                              <Link href={`${ROUTE_URL.EDIT_ROLE}${roles?.id}`} className="text-info">
                                <i className="r-icon r-icon-pencil"></i>
                              </Link>
                              <Link
                                href="#"
                                className="text-danger"
                                onClick={() => handleRolesDelete(roles.id)}
                              >
                                <i className="r-icon r-icon-delete"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default RoleManagement;
