import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
const AddRole = () => {
    const [add, setadd] = useState(false)
    const [ison, setison] = useState(false)
    const [istrue, setistrue] = useState(false)

    const [open, setOpen] = useState(false);



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
                                        Edit role permissions, create new roles and set a default for new people in your
                                        instance
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
                                    <input type="text" class="form-control" id="role_name" />

                                </div>
                            </div>


                            <div class="col-12 col-md-3">
                                <label class="d-block" style={{ height: "0px;" }}>&nbsp;</label>
                                <div class="custom-control custom-switch mt-status">
                                    <input type="checkbox" class="custom-control-input" id="conntect_http" />
                                    <label class="custom-control-label d-inline-block mb-1"
                                        for="conntect_http">Status</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {console.log("add", add)}
                    <div class="row px-2">
                        <div class="col-12">
                            <div class="d-grid column-8">
                                <div>&nbsp;</div>
                                <div>Add</div>
                                <div>Edit</div>
                                <div>View</div>
                                <div>Delete</div>
                                <div>Import</div>
                                <div>Export</div>
                                <div>Run</div>
                            </div>
                            <div class="accordions" id="accordion">
                                <div class="collapse-item">
                                    {/* <div class={`collapse-header ${add === true ? "collapsed" : ""}`} data-target="#media" data-toggle="collapse" onClick={Clickhendal} aria-expanded="true"> */}
                                    {/* <div class={`collapse-header ${add === true ? "collapsed" : ""}`} data-target="#media" data-toggle="collapse" onClick={Clickhendal} aria-expanded="true"> */}
                                    <div className="collapse-header"
                                        onClick={() => setOpen(!open)}
                                        aria-controls="media"
                                        aria-expanded={open}
                                    >

                                        <i class="fa fa-chevron-down mr-2"></i>
                                        Media
                                    </div>
                                    <Collapse in={open}>
                                        <div id="media" data-parent="#accordion">
                                            <div class="d-grid column-8">
                                                <div>User Media</div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="1" checked />
                                                        <label class="custom-control-label" for="1">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="2" />
                                                        <label class="custom-control-label" for="2">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="3" />
                                                        <label class="custom-control-label" for="3">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="4" />
                                                        <label class="custom-control-label" for="4">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="5" />
                                                        <label class="custom-control-label" for="5">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="6" />
                                                        <label class="custom-control-label" for="6">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="7" />
                                                        <label class="custom-control-label" for="7">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-grid column-8">
                                                <div>User Media</div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted" >
                                                        <input type="checkbox" class="custom-control-input" id="1" checked />
                                                        <label class="custom-control-label" for="1">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="2" />
                                                        <label class="custom-control-label" for="2">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="3" />
                                                        <label class="custom-control-label" for="3">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="4" />
                                                        <label class="custom-control-label" for="4">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="5" />
                                                        <label class="custom-control-label" for="5">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="6" />
                                                        <label class="custom-control-label" for="6">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="7" />
                                                        <label class="custom-control-label" for="7">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                                <div class="collapse-item">
                                    {/* <div class="collapse-header" data-target="#dashboard" data-toggle="collapse" onClick={ClickButton}> */}
                                    <div className="collapse-header"
                                        onClick={() => setadd(!add)}
                                        aria-controls="dashboard"
                                        aria-expanded={add}
                                    >
                                        <i class="fa fa-chevron-down mr-2"></i>
                                        My Dashboard
                                    </div>
                                    <Collapse in={add}>
                                        <div id="dashboard" data-parent="#accordion">
                                            <div class="d-grid column-8">
                                                <div>Dashboard</div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="1" checked />
                                                        <label class="custom-control-label" for="1">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="2" />
                                                        <label class="custom-control-label" for="2">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="3" />
                                                        <label class="custom-control-label" for="3">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="4" />
                                                        <label class="custom-control-label" for="4">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="5" />
                                                        <label class="custom-control-label" for="5">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="6" />
                                                        <label class="custom-control-label" for="6">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="7" />
                                                        <label class="custom-control-label" for="7">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                                <div class="collapse-item">
                                    {/* <div class="collapse-header" data-target="#powerbi" data-toggle="collapse" > */}
                                    <div className="collapse-header"
                                        onClick={() => setison(!ison)}
                                        aria-controls="powerbi"
                                        aria-expanded={ison}
                                    >
                                        <i class="fa fa-chevron-down mr-2"></i>
                                        Power BI
                                    </div>
                                    <Collapse in={ison}>

                                        <div id="powerbi" class={`collapse ${istrue ? "show" : ""}`} data-parent="#accordion">
                                            <div class="d-grid column-8">
                                                <div>Power BI</div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="1" checked />
                                                        <label class="custom-control-label" for="1">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="2" />
                                                        <input type="checkbox" class="custom-control-input" id="4" />
                                                        <label class="custom-control-label" for="4">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="5" />
                                                        <label class="custom-control-label" for="5">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="6" />
                                                        <label class="custom-control-label" for="6">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox text-muted">
                                                        <input type="checkbox" class="custom-control-input" id="7" />
                                                        <label class="custom-control-label" for="7">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row px-2">
                        <div class="col-12">
                            <div class="d-flex justify-content-center my-3">
                                <Link href={ROUTE_URL.ROLE_MANAGEMENT} class="btn-lg btn btn-muted btn-default mr-2 min-width-150">CANCEL</Link>
                                <Link href={ROUTE_URL.ROLE_MANAGEMENT} class="btn-lg btn  btn-primary min-width-150">SAVE</Link>
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
    )
}
export default AddRole;