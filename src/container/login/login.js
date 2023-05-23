import Logo from "../../assets/img/logo.svg";
import loginimg from "../../assets/img/login-img.png";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";

const Login = () => {
    const [data, setdata] = useState([])
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const router = useRouter();
    const hendalGet = async () => {
        if (email == email) {
            const obj = {
                email: email,
                password: password,
            }
            await axios.post("http://vbs.rydotinfotech.com/api/auth/signin", obj);
            router.push(ROUTE_URL.DASHBOARD);
        } else {
            router.push(ROUTE_URL.HOME)
        }

    }

    return (
        <>
            <div className="wrapper login-page">
                <div className="container">
                    <div className="row h-100-vh align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="login-form">
                                <div className="logo text-center">
                                    {/* <img src="assets/img/logo.svg" alt="Revel" className="img-fluid" width="280" /> */}
                                    <Image
                                        src={Logo}
                                        alt="Revel"
                                        className="img-fluid"
                                        width="280"
                                    ></Image>
                                </div>
                                <div className="form-group label-inside">
                                    <div className="mb-2"> Email Address</div>
                                    <div className="icon-box">
                                        <i className="r-icon r-icon-mail"></i>
                                    </div>
                                    <input type="text" className="form-control" id="email" value={email} onChange={(e) => setemail(e.target.value)} />

                                </div>
                                <div className="form-group label-inside">
                                    <div className="mb-2"> Password</div>
                                    <div className="icon-box">
                                        <i className="r-icon r-icon-lock1"></i>
                                    </div>
                                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setpassword(e.target.value)} />

                                </div>
                                <div className="d-flex justyfy-content-between form-group my-3">
                                    <div className="custom-control custom-checkbox text-muted">
                                        <input type="checkbox" className="custom-control-input" id="remember_me" name="example1" />
                                        <label className="custom-control-label" for="remember_me">Remember me</label>
                                    </div>
                                    <Link href={ROUTE_URL.FORGOT_PASSWORD} className="d-block ml-auto">Forgot Password?</Link>
                                </div>

                                {/* <a  className="btn btn-primary btn-block mt-4 mb-5"  >Login</a> */}
                                <Link href={ROUTE_URL.ManageTenant}
                                    className="btn btn-primary btn-block mt-4 mb-5"
                                >
                                    Login
                                </Link>
                                <p className="text-center text-muted">
                                    Don’t have an account? <a href="sign-up.html">Sign up</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* <img src="assets/img/login-img.png" alt="" className="img-fluid" /> */}
                            <Image
                                src={loginimg}
                                alt="login-img"
                                className="img-fluid"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login