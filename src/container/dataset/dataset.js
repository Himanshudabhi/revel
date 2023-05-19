import { CsvFileIcon,MySqlIcone,MOngoDbIcone,PlusIcon,cancelIcon} from "@/src/assets/img/icons"
import Image from "next/image"
import { useState } from "react";


const DataSet = ()=>{
    const [show, setShow] = useState(false);
    const ToggleClick = () => {
        setShow(!show);
        console.log("show", show);
    };

    return(
        <>
    <div class="wrapper">

         <main class="main-content" id="main">
            <div class="container-fluid">
                <div class="row px-2">
                    <div class="col-12 pr-2">
                        <div class="d-flex justify-content-between align-items-start">
                            <div>
                                <h4 class="page-title font-20 text-dark mb-1 mt-3">
                                    Dataset
                                </h4>
                                <p class="text-muted font-12">
                                    Move data between any Source and Destination
                                </p>
                            </div>
                            <div class="buttons mt-3">
                                <a href="javascript:void(0)" class="btn mr-2 btn-primary">
                                <Image src={PlusIcon} alt="Add"/>
                                    Add Dataset
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row px-2 align-items-center">
                    <div class="col-12 col-md-7 mx-auto">
                        <div class="form-group mb-0 search-form position-relative">
                            <input type="text" class="form-control" placeholder="MySQL Source"/>
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
                </div>
                <div class="px-2 row mt-3 source-card-grid">
                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#D3F3E3;"}}>
                                                <Image src={CsvFileIcon} alt="CSV Download"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    CSV Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - CSV
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#FCEEB8;"}}>
                                            <Image src={MySqlIcone} alt="MySQL"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    MySQL Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - MySQL
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#B7E5CA;"}}>
                                            <Image src={MOngoDbIcone} alt="MongoDB"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    Mongodb Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - Mongodb
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#D3F3E3;"}}>
                                            <Image src={CsvFileIcon} alt="CSV Download"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    CSV Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - CSV
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#FCEEB8;"}}>
                                            <Image src={MySqlIcone} alt="MySQL"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    MySQL Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - MySQL
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#B7E5CA;"}}>
                                            <Image src={MOngoDbIcone} alt="MongoDB"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    Mongodb Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - Mongodb
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#D3F3E3;"}}>
                                            <Image src={CsvFileIcon} alt="CSV Download"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    CSV Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - CSV
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#FCEEB8;"}}>
                                            <Image src={MySqlIcone} alt="MySQL"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    MySQL Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - MySQL
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#B7E5CA;"}}>
                                            <Image src={MOngoDbIcone} alt="MongoDB"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    Mongodb Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - Mongodb
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#D3F3E3;"}}>
                                            <Image src={CsvFileIcon} alt="CSV Download"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    CSV Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - CSV
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar">
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="text-muted icon-box">
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#FCEEB8;"}}>
                                            <Image src={MySqlIcone} alt="MySQL"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    MySQL Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - MySQL
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                            <div class="row align-items-center mx-0">
                                <div class="col-12 col-md-6 px-0">
                                    <div class="d-flex align-items-center">
                                        <a  class="text-muted icon-box" >
                                            <i class="r-icon-arrow-up2"></i>
                                        </a>
                                        <div class="d-flex align-items-center">
                                            <div class="icon-wrapper" style={{background: "#B7E5CA;"}}>
                                            <Image src={MOngoDbIcone} alt="MongoDB"/>
                                            </div>
                                            <div>
                                                <p class="mb-0">
                                                    Mongodb Source
                                                </p>
                                                <small class="text-muted">
                                                    Rydot - Mongodb
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-0 text-right">
                                    <div class="ml-auto">
                                        <span class="mr-3 d-inline-block">
                                            <span class="badge badge-muted min-90 role-badge text-center">
                                                DRAFT</span>
                                            <a href="javascript:void(0)" class="text-danger">
                                                <i class="r-icon r-icon-delete  ml-2"></i>
                                            </a>
                                        </span>
                                        <a href="javascript:void(0)" class="text-muted">
                                            <i class="r-icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0)" class="btn mr-2 btn-primary min-width-150">
                        Next
                    </a>
                </div>
            </div>
        </main>
    </div>
    <div class={`right-sidebar ${show ? "open" : ""} `}>
        <div class="col-12">
            <div class="d-flex justify-content-end">
                <a href="javascript:void(0)" class="sidebar-toggler close-sidebar" onClick={ToggleClick}>
                    <Image src={cancelIcon} alt="Back" class="img-fluid" width="15" style={{filter:" grayscale(1);"}}/>
                </a>
            </div>
            <div class="text-center  py-5 position-relative">
            <Image src={MySqlIcone} alt="MongoDB" class="img-fluid position-absolute page-logo" width="150"/>
                <h3 class="font-24 mb-3">Configure your MySQL Source</h3>
                <p>
                    Follow the guide on the right to set up your Source
                </p>
            </div>
            <a href="javascript:void(0)" class="text-muted mb-3 d-flex justify-content-end align-items-center">
                Draft Saved <i class="fa fa-share ml-2"></i>
            </a>
            <div class="alert alert-outline-primary text-left">
                <i class="r-icon r-icon-info text-primary"></i> There are <strong>Prerequisites</strong>
                that you must ensure to set up this Source for your Pipeline.
                <a href="javascript:void(0)" class="text-primary">Learn More<i class="r-icon r-icon-arrow-right2 ml-2"></i> </a>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="form-group label-inside label-left">
                        <input type="text" class="form-control p-10-15" id="pipeline"/>
                        <label for="pipeline">Pipeline Name</label>
                        <small class="mt-1 d-inline-block text-grey font-10">A unique name for your
                            Pipeline</small>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group label-inside label-left">
                        <input type="text" class="form-control p-10-15" id="pipeline1"/>
                        <label for="pipeline1">Pipeline Name</label>
                        <small class="mt-1 d-inline-block text-grey font-10">A unique name for your
                            Pipeline</small>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group label-inside label-left">
                        <input type="text" class="form-control p-10-15" id="data_host"/>
                        <label for="data_host"> Database Host </label>
                        <small class="mt-1 d-inline-block text-grey font-10">The IP address or DNS name of
                            your database server</small>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group label-inside label-left">
                        <input type="text" class="form-control p-10-15" id="data_port"/>
                        <label for="data_port"> Database Port </label>
                        <small class="mt-1 d-inline-block text-grey font-10">
                            The port on which the database is accepting connections
                        </small>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group label-inside label-left">
                        <input type="text" class="form-control p-10-15" id="data_user"/>
                        <label for="data_user"> Database User </label>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group label-inside label-left">
                        <input type="text" class="form-control p-10-15" id="data_password"/>
                        <label for="data_password"> Database Password </label>
                    </div>
                </div>
            </div>
            <div class="custom-control custom-switch ml-3 mb-3">
                <input type="checkbox" class="custom-control-input" id="ssl"/>
                <label class="custom-control-label d-inline-block mb-1" for="ssl">Use SSL</label>
                <div class="text-grey font-10">Connect over an SSL-encrypted connection
                </div>
            </div>
            <p class="font-weight-500">
                Select an Ingestion Mode
            </p>
            <div class="card">
                <div class="card-body">
                    <div class="switch-wrapper">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="opt_log" name="secure" class="custom-control-input"/>
                            <label class="custom-control-label" for="opt_log">BinLog
                                <span class="badge badge-primary ml-2"> Recommended </span>
                                <div class="text-grey font-10 mt-2">
                                    Data is ingested using the MySQL BinLog. This is the most efficient way
                                    to set up real-time change data capture.
                                    Deletes are also replicated to the Destination.
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="switch-wrapper">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="stream" name="secure" class="custom-control-input"/>
                            <label class="custom-control-label" for="stream">Custom SQL
                                <div class="text-grey font-10 mt-2">
                                    Data is ingested by running a custom SQL query provided by you on the
                                    database. With this mode,
                                    you can replicate database views or selective data sets queried through
                                    the SQL query.
                                    Deletes are not replicated to the Destination.
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                Please open access to the undefined port from Hevo's IP address<span class="badge badge-danger"> 13.235.131.126</span>
            </p>
            <div class="custom-control custom-switch ml-3 mb-3">
                <input type="checkbox" class="custom-control-input" id="conntect_http"/>
                <label class="custom-control-label d-inline-block mb-1" for="conntect_http">Connect Through
                    SSH</label>
                <div class="text-grey font-10">Connect securely through a SSH tunnel server.</div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9.018" height="13.116" viewBox="0 0 9.018 13.116">
                            <path id="icons8_sort_down" d="M20.5,13H8.615a.615.615,0,0,0-.489.988l5.943,7.788a.615.615,0,0,0,.978,0l5.943-7.788A.615.615,0,0,0,20.5,13Z" transform="translate(-13 21.116) rotate(-90)" fill="#5b5b5b"></path>
                        </svg>
                        <span>Advanced Settings</span>
                    </h4>
                </div>
                <div class="card-body">
                    <div class="custom-control custom-switch ml-3 mb-3">
                        <input type="checkbox" class="custom-control-input" id="load_data"/>
                        <label class="custom-control-label d-inline-block mb-1" for="load_data">Load
                            Historical Data</label>
                        <div class="text-grey font-10">If disabled, REVEL loads only the data that is
                            written to your database after the time of creation of
                            the Pipeline
                        </div>
                    </div>
                    <div class="custom-control custom-switch ml-3 mb-3">
                        <input type="checkbox" class="custom-control-input" id="new_pipeline"/>
                        <label class="custom-control-label d-inline-block mb-1" for="new_pipeline">Include
                            New Tables in the Pipeline</label>
                        <div class="text-grey font-10">If enabled, Hevo automatically ingests from any
                            tables created or restored after the Pipeline is created.
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center my-3">
                <a href="javascript:void(0)" class="btn-lg btn btn-muted btn-default mr-2">TEST
                    CONNECTION</a>
                <a href="javascript:void(0)" class="btn-lg btn  btn-primary">TEST &amp; CONTINUE</a>
            </div>
        </div>
    </div>
        </>
    )
}
export default DataSet