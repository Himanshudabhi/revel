import { logowhiteimg, UserImg } from "@/src/assets/img";
import { searchimg, BarsImg } from "@/src/assets/img/icons";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
import { useRouter } from "next/router";
import { COMPONENT_TITLE } from "@/src/constant/titles";

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
            <div class="wrapper">
                <nav class="navbar navbar-expand-lg brand-navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="javascript:void(0)">
                            <Image
                                src={logowhiteimg}
                                alt="Revel"
                                class="img-fluid"
                                width="115"
                            />
                            
                        </a>
                        <div id="top_nav" class="collapse navbar-collapse">
                            <ul class="navbar-nav ml-auto align-items-center">
                                <li class="nav-item mr-3">
                                    <a
                                        class="nav-link d-flex align-items-center"
                                        href="javascript:void(0)"
                                    >
                                        <input
                                            type="text"
                                            className={`form-control ${search ? "show" : ""}`}
                                            placeholder="Search"
                                        />
                                           <h2>{title}</h2>
                                        <div class="toggle-search " onClick={searchToggle}>
                                            <Image src={searchimg} alt="Search" class="img-fluid" />
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)">
                                        <Image
                                            src={UserImg}
                                            alt="User Profile"
                                            width="35"
                                            class="img-fluid"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg brand-navbar bg-white brand-navbar breadcrumb-navbar">
                    <div class="container-fluid">
                        <ol class="breadcrumb bg-white mb-0 p-0 align-items-center">
                            <a
                                href="javascript:void(0)"
                                class="mr-10 sidebar-toggler"
                                id="sidebar_toggle"
                                onClick={ToggleClick}
                            >
                                <Image src={BarsImg} alt="Toggle Sidebar" class="img-fluid" />
                            </a>
                            
                            <li class="breadcrumb-item">{title}</li>
                            <li class="breadcrumb-item active">{COMPONENT_TITLE[router.pathname]}</li>
                        </ol>
                    </div>
                </nav>
            </div>
            
            <Sidebar show={show} /> 
        </>
    );
};
export default Header;
