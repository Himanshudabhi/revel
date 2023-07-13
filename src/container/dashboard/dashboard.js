// import Header from "@/src/common/header/header"
// import PageHeader from "@/src/config/PageHeader"
// import { HEADER_TITLE } from "@/src/constant/titles"
import {
    DashboardIcon,
    SourceIcon,
    DestinationIcon,
    PipelinesIcon,
    DatasetIcon,
    AnalyticsIcon,
    ConfigurationIcon,
} from "@/src/assets/img/icons";
import {
    DashboardImg,
    SourceImg,
    DestinationImg,
    PipelinesImg,
    DatasetImg,
    AnalyticsImg,
    ConfigurationImg,
} from "@/src/assets/img";
import Image from "next/image";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
import { QuotoneIcon, RydotIcon } from "@/src/assets/img/icons";
import { LogoImg } from "@/src/assets/img";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";




const Dashboard = () => {
    const [visibal, setvisible] = useState(7);
    const [tenantData, setTenantData] = useState([]);
    const [fleg, setfleg] = useState(false)


    const showmoreitem = () => {
        setvisible((predata) => predata + 8);
    };

    // const hendalgetAll = async () => {
    //     let token = JSON.parse(localStorage.getItem("token"))
    //     console.log("token", token)



    //     await fetch("http://master.revel-kalpen.test:8051/tenant/v1/getAll", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`,
    //         },

    //     }).then(response => {
    //         setTenantData(response[0].data)

    //     })
    //         .catch(error => {
    //             console.error("Error:", error);

    //         });

    //     // axios.get(url, { headers })
    //     //     .then(response => {
    //     //         setTenantData(response[0].data)

    //     //     })
    //     //     .catch(error => {
    //     //         console.error("Error:", error);

    //     //     });
    //     //     console.log("TenantData",tenantData)

    // }

    // useEffect(() => {
    //     hendalgetAll();
    // }, [])

    // const router = useRouter();


    // useEffect(() => {
    //     // const parsed = queryString.parse(window.location.search);
    //     // const paramValue = parsed.code;

    //     const authorizationCode = queryString.parse(window.location.search).code;

    //     const payload = {
    //         grant_type: "authorization_code",
    //         code: authorizationCode,
    //         redirect_uri: "http://master.revel-himanshu.test:3000/dashboard",
    //         client_id: "master",
    //     };

    //     const encodedPayload = new URLSearchParams(payload).toString();

    //     fetch("http://master.revel-kalpen.test:8151/oauth2/token", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             Authorization: " Basic bWFzdGVyOnNlY3JldA==",
    //         },
    //         body: encodedPayload,
    //     }).then(resp => resp.json())
    //         .then(json => localStorage.setItem("token", JSON.stringify(json.access_token)))
    //         router.push(ROUTE_URL.MANAGE_TENANT)

    // }, []);




    return (
        <>

        </>
    );
};
export default Dashboard;

{
    /* <div className="wrapper app-header">
                  <main class="main-content" id="main">
                      <div class="container">
                          <div class="row">
                              <div class="col-12">
                                  <h4 class="page-title">
                                      Welcome Dashboard
                                  </h4>
                              </div>
                          </div>
                          <div class="row home-cards">
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={DashboardImg} alt="Dashboard" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={DashboardIcon} alt="Dashboard" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Dashboard</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={SourceImg} alt="Source" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={SourceIcon} alt="Source" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Source</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={DestinationImg} alt="Destination" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={DestinationIcon} alt="Destination" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Destination</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={PipelinesImg} alt="Pipelines" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={PipelinesIcon} alt="Pipelines" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Pipelines</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={DatasetImg} alt="Dataset" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={DatasetIcon} alt="Dataset" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Dataset</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={AnalyticsImg} alt="Analytics" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={AnalyticsIcon} alt="Analytics" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Analytics</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-3">
                                  <div class="card">
                                      <div class="img-wrapper">
                                          <Image src={ConfigurationImg} alt="Configuration" class="img-fluid" />
                                      </div>
                                      <div class="icon-circle bg-white">
                                          <Image src={ConfigurationIcon} alt="Configuration" class="card-icon" />
                                      </div>
                                      <div class="card-detail">
                                          <h5>Configuration</h5>
                                          <p>
                                              Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </main>
              </div> */
}
