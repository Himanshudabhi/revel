import Logo from "../../assets/img/logo.svg";
import loginimg from "../../assets/img/login-img.png";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_URL } from "@/src/constant/url";
import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";

const Login = () => {
    // const [data, setdata] = useState([])
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [data, setData] = useState(null);

    const router = useRouter();
    // const hendalGet = async () => {
    //     if (email == email) {
    //         const obj = {
    //             email: email,
    //             password: password,
    //         }
    //         await axios.post("http://vbs.rydotinfotech.com/api/auth/signin", obj);
    //         router.push(ROUTE_URL.DASHBOARD);
    //     } else {
    //         router.push(ROUTE_URL.HOME)
    //     }

    // }

    // const get = async()=>{
    //     // e.preventDefault();

    //     const queryParams = {
    //       client_id: 'master',
    //       redirect_uri: './',
    //       response_type: 'code',
    //       scope: 'api.read',
    //     };
    //     const val = await axios.get(`http://master.revel-dev.test:8051/oauth2/authorize/`,queryParams)
    //     setapi(val.data)
    // }

    // useEffect(()=>{
    //     get();
    //     // window.location.href = '/auth'; 
    //   },[])

    // const queryParams = {
    //           client_id: 'master',
    //           redirect_uri: './',
    //           response_type: 'code',
    //           scope: 'api.read',
    //         };  const payload = {
    //     response_type: 'code',
    //     client_id: 'master',
    //     scope: 'api.read',
    //     // redirect_uri: './',
    // };


    // const payload = {
    //     response_type: 'code',
    //     client_id: 'master',
    //     scope: 'api.read',
    //     redirect_uri: "https%3A%2F%2Fspring.io%2Fauth"
    // };

    // const queryParams = new URLSearchParams(payload).toString();


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(`http://master.revel-dev.test:8051/oauth2/authorize/?${queryParams}`,{
    //           method: 'GET',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             'Custom-Header': 'Custom Value',
    //           },
    //         });
    //         if (response.ok) {
    //           const result = await response.json();
    //           setData(result);
    //         } else {
    //           console.error('Error:', response.status);
    //         }
    //       } catch (error) {
    //         console.error('Error:', error);
    //         console.log("error",error)
    //       }
    //     };
    //     fetchData();
    //     console.log("hii")
    //   }, []);


    // const payload = {
    //     response_type: 'code',
    //     client_id: 'master',
    //     scope: 'api.read',
    //     // redirect_uri: './',
    // };

    // const queryParams = new URLSearchParams(payload).toString();

    // axios.get(`http://master.revel-dev.test:8051/oauth2/authorize/?${queryParams}`)
    //     .then((response) => {
    //         // Handle the response
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         // Handle the error
    //         console.error(error);
    //     });


    // const get = async (e) => {
    //     const authorizationEndpoint = 'http://master.revel-dev.test:8051/oauth2/authorize';
    //     const responseType = 'code';
    //     const clientId = 'master';
    //     const scope = 'api.read';
    //     // const redirectUri = 'http://localhost:3001/auth';
    
    //     const url = `${authorizationEndpoint}?response_type=${responseType}&client_id=${clientId}&scope=${scope}`;
    
    //     try {
    //       const response = await axios.get(url)
    
    //       if (response.ok) {
    //         const result = await response.json();
    //         setData(result);
    //       } else {
    //         console.error('Error:', response.status);
    //       }
    //     } catch (error) {
        
    //       console.error('Error:', error);
    //       console.log("error", error)
    //     }
    //   }
    
    //   useEffect(() => {
    //     get();
       
    //   }, [])


    return (
        <>
            {/* <div className="wrapper login-page">
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
                            <Image
                                src={loginimg}
                                alt="login-img"
                                className="img-fluid"
                            ></Image>error
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="wrapper login-page">
                <div class="container">
                    <div class="row h-100-vh align-items-center">
                        <div class="col-12 col-md-6">
                            <div class="login-form">
                                <div class="logo text-center">
                                    <Image
                                        src={Logo}
                                        alt="Revel"
                                        claerrorssName="img-fluid"
                                        width="280"
                                    ></Image>
                                </div>





                                <form class="form">

                                </form>



                                error

                                <div class="form-group label-inside">
                                    <div class="input-wrapper">
                                        <input class="input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="text"
                                            placeholder=" " data-placeholder="Email Address" required />
                                        <span class="placeholder">Email Address</span>
                                        <div class="icon-box">
                                            <i class="r-icon r-icon-mail"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group label-inside">
                                    <div class="input-wrapper">
                                        <input class="input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="password"
                                            placeholder=" " data-placeholder="Password" required />
                                        <span class="placeholder">Password</span>
                                        <div class="icon-box">
                                            <i class="r-icon r-icon-lock1"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justyfy-content-between form-group my-3">
                                    <div class="custom-control custom-checkbox text-muted">
                                        <input type="checkbox" class="custom-control-input" id="remember_me" name="example1" />
                                        <label class="custom-control-label" for="remember_me">Remember me</label>
                                    </div>
                                    {/* <a href="javascript:void(0)" class="d-block ml-auto">Forgot Password?</a> */}
                                    <Link href={ROUTE_URL.FORGOT_PASSWORD} className="d-block ml-auto">Forgot Password?</Link>
                                </div>
                                {/* <a href="index.html" class="btn btn-primary btn-block mt-4 mb-5">Login</a> */}
                                <Link href="#"
                                    className="btn btn-primary btn-block mt-4 mb-5"
                                >
                                    Login
                                </Link>
                                <p class="text-center text-muted">
                                    Don’t have an account? <a href="sign-up.html">Sign up</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
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