import Image from "next/image";
import { DownloadIcon, PlusIcon, ImportIcon, cancelIcon } from "@/src/assets/img/icons";
import UserForm from "./userForm";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
const User = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div class="wrapper">
                <main class="main-content" id="main">
                    <div class="container-fluid">
                        <div class="row px-2">
                            <div class="col-12">
                                <div class="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h4 class="page-title font-20 text-dark mb-1 mt-3">
                                            User
                                        </h4>
                                        <p class="text-muted font-12" style={{ marginBottom: "7px;" }}>
                                            Invite colleagues and manage REVEL accounts
                                        </p>
                                    </div>
                                    <div class="buttons mt-3">
                                        <a variant="primary" onClick={handleShow} class="btn mr-2 btn-primary" data-toggle="modal"
                                            data-target="#add_user">
                                            <Image src={PlusIcon} alt="Add" />
                                            Add User
                                        </a>
                                        <a href="javascript:void(0)" class="btn mr-2 btn-outline-light">
                                            <Image src={DownloadIcon} alt="Download" />
                                        </a>
                                        <a href="javascript:void(0)" class="btn  btn-outline-light">
                                            Bulk import
                                            <Image src={ImportIcon} alt="Bulk Import" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row px-2 mt-3">
                            <div class="col-12 col-md-3">
                                <div class="card">
                                    <div class="card-header p-3">
                                        <h5 class="card-title font-16">
                                            NEW PEOPLE 7 DAYS
                                        </h5>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="text-primary font-36">10</div>
                                        <p class="text-muted font-12 mb-0">Last week: 1</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="card">
                                    <div class="card-header p-3">
                                        <h5 class="card-title font-16">
                                            DELETED PEOPLE 7 DAYS
                                        </h5>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="text-primary font-36">0</div>
                                        <p class="text-muted font-12 mb-0">Last week: 0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row px-2 align-items-center">
                            <div class="col-12 col-md-6">
                                <p class="text-muted">
                                    Filtered to 2 people of 2
                                </p>
                            </div>
                            <div class="col-12 col-md-6 text-right d-flex">
                                <a href="javascript:void(0)" class="btn btn-outline-light mr-2 ml-auto">10 COLUMNS SELECTED OF
                                    20</a>
                                <a href="javascript:void(0)" class="btn btn-outline-light mr-2">CLEAR FILTERS</a>
                                <div class="form-group mb-0 search-form position-relative">
                                    <input type="text" class="form-control" placeholder="Search user" />
                                    <i class="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive mt-3">
                            <table class="table table-light user-table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="custom-control custom-checkbox text-muted">
                                                <input type="checkbox" class="custom-control-input" id="check_all" />
                                                <label class="custom-control-label" for="check_all">&nbsp;</label>
                                            </div>
                                        </th>
                                        <th>
                                            Name
                                            <span class="text-right float-right">
                                                <i class="r-icon r-icon-filter text-muted"></i>
                                            </span>
                                        </th>
                                        <th>
                                            Email

                                            <span class="text-right float-right">
                                                <i class="r-icon r-icon-filter text-muted"></i>
                                            </span>
                                        </th>
                                        <th>
                                            Role

                                            <span class="text-right float-right">
                                                <i class="r-icon r-icon-filter text-muted"></i>
                                            </span>
                                        </th>
                                        <th class="text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="custom-control custom-checkbox text-muted">
                                                <input type="checkbox" class="custom-control-input" id="1" />
                                                <label class="custom-control-label" for="1">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="user-name short-name bg-warning">
                                                AB
                                            </span>
                                            <span>Amar Bhardwaj</span>
                                        </td>
                                        <td>
                                            amer@revel.com
                                        </td>
                                        <td>
                                            <span class="badge badge-muted role-badge "> Member</span>
                                        </td>
                                        <td>
                                            <div class="buttons">
                                                <a href="javascript:void(0)" class="text-muted">
                                                    <i class="r-icon r-icon-info-outline"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-info">
                                                    <i class="r-icon r-icon-pencil"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-danger">
                                                    <i class="r-icon r-icon-delete"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="custom-control custom-checkbox text-muted">
                                                <input type="checkbox" class="custom-control-input" id="1" />
                                                <label class="custom-control-label" for="1">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="user-name short-name bg-primary">
                                                AB
                                            </span>
                                            <span>Amar Bhardwaj</span>
                                        </td>
                                        <td>
                                            amer@revel.com
                                        </td>
                                        <td>
                                            <span class="badge badge-muted role-badge "> Member</span>
                                        </td>
                                        <td>
                                            <div class="buttons">
                                                <a href="javascript:void(0)" class="text-muted">
                                                    <i class="r-icon r-icon-info-outline"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-info">
                                                    <i class="r-icon r-icon-pencil"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-danger">
                                                    <i class="r-icon r-icon-delete"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="custom-control custom-checkbox text-muted">
                                                <input type="checkbox" class="custom-control-input" id="1" />
                                                <label class="custom-control-label" for="1">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="user-name short-name bg-secondary">
                                                AB
                                            </span>
                                            <span>Amar Bhardwaj</span>
                                        </td>
                                        <td>
                                            amer@revel.com
                                        </td>
                                        <td>
                                            <span class="badge badge-muted role-badge "> Member</span>
                                        </td>
                                        <td>
                                            <div class="buttons">
                                                <a href="javascript:void(0)" class="text-muted">
                                                    <i class="r-icon r-icon-info-outline"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-info">
                                                    <i class="r-icon r-icon-pencil"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-danger">
                                                    <i class="r-icon r-icon-delete"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="custom-control custom-checkbox text-muted">
                                                <input type="checkbox" class="custom-control-input" id="1" />
                                                <label class="custom-control-label" for="1">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="user-name short-name bg-success">
                                                AB
                                            </span>
                                            <span>Amar Bhardwaj</span>
                                        </td>
                                        <td>
                                            amer@revel.com
                                        </td>
                                        <td>
                                            <span class="badge badge-muted role-badge "> Member</span>
                                        </td>
                                        <td>
                                            <div class="buttons">
                                                <a href="javascript:void(0)" class="text-muted">
                                                    <i class="r-icon r-icon-info-outline"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-info">
                                                    <i class="r-icon r-icon-pencil"></i>
                                                </a>
                                                <a href="javascript:void(0)" class="text-danger">
                                                    <i class="r-icon r-icon-delete"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Add User</Modal.Title>
                    <Image src={cancelIcon} alt="Back" class="img-fluid" width="15"
                        style={{ filter: "grayscale(1)" }} onClick={handleClose} />
                </Modal.Header>
                <Modal.Body><UserForm /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save

                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <div id="add_user" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title">Add User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.422" height="20.422"
                                        viewBox="0 0 20.422 20.422">
                                        <path id="icons8_close"
                                            d="M5.265,3.99a1.274,1.274,0,0,0-.889,2.188L12.4,14.2,4.376,22.217a1.274,1.274,0,1,0,1.8,1.8L14.2,16l8.019,8.019a1.274,1.274,0,1,0,1.8-1.8L16,14.2l8.019-8.019a1.274,1.274,0,1,0-1.8-1.8L14.2,12.4,6.178,4.376A1.274,1.274,0,0,0,5.265,3.99Z"
                                            transform="translate(-3.99 -3.99)" fill="#a3a3a3" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                        </div>
                        <div class="modal-footer justify-content-center">
                            <div class="text-center my-2">
                                <a href="javascript:void(0)" class="btn btn-muted mr-2" data-dismiss="modal">Cancel</a>
                                <a href="javascript:void(0)" class="btn btn-primary" data-dismiss="modal">Save</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default User;