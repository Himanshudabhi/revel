import { CsvFileIcon, MySqlIcone, MongoIcon, SapIcone } from "@/src/assets/img/icons"
import { ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";

const AddSource = () => {

    return (
        <>
            <ul class="nav nav-tabs stepper justify-content-center top-120">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">
                        <span class="number">1</span>
                        <span>Select Source</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                        <span class="number">2</span>
                        <span>Configure Source Settings</span>
                    </a>
                </li>
                <div class="process-bar" style={{ width: "40%;" }}></div>
            </ul>
            <div class="wrapper">
                <main class="main-content" id="main">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="login-form p-0 mt-5">
                                    <div class="col-9 mx-auto">
                                        <div class="text-center mb-4">
                                            <h3 class="font-36 mb-4">Select Source Type</h3>
                                            <p class="font-16">
                                                Select the Source you want to bring data from
                                            </p>
                                        </div>
                                        <div class="row data-lake-cards">
                                            <div class="col-12 col-md-3">
                                                <a href="javascript:void(0)" class="card text text-center mb-0 d-flex justify-content-center">
                                                    <div class="icon">
                                                        <Image src={CsvFileIcon} alt="CSV" width="80"
                                                            class="img-fluid mx-auto" />
                                                    </div>
                                                    <span>CSV</span>
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-3">
                                                <Link href={ROUTE_URL.SELECT_SOURCE} class="card text text-center mb-0 d-flex justify-content-center">
                                                    <div class="icon">
                                                        <Image src={MongoIcon} alt="MongoDB" width="80"
                                                            class="img-fluid mx-auto" />
                                                    </div>
                                                    <span>MongoDB</span>
                                                </Link>
                                            </div>
                                            <div class="col-12 col-md-3">
                                                <a href="javascript:void(0)" class="card text text-center mb-0 d-flex justify-content-center">
                                                    <div class="icon">
                                                        <Image src={MySqlIcone} alt="MySQL" width="145"
                                                            class="img-fluid mx-auto" />
                                                    </div>
                                                    <span>MySQL</span>
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-3">
                                                <a href="javascript:void(0)" class="card text text-center mb-0 d-flex justify-content-center">
                                                    <div class="icon">
                                                        <Image src={SapIcone} alt="SAP" width="160"
                                                            class="img-fluid mx-auto" />
                                                    </div>
                                                    <span>SAP</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default AddSource;