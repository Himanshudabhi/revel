import Image from "next/image"
import { PlusIcon, searchimg } from "@/src/assets/img/icons"
import { ROUTE_URL } from "@/src/constant/url"
import Link from "next/link"


const RoleManagement = () => {
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
                                            Role Management
                                        </h4>
                                        <p class="text-muted font-12">
                                            Edit role permissions, create new roles and set a default for new people in your instance
                                        </p>
                                    </div>
                                    <div class="buttons mt-3">
                                        <Link href={ROUTE_URL.ADD_MANAGEMENT_USER} class="btn mr-2 btn-primary">
                                            <Image src={PlusIcon} alt="Add" />
                                            Add Role
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row px-2 align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <p class="text-muted">
                                    Filtered to 2 people of 2
                                </p> */}
                            </div>
                            <div class="col-12 col-md-6 text-right d-flex">
                                <a href="javascript:void(0)" class="btn btn-outline-light mr-2 ml-auto">10 COLUMNS SELECTED OF
                                    20</a>
                                <a href="javascript:void(0)" class="btn btn-outline-light mr-2">CLEAR FILTERS</a>
                                <div class="form-group mb-0 search-form position-relative">
                                    <input type="text" class="form-control" placeholder="Search user" />
                                    <i class="fa fa-search"></i>
                                    {/* <i class="fa fa-search"></i> */}

                                </div>
                                {/* <Image src={searchimg} alt="Search" className="img-fluid" /> */}
                            </div>
                        </div>
                        <i class="fa-light fa-magnifying-glass" style={{ color: "#295094;" }}></i>
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
                                            Role Name
                                            <span class="text-right float-right">
                                                <i class="r-icon r-icon-filter"></i>
                                            </span>
                                        </th>

                                        <th>
                                            Created

                                            <span class="text-right float-right">
                                                <i class="r-icon r-icon-filter"></i>
                                            </span>
                                        </th>
                                        <th>
                                            Last Activity
                                        </th>
                                        <th class="text-center">
                                            Action
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
                                            REVEL
                                        </td>

                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            <div class="buttons">
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
                                                <input type="checkbox" class="custom-control-input" id="2" />
                                                <label class="custom-control-label" for="2">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            RYDOT
                                        </td>

                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            <div class="buttons">
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
                                                <input type="checkbox" class="custom-control-input" id="3" />
                                                <label class="custom-control-label" for="3">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            Airtel
                                        </td>

                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            <div class="buttons">
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
                                                <input type="checkbox" class="custom-control-input" id="4" />
                                                <label class="custom-control-label" for="4">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            GEC
                                        </td>

                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            Dec 10, 2022 11:10AM
                                        </td>
                                        <td>
                                            <div class="buttons">
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

        </>
    )
}
export default RoleManagement