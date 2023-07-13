import {
  CsvFileIcon,
  MySqlIcone,
  MongoIcon,
  SapIcone,
} from "@/src/assets/img/icons";
import { API_URL, ROUTE_URL } from "@/src/constant/url";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


const AddSource = (props) => {
  const [userid, setuserid] = useState(props.id);
  console.log("userid2", userid);

  const [data, setdata] = useState([]);
  const [id, setid] = useState("");

  const hendalGetSourceData = async () => {
    let token = "";
    if (typeof window !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
    const value = await axios.post(
      "http://master.revel-dev.test:9876/connector/v1/search",
      {
        includeObjects: ["name", "connectorType", "logoURL", "providerId"],
        excludeObjects: [],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          //   Accept: "*/*",
          //   "Cache-Control": "no-cache",
        },
      }
    );

    setdata(value?.data?.data?.paginatedData);
    console.log("data", data);
  };

 
  useEffect(() => {
    hendalGetSourceData();
  }, []);

  return (
    <>
      <ul class="nav nav-tabs stepper justify-content-center top-120">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <span class="number">1</span>
            <span>Select Source</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
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

                    {/* <div class="row data-lake-cards">
                                            
                                        </div> */}

                    <div className="row data-lake-cards ">
                      {data?.map((item) => {
                        console.log(item);
                        return (
                          <div className="col-12 col-md-3 mt-4">
                            <Link
                              href={`${ROUTE_URL.ADD_CONECTOR}${item?.id}`}
                              className="card text text-center mb-0 d-flex justify-content-center"
                            >
                              <div className="icon">
                                <Image
                                  src={item.logoURL}
                                  width="100"
                                  height="50"
                                  className="img-fluid mx-auto"
                                />
                              </div>
                              <span>{item.name}</span>{" "}
                              {/* Assuming 'name' is the property you want to display */}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default AddSource;
