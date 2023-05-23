// import Header from "@/src/common/header/header"
// import PageHeader from "@/src/config/PageHeader"
// import { HEADER_TITLE } from "@/src/constant/titles"
import { DashboardIcon,SourceIcon,DestinationIcon, PipelinesIcon,DatasetIcon, AnalyticsIcon, ConfigurationIcon } from "@/src/assets/img/icons"
import { DashboardImg,SourceImg,DestinationImg,PipelinesImg,DatasetImg,AnalyticsImg,ConfigurationImg} from "@/src/assets/img"
import Image from "next/image"

const Dashboard = () => {
    return (
        <>
             <main class="main-content" id="main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="page-title">
                            Welcome home
                        </h4>
                    </div>
                </div>
                <div class="row home-cards">
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <div class="img-wrapper">
                                <Image src={DashboardImg} alt="Dashboard" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={DashboardIcon} alt="Dashboard" class="card-icon"/>
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
                                <Image src={SourceImg} alt="Source" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={SourceIcon} alt="Source" class="card-icon"/>
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
                                <Image src={DestinationImg} alt="Destination" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={DestinationIcon} alt="Destination" class="card-icon"/>
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
                                <Image src={PipelinesImg} alt="Pipelines" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={PipelinesIcon} alt="Pipelines" class="card-icon"/>
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
                                <Image src={DatasetImg} alt="Dataset" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={DatasetIcon} alt="Dataset" class="card-icon"/>
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
                                <Image src={AnalyticsImg} alt="Analytics" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={AnalyticsIcon} alt="Analytics" class="card-icon"/>
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
                                <Image src={ConfigurationImg} alt="Configuration" class="img-fluid"/>
                            </div>
                            <div class="icon-circle bg-white">
                                <Image src={ConfigurationIcon} alt="Configuration" class="card-icon"/>
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


        </>
    )
}
export default Dashboard