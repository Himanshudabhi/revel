import axios from "axios";
import { TextField } from "@/src/common/commonsource/sourceField";
// import usePostApi from "@/src/common/postapihook";
import usePostApi from "@/src/customHooks/usePostApi";

import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Collapse, TextBox, Label } from "react-bootstrap";
import useFetch from "@/src/customHooks/useGetApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRole = (props) => {
  const [userid, setuserid] = useState(props.id);
  console.log("userid", userid);
  const [add, setadd] = useState(false);
  const [ison, setison] = useState(false);
  const [istrue, setistrue] = useState(false);

  const [open, setOpen] = useState("");
  const [formData, setFormData] = useState("");
  const { postApi, loading, error } = usePostApi();

  const [data, setData] = useState([]);
  const [switchValue, setSwitchValue] = useState(0);
  const [fleg, setfleg] = useState(false);
  const [checkboxArray, setCheckboxArray] = useState([]);
  const collapseRef = useRef(null);
  const [rolesData, setRolesData] = useState([]);
  const [chacked, setchacked] = useState(false);
  const [editCheck, seteditCheck] = useState([]);

  // console.log("checkboxArray", checkboxArray);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckboxArray([...checkboxArray, checkboxValue]);
    } else {
      setCheckboxArray(
        checkboxArray.filter((value) => value !== checkboxValue)
      );
    }
    // console.log(
    //   "setCheckboxArray([...checkboxArray, checkboxValue]);",
    //   checkboxArray
    // );
  };

  // const rightsArray = [
  //   "User_Add",
  //   "User_View",
  //   "Tenant_View",
  //   "Role_Update",
  //   "Dataset_Update",
  //   "Connector_View",
  //   "ConnectorConfig_View",
  //   "ConnectorConfig_Add",
  // ];
  const rightsObject = checkboxArray.reduce((acc, right) => {
    const [moduleName, permission] = right.split("_");
    if (!acc[moduleName]) {
      acc[moduleName] = [];
    }
    acc[moduleName].push(permission);
    return acc;
  }, {});

  //console.log("rightsObject", rightsObject);

  let datas = Object.entries(rightsObject);
  let obj = datas?.map((ele) => {
    return {
      moduleName: ele[0],
      permissions: ele[1],
    };
  });
  console.log("obj", obj);

  // rightsObject?.map((ins)=>{
  //   return{
  //     moduleName:ins[0]
  //   }
  // })

  // let datas = Object.entries(checkboxArray);
  // datas.split()
  // let obj = datas?.map((ele) => {
  //   return {
  //     key: ele[0],
  //     value: ele[1],
  //   };
  // });
  // console.log("obj",obj)

  // const obj = checkboxArray?.map((ins)=>{
  //   return{
  //    ins: ins

  //   }
  // })
  // console.log("obj",obj)
  const handelGetRole = async () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }

    const res = await axios.get(
      "http://master.revel-dev.test:9876/modulesRights/v1/getAll",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
          "Cache-Control": "no-cache",
        },
      }
    );
    // setfleg(true)
    setData(res?.data?.data[0]);
  };

  useEffect(() => {
    handelGetRole();
  }, [fleg]);
  console.log("data2,", data);

  const handleDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log("formddata", formData);
  console.log("data2", data.rights);

  // const data2 = data?.rights?.map((ins,e)=>{
  //   return{
  //     moduleName: ins.moduleName === e.target.value,
  //   }
  // })
  // console.log("data3",data2)

  const handleSwitchChange = () => {
    const newValue = switchValue === 0 ? 1 : 0;
    setSwitchValue(newValue);
  };

  const handleSubmit = async () => {
    const data = {
      name: formData.role,
      status: switchValue,
      code: "Owner",
      rights: obj,
    };
    const url = "http://master.revel-dev.test:9876/role/v1/add";
    toast.success("Role Add successfully")


    postApi(url, data);
  };

  const handleCheckCollapse = (index) => {
    // if(open == index ){
    // setOpen("");
    // }else{
    //   setOpen(index)
    // }

    if (open === index) setOpen("");
    else setOpen(index);
    // console.log('Collapse value:', collapseRef.current);
  };

  //================================================
  const hendalEdit = async () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
    const res = await axios.get(
      `http://master.revel-dev.test:9876/role/v1/get/${userid?.roleId}`,
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
    // const responseData = res?.data?.data
    setRolesData(res?.data?.data);
    // setRolesData(responseData?.rights.map((right => right.moduleName)));
    // formData(rolesData.name)
    console.log("checkArray ", rolesData);
    if (rolesData && rolesData) {
      setFormData({ role: rolesData?.name });

      //  rolesData?.rights?.map((right) => {
      // console.log("===============",right.moduleName)
      const updatedCheckboxes = rolesData?.rights?.map((checkbox) => {
        const match = checkbox.permissions.find(
          (item) => item[0] === checkbox.id
        );
        return match ? { ...checkbox, checked: true } : checkbox;
      });
      // setCheckboxes(updatedCheckboxes);

      // })
      console.log("editchack", updatedCheckboxes);

      // console.log("array",array);

      // rolesData.rights.map((val)=>{
      //   let arr = val.moduleName
      //   val.permission.map((ins)=>)
      // })

      // setSwitchValue({switchValue:rolesData.status})
      // console.log({
      //   rolesData.rights.
      // })
    }
    // console.log("===================",switchValue)

    // rolesData?.rights?.map((val)=>{

    //   if(rolesData && rolesData.rights){
    //     console.log("chack data=======",val.moduleName)

    //     {val?.permissions?.map((ins)=>{
    //       console.log("permissions",val.moduleName+ins)

    //       checkboxArray.push(val.moduleName+ins);

    //                //{val.moduleName+ins === "UserAdd" ? chcked :  ""}

    //     })}
    //     console.log("checkboxArray===",checkboxArray)
    //       // console.log("hellooooooo",val.permissions.checkboxValue);
    //       // let chack = val.permissions === chacked ?  : "false"
    //       // console.log("chack",chack)
    //       // setCheckboxArray(val.permissions)

    // }

    // })
  };

  useEffect(() => {
    // if (typeof userid !== "undefined") {
    hendalEdit();
    // }
  }, [fleg]);

  const updateCheckboxes = () => {};

  return (
    <>
      <main class="main-content" id="main">
        <div class="container-fluid">
          <div class="row px-2">
            <div class="col-12">
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <h4 class="page-title font-20 text-dark mb-1 mt-3">
                    Add-Role
                  </h4>
                  <p class="text-muted font-12">
                    Edit role permissions, create new roles and set a default
                    for new people in your instance
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="login-form p-0">
            <div class="row px-2">
              <div class="col-12 col-md-3">
                <div class="mb-2"> Role Name</div>
                <div class="form-group label-inside">
                  {/* <input type="text" class="form-control" id="role_name" /> */}
                  <TextField
                    type="text"
                    name="role"
                    onChange={handleDataChange}
                    value={formData.role}
                  />
                </div>
              </div>

              <div class="col-12 col-md-3">
                <label class="d-block" style={{ height: "0px;" }}>
                  &nbsp;
                </label>
                <div class="custom-control custom-switch mt-status">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="conntect_http"
                    checked={switchValue === 1}
                    onChange={handleSwitchChange}
                  />
                  <label
                    class="custom-control-label d-inline-block mb-1"
                    for="conntect_http"
                  >
                    Status
                  </label>
                </div>
              </div>
            </div>
          </div>
          {console.log("add", add)}
          <div class="row px-2">
            <div class="col-12">
              <div class="accordions" id="accordion">
                {data?.rights?.map((value, index) => {
                  console.log("value", value.moduleName);
                  return (
                    <>
                      <div class="collapse-item">
                        {/* <div class={`collapse-header ${add === true ? "collapsed" : ""}`} data-target="#media" data-toggle="collapse" onClick={Clickhendal} aria-expanded="true"> */}
                        {/* <div class={`collapse-header ${add === true ? "collapsed" : ""}`} data-target="#media" data-toggle="collapse" onClick={Clickhendal} aria-expanded="true"> */}
                        <div
                          className="collapse-header"
                          onClick={() => handleCheckCollapse(index)}
                          aria-controls={value.moduleName}
                          aria-expanded={open === index}
                        >
                          <i class="fa fa-chevron-down mr-2"></i>
                          {value.moduleName}
                        </div>
                        <Collapse in={open === index}>
                          {/* <Collapse in={open}> */}
                          <div id={value.moduleName} data-parent="#accordion">
                            <div class="d-grid column-8">
                              {value.permissions.map((ins, index) => {
                                console.log("ins", ins);
                                // console.log("ins0", ins[0]);
                                return (
                                  <>
                                    <div>{ins}</div>
                                    <div>
                                      <div
                                        class="custom-control custom-checkbox text-muted"
                                        key={ins.id}
                                      >
                                        <input
                                          type="checkbox"
                                          class="custom-control-input"
                                          id={value.moduleName + ins}
                                          name={value.moduleName}
                                          value={value.moduleName + "_" + ins}
                                          // checked={ins === "Add" ? true : false}
                                          checked={checkboxArray.includes(value.moduleName + "_" + ins)}
                                          onChange={handleCheckboxChange}
                                        />
                                        <label
                                          class="custom-control-label"z
                                          for={value.moduleName + ins}
                                        >
                                          &nbsp;
                                        </label>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </Collapse>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="row px-2">
            <div class="col-12">
              <div class="d-flex justify-content-center my-3">
                <Link
                  href={ROUTE_URL.ROLE_MANAGEMENT}
                  class="btn-lg btn btn-muted btn-default mr-2 min-width-150"
                >
                  CANCEL
                </Link>
                <Link
                    href={ROUTE_URL.ROLE_MANAGEMENT}
                  // href="#"
                  class="btn-lg btn  btn-primary min-width-150"
                  onClick={handleSubmit}
                >
                  SAVE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Image
                src="https://images.pexels.com/photos/13260076/pexels-photo-13260076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Description of the image"
                width={200}
                height={200}
            ></Image> */}
    </>
  );
};
export default AddRole;
