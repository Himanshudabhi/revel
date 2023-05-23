import { logowhiteimg, UserImg } from "@/src/assets/img";
import { searchimg, BarsImg } from "@/src/assets/img/icons";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
import { useRouter } from "next/router";
import { COMPONENT_TITLE } from "@/src/constant/titles";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";

const Header = (props) => {
    const { title } = props;
    const router = useRouter();

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState(false);

    const ToggleClick = () => {
        setShow(!show);
        console.log("show", show);
    };

    const searchToggle = () => {
        setSearch(!search);
        console.log("show", search);
    };
    return (
        <>
            <div classNameName="wrapper">
                <nav className="navbar navbar-expand-lg brand-navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="javascript:void(0)">
                            <Image
                                src={logowhiteimg}
                                alt="Revel"
                                className="img-fluid"
                                width="115"
                            />

                        </a>
                        <div id="top_nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto align-items-center">
                                <li className="nav-item mr-3">
                                    <a
                                        className="nav-link d-flex align-items-center"
                                        href="javascript:void(0)"
                                    >
                                        <input
                                            type="text"
                                            className={`form-control ${search ? "show" : ""}`}
                                            placeholder="Search"
                                        />
                                        <div className="toggle-search " onClick={searchToggle}>
                                            <Image src={searchimg} alt="Search" className="img-fluid" />
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={ROUTE_URL.USER_PROFILE}>
                                        <Image
                                            src={UserImg}
                                            alt="User Profile"
                                            width="35"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg brand-navbar bg-white brand-navbar breadcrumb-navbar">
                    <div className="container-fluid">
                        <ol className="breadcrumb bg-white mb-0 p-0 align-items-center">
                            <a
                                href="javascript:void(0)"
                                className="mr-10 sidebar-toggler"
                                id="sidebar_toggle"
                                onClick={ToggleClick}
                            >
                                <Image src={BarsImg} alt="Toggle Sidebar" className="img-fluid" />
                            </a>

                            <li className="breadcrumb-item">{title}</li>
                            <li className="breadcrumb-item active">{COMPONENT_TITLE[router.pathname]}</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <Sidebar show={show} />
        </>
    );
};
export default Header;
