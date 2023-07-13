import { logowhiteimg, UserImg } from "@/src/assets/img";
import { searchimg, BarsImg } from "@/src/assets/img/icons";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { COMPONENT_TITLE } from "@/src/constant/titles";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Header = (props) => {
  const { title } = props;
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleDropdowm = () => {
    setIsActive(!isActive);
  };

  const ToggleClick = () => {
    setShow(!show);
    console.log("show", show);
  };

  const searchToggle = () => {
    setSearch(!search);
    console.log("show", search);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.clear();
    router.push("http://master.revel-dev.test:8051/login.html");
  };

  return (
    <>
      <div className="wrapper login-page app-header">
        <nav className="navbar navbar-expand-lg brand-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" href={ROUTE_URL.MANAGE_TENANT}>
              <Image
                src={logowhiteimg}
                alt="Revel"
                className="img-fluid"
                width="115"
              />
            </Link>
            <div id="top_nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item mr-3">
                  <a className="nav-link d-flex align-items-center" href="#">
                    <input
                      type="text"
                      className={`form-control ${search ? "show" : ""}`}
                      placeholder="Search"
                    />
                    <div className="toggle-search " onClick={searchToggle}>
                      <Image
                        src={searchimg}
                        alt="Search"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </li>
                {/* <li className="nav-item">
                                    <Link className="nav-link" href={ROUTE_URL.USER_PROFILE}>
                                        <Image
                                            src={UserImg}
                                            alt="User Profile"
                                            width="35"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </li> */}
                <li
                  className={`nav-item dropdown dropdown-slide ${
                    isActive ? "show" : ""
                  } `}
                >
                  <Link
                    className="nav-link nav-pill user-avatar"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    onClick={handleDropdowm}
                  >
                    <Image
                      src={UserImg}
                      alt="Radiant"
                      width="35"
                      className="img-fluid"
                    />
                  </Link>
                  <div
                    ref={dropdownRef}
                    className={`dropdown-menu dropdown-menu-right dropdown-menu-accout ${
                      isActive ? "show" : ""
                    }`}
                  >
                    <div className="dropdown-header pb-3">
                      <div className="media d-user">
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">john smith</h5>
                          <span>john@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="dropdown-item"
                      href={ROUTE_URL.USER_PROFILE}
                    >
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item"
                      href={ROUTE_URL.FORGOT_PASSWORD}
                    >
                      Change Password
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Setting
                    </Link>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg brand-navbar bg-white menu-b-navbar brand-navbar breadcrumb-navbar">
          <div className="container-fluid">
            <ol className="breadcrumb bg-white mb-0 p-0 align-items-center">
              <a
                href="#"
                className="mr-10 sidebar-toggler"
                id="sidebar_toggle"
                onClick={ToggleClick}
              >
                <Image
                  src={BarsImg}
                  alt="Toggle Sidebar"
                  className="img-fluid"
                />
              </a>
              {/* <Breadcrumb bg="white"> */}
              <li className="breadcrumb-item">{title}</li>
              <li className="breadcrumb-item active">
                {COMPONENT_TITLE[router.pathname]}
              </li>
              {/* </Breadcrumb> */}
              {/* 
                                <Breadcrumb.Item href="#">{title}</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">
                                {COMPONENT_TITLE[router.pathname]}
                                </Breadcrumb.Item>
                                
                            </Breadcrumb> */}
            </ol>
          </div>
        </nav>
      </div>

      <Sidebar show={show} />
    </>
  );
};
export default Header;
