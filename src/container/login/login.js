import Logo from "../../assets/img/logo.svg";
import loginimg from "../../assets/img/login-img.png";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
    // debugger
    var clientId = "master";
    var redirectUri = "http://master.revel-himanshu.test:3000/loginmiddleware";
    var authorizationEndpoint = "http://master.revel-dev.test:8051/oauth2/authorize";
    // var authorizationEndpoint = "http://master.revel-jaydeep.test:8151/oauth2/authorize";
    // var authorizationEndpoint = "http://master.revel-jignesh.test:8151/oauth2/authorize";

    var authorizationUrl = authorizationEndpoint + '?response_type=code&client_id=' + clientId + '&scope=api.read&redirect_uri=' + encodeURIComponent(redirectUri);
    // console.log('authorizationUrl', authorizationUrl)

    const router = useRouter();

    useEffect(() => {
        
        router.push(
            authorizationUrl
        );
    }, []);

    return (
        <>
      {/* <Link href={authorizationUrl}>Login</Link> */}


        {/* the the html is being rendered by back end */}
        
            {/* <div id='login-div' ></div> */}
            {/* <Link href={authorizationUrl}>Login</Link> */}
            {/* 
            <div className="wrapper login-page">
                <div className="container">
                    <div className="row h-100-vh align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="login-form">
                                <div className="logo text-center">
                                    <Image
                                        src={Logo}
                                        alt="Revel"
                                        className="img-fluid"
                                        width="280"
                                    ></Image>
                                </div>
                                <form className="form"></form>
                                <div className="form-group label-inside">
                                    <div className="input-wrapper">
                                        <input
                                            className="input"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            type="text"
                                            placeholder=" "
                                            data-placeholder="Email Address"
                                            required
                                        />
                                        <span className="placeholder">Email Address</span>
                                        <div className="icon-box">
                                            <i className="r-icon r-icon-mail"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group label-inside">
                                    <div className="input-wrapper">http://master.revel-dev.test:8051/login.html
                                        <input
                                            className="input"
                                            type="password"
                                            placeholder=" "
                                            data-placeholder="Password"
                                            required
                                        />
                                        <span className="placeholder">Password</span>
                                        <div className="icon-box">
                                            <i className="r-icon r-icon-lock1"></i>
                                        </div>
                                        <div className="icon-box-eye1">
                                            <i className="r-icon r-icon-eye"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justyfy-content-between form-group my-3">
                                    <div className="custom-control custom-checkbox text-muted">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="remember_me"
                                            name="example1"
                                        />
                                        <label className="custom-control-label" htmlFor="remember_me">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link href="#" className="d-block ml-auto">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Link
                                    href={ROUTE_URL.ManageTenant}
                                    // href={authorizationUrl}
                                    className="btn btn-primary btn-block mt-4 mb-5"
                                >
                                    Login
                                </Link>
                                <p className="text-center text-muted">
                                    Don't have an account?{" "}
                                    <Link href="sign-up.html">Sign up</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <Image
                                src={loginimg}
                                alt="login-img"
                                className="img-fluid"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};
export default Login;
