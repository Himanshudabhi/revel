import Image from "next/image";
import Link from "next/link";
import {
    HomeIcon,
    DashboardIcon,
    SourceIcon,
    DestinationIcon,
    PipelinesIcon,
    DatasetIcon,
    AnalyticsIcon,
    ConfigurationIcon,
} from "@/src/assets/img/icons";
import { useState } from "react";
const Sidebar = (props) => {
    const { show } = props;
    const [add ,setadd] = useState(false)

    const showToggl = ()=>{
        setadd(!add)
    }
    return (
        <>
            <aside
                className={`brand-sidebar ${show ? "sidebar-open" : ""} `}
                id="app_sidebar"
            >
                <ul className="navbar-nav sidebar-scroll">
                    <li className="nav-item">
                        <Link
                            className="nav-link active d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image src={HomeIcon} alt="Home" className="img-fluid" />
                                <span>Home</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#fff"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image
                                    src={DashboardIcon}
                                    alt="Dashboard"
                                    className="img-fluid"
                                />
                                <span>Dashboard</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#A3A3A3"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image src={SourceIcon} alt="Source" className="img-fluid" />
                                <span>Source</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#A3A3A3"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image
                                    src={DestinationIcon}
                                    alt="Destination"
                                    className="img-fluid"
                                />
                                <span>Destination</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#A3A3A3"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image
                                    src={PipelinesIcon}
                                    alt="Pipelines"
                                    className="img-fluid"
                                />
                                <span>Pipelines</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#A3A3A3"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image src={DatasetIcon} alt="Dataset" className="img-fluid" />
                                <span>Dataset</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#A3A3A3"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link d-flex justify-content-between align-items-center"
                            href="javascript:void(0)"
                        >
                            <div>
                                <Image
                                    src={AnalyticsIcon}
                                    alt="Analytics"
                                    className="img-fluid"
                                />
                                <span>Analytics</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.571"
                                height="12"
                                viewBox="0 0 6.571 12"
                            >
                                <path
                                    id="icons8_expand_arrow"
                                    d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                                    transform="translate(-12 15) rotate(-90)"
                                    fill="#A3A3A3"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li class="nav-item" >
                    <a class="nav-link d-flex justify-content-between align-items-center " href="javascript:void(0)" data-toggle="collapse" data-target="#dropdown" onClick={showToggl}>
                        <div >
                            <Image src={ConfigurationIcon} alt="Configuration" class="img-fluid"  />
                            <span >Configuration</span>
                        </div> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.571" height="12" viewBox="0 0 6.571 12">
                            <path id="icons8_expand_arrow" d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,1,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z" transform="translate(-12 15) rotate(-90)" fill="#a3a3a3"/>
                        </svg>
                    </a>
                    <div id="dropdown" class={`collapse navbar-collapse has-dropdown ${add ? "show" : ""}`}>
                        <ul class="navbar-nav mr-auto ">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">User</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Role</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Tenet</a>
                            </li>
                        </ul>
                    </div>
                </li>
                </ul>
                <ul className="navbar-nav navbar-nav-bottom">
                    <li className="nav-item">
                        <Link
                            href="javascript:void(0)"
                            className="btn btn-primary btn-block"
                        >
                            <i className="fa fa-plus mr-2"></i> Add integrations
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};
export default Sidebar;
