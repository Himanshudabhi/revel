import { CsvFileIcon, MySqlIcone, MOngoDbIcone, PlusIcon, cancelIcon } from "@/src/assets/img/icons"
import CoustomModal from "@/src/common/custommodal";
import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DataSet = () => {
    const [show, setShow] = useState(false);
    const ToggleClick = () => {
        setShow(!show);
        // console.log("show", show);
    };

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <div className="wrapper">

                <main className="main-content" id="main">
                    <div className="container-fluid">
                        <div className="row px-2">
                            <div className="col-12 pr-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h4 className="page-title font-20 text-dark mb-1 mt-3">
                                            Dataset
                                        </h4>
                                        <p className="text-muted font-12">
                                            Move data between any Source and Destination
                                        </p>
                                    </div>
                                    <div className="buttons mt-3">
                                        <a href="javascript:void(0)" className="btn mr-2 btn-primary">
                                            <Image src={PlusIcon} alt="Add" />
                                            Add Dataset
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row px-2 align-items-center">
                            <div className="col-12 col-md-7 mx-auto">
                                <div className="form-group mb-0 search-form position-relative">
                                    <input type="text" className="form-control" placeholder="MySQL Source" />
                                    <i className="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 row mt-3 source-card-grid">
                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#D3F3E3;" }}>
                                                        <Image src={CsvFileIcon} alt="CSV Download" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            CSV Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - CSV
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#FCEEB8;" }}>
                                                        <Image src={MySqlIcone} alt="MySQL" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            MySQL Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - MySQL
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#B7E5CA;" }}>
                                                        <Image src={MOngoDbIcone} alt="MongoDB" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            Mongodb Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - Mongodb
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#D3F3E3;" }}>
                                                        <Image src={CsvFileIcon} alt="CSV Download" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            CSV Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - CSV
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#FCEEB8;" }}>
                                                        <Image src={MySqlIcone} alt="MySQL" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            MySQL Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - MySQL
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#B7E5CA;" }}>
                                                        <Image src={MOngoDbIcone} alt="MongoDB" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            Mongodb Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - Mongodb
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#D3F3E3;" }}>
                                                        <Image src={CsvFileIcon} alt="CSV Download" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            CSV Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - CSV
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#FCEEB8;" }}>
                                                        <Image src={MySqlIcone} alt="MySQL" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            MySQL Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - MySQL
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#B7E5CA;" }}>
                                                        <Image src={MOngoDbIcone} alt="MongoDB" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            Mongodb Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - Mongodb
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#D3F3E3;" }}>
                                                        <Image src={CsvFileIcon} alt="CSV Download" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            CSV Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - CSV
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a href="javascript:void(0)" className="text-muted icon-box">
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#FCEEB8;" }}>
                                                        <Image src={MySqlIcone} alt="MySQL" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            MySQL Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - MySQL
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card source-card cursor-pointer open-sidebar" onClick={ToggleClick}>
                                    <div className="row align-items-center mx-0">
                                        <div className="col-12 col-md-6 px-0">
                                            <div className="d-flex align-items-center">
                                                <a className="text-muted icon-box" >
                                                    <i className="r-icon-arrow-up2"></i>
                                                </a>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-wrapper" style={{ background: "#B7E5CA;" }}>
                                                        <Image src={MOngoDbIcone} alt="MongoDB" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">
                                                            Mongodb Source
                                                        </p>
                                                        <small className="text-muted">
                                                            Rydot - Mongodb
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 text-right">
                                            <div className="ml-auto">
                                                <span className="mr-3 d-inline-block">
                                                    <span className="badge badge-muted min-90 role-badge text-center">
                                                        DRAFT</span>
                                                    <a href="javascript:void(0)" className="text-danger">
                                                        <i className="r-icon r-icon-delete  ml-2"></i>
                                                    </a>
                                                </span>
                                                <a href="javascript:void(0)" className="text-muted">
                                                    <i className="r-icon-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="d-flex justify-content-center">
                            <a href="javascript:void(0)" className="btn mr-2 btn-primary min-width-150">
                                Next
                            </a>
                        </div> */}
                    </div>
                </main>
            </div>
            <div className={`right-sidebar ${show ? "open" : ""} `}>
                <div className="col-12">
                    <div className="d-flex justify-content-end">
                        <a href="javascript:void(0)" className="sidebar-toggler close-sidebar" onClick={ToggleClick}>
                            <Image src={cancelIcon} alt="Back" className="img-fluid" width="15" style={{ filter: "grayscale(1)" }} />
                        </a>
                    </div>
                    <div className="text-center  py-5 position-relative">
                        <Image src={MySqlIcone} alt="MongoDB" className="img-fluid position-absolute page-logo" width="150" />
                        <h3 className="font-24 mb-3">Configure your MySQL Source</h3>
                        <p>
                            Follow the guide on the right to set up your Source
                        </p>
                    </div>
                    <a href="javascript:void(0)" className="text-muted mb-3 d-flex justify-content-end align-items-center">
                        Draft Saved <i className="fa fa-share ml-2"></i>
                    </a>
                    <div className="alert alert-outline-primary text-left">
                        <i className="r-icon r-icon-info text-primary"></i> There are <strong>Prerequisites</strong>
                        that you must ensure to set up this Source for your Pipeline.
                        <a href="javascript:void(0)" className="text-primary">Learn More<i className="r-icon r-icon-arrow-right2 ml-2"></i> </a>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="form-group label-inside label-left">
                                <input type="text" className="form-control p-10-15" id="pipeline" />
                                <label for="pipeline">Pipeline Name</label>
                                <small className="mt-1 d-inline-block text-grey font-10">A unique name for your
                                    Pipeline</small>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group label-inside label-left">
                                <input type="text" className="form-control p-10-15" id="pipeline1" />
                                <label for="pipeline1">Pipeline Name</label>
                                <small className="mt-1 d-inline-block text-grey font-10">A unique name for your
                                    Pipe
                                    line</small>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group label-inside label-left">
                                <input type="text" className="form-control p-10-15" id="data_host" />
                                <label for="data_host"> Database Host </label>
                                <small className="mt-1 d-inline-block text-grey font-10">The IP address or DNS name of
                                    your database server</small>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group label-inside label-left">
                                <input type="text" className="form-control p-10-15" id="data_port" />
                                <label for="data_port"> Database Port </label>
                                <small className="mt-1 d-inline-block text-grey font-10">
                                    The port on which the database is accepting connections
                                </small>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group label-inside label-left">
                                <input type="text" className="form-control p-10-15" id="data_user" />
                                <label for="data_user"> Database User </label>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group label-inside label-left">
                                <input type="text" className="form-control p-10-15" id="data_password" />
                                <label for="data_password"> Database Password </label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-control custom-switch ml-3 mb-3">
                        <input type="checkbox" className="custom-control-input" id="ssl" />
                        <label className="custom-control-label d-inline-block mb-1" for="ssl">Use SSL</label>
                        <div className="text-grey font-10">Connect over an SSL-encrypted connection
                        </div>
                    </div>
                    <p className="font-weight-500">
                        Select an Ingestion Mode
                    </p>
                    <div className="card">
                        <div className="card-body">
                            <div className="switch-wrapper">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="opt_log" name="secure" className="custom-control-input" />
                                    <label className="custom-control-label" for="opt_log">BinLog
                                        <span className="badge badge-primary ml-2"> Recommended </span>
                                        <div className="text-grey font-10 mt-2">
                                            Data is ingested using the MySQL BinLog. This is the most efficient way
                                            to set up real-time change data capture.
                                            Deletes are also replicated to the Destination.
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="switch-wrapper">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="stream" name="secure" className="custom-control-input" />
                                    <label className="custom-control-label" for="stream">Custom SQL
                                        <div className="text-grey font-10 mt-2">
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
                        Please open access to the undefined port from Hevo's IP address<span className="badge badge-danger"> 13.235.131.126</span>
                    </p>
                    <div className="custom-control custom-switch ml-3 mb-3">
                        <input type="checkbox" className="custom-control-input" id="conntect_http" />
                        <label className="custom-control-label d-inline-block mb-1" for="conntect_http">Connect Through
                            SSH</label>
                        <div className="text-grey font-10">Connect securely through a SSH tunnel server.</div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9.018" height="13.116" viewBox="0 0 9.018 13.116">
                                    <path id="icons8_sort_down" d="M20.5,13H8.615a.615.615,0,0,0-.489.988l5.943,7.788a.615.615,0,0,0,.978,0l5.943-7.788A.615.615,0,0,0,20.5,13Z" transform="translate(-13 21.116) rotate(-90)" fill="#5b5b5b"></path>
                                </svg>
                                <span>Advanced Settings</span>
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="custom-control custom-switch ml-3 mb-3">
                                <input type="checkbox" className="custom-control-input" id="load_data" />
                                <label className="custom-control-label d-inline-block mb-1" for="load_data">Load
                                    Historical Data</label>
                                <div className="text-grey font-10">If disabled, REVEL loads only the data that is
                                    written to your database after the time of creation of
                                    the Pipeline
                                </div>
                            </div>
                            <div className="custom-control custom-switch ml-3 mb-3">
                                <input type="checkbox" className="custom-control-input" id="new_pipeline" />
                                <label className="custom-control-label d-inline-block mb-1" for="new_pipeline">Include
                                    New Tables in the Pipeline</label>
                                <div className="text-grey font-10">If enabled, Hevo automatically ingests from any
                                    tables created or restored after the Pipeline is created.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <a href="javascript:void(0)" className="btn-lg btn btn-muted btn-default mr-2">TEST
                            CONNECTION</a>
                        <Link href={ROUTE_URL.DATASET} className="btn-lg btn  btn-primary">TEST &amp; CONTINUE</Link>
                    </div>
                </div>
            </div>

            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
          <Image src={cancelIcon} alt="Back" className="img-fluid" width="15" style={{color:"black"}}/>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to presshandleClose
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}

            {/* <CoustomModal onClick={handleShow} show={show} handleClose={handleClose} /> */}
        </>
    )
}
export default DataSet