import {
  CsvFileIcon,
  MySqlIcone,
  MOngoDbIcone,
  PlusIcon,
} from "@/src/assets/img/icons";
import useFetch from "@/src/customHooks/useGetApi";
// import { ROUTE_URL } from "@/src/constant/url";
import { API_URL, ROUTE_URL } from "@/src/constant/url";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { commonApi } from "@/src/services/common.api";
import { API_QUERY } from "@/src/constant/apiReqField";
import { OPERATION_TYPE } from "@/src/constant/staticObject";
import { useState } from "react";

const SourceManagement = () => {
  const [sourceData,setSourceData] = useState([])
  // const { data, isLoading, error } = useFetch(
  //   "http://master.revel-dev.test:9876/connectorconfig/v1/getAll"
  // );
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const {} = useQuery(
    [API_QUERY.GET_SOURCE],
    () => commonApi(API_URL.SOURCE, {}, OPERATION_TYPE.GET_ALL),
    {
      onSuccess: (data) => {
        setSourceData(data?.data?.data?.paginatedData);
      },
    }
  );

  return (
    <>
      <div class="wrapper">
        <main class="main-content" id="main">
          <div class="container-fluid">
            <div class="row px-2">
              <div class="col-12 pr-2">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 class="page-title font-20 text-dark mb-1 mt-3">
                      Source Management
                    </h4>
                    <p class="text-muted font-12">
                      Move data between any Source and Destination
                    </p>
                  </div>
                  <div class="buttons mt-3">
                    <Link
                      href={ROUTE_URL.ADD_SOURCE}
                      class="btn mr-2 btn-primary"
                    >
                      <Image src={PlusIcon} alt="Add" />
                      Add Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="row px-2 align-items-center">
              <div class="col-12 col-md-6">
                {/* <p class="text-muted">
                            03 Source found
                        </p> */}
              </div>
              <div class="col-12 col-md-6 text-right d-flex">
                <a href="#" class="btn btn-outline-light mr-2 ml-auto">
                  10 COLUMNS SELECTED OF 20
                </a>
                <a href="#" class="btn btn-outline-light mr-2">
                  CLEAR FILTERS
                </a>
                <div class="form-group mb-0 search-form position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                  <i class="fa fa-search"></i>
                </div>
              </div>
            </div>
            <div class="px-2 row mt-3 source-card-grid">
              {sourceData?.map((item) => {
                return (
                  <>
                    <div class="col-md-4">
                       <div class="card source-card">
                        <div class="row align-items-center mx-0">
                          <div class="col-12 col-md-6 px-0">
                            <div class="d-flex align-items-center">
                              <a href="#" class="text-muted icon-box">
                                <i class="r-icon-arrow-up2"></i>
                              </a>
                              <div class="d-flex align-items-center">
                                <div
                                  class="icon-wrapper"
                                  style={{ background: "#FCEEB8;" }}
                                >
                                  {/* <Image src={MySqlIcone} alt="MySQL" /> */}
                                </div>
                                <div>
                                  <p class="mb-0">{item?.name}</p>
                                  <small class="text-muted">
                                    Rydot - MySQL
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-6 px-0 text-right">
                            <div class="ml-auto">
                              <span class="mr-3 d-inline-block">
                                {/* <span class="badge badge-muted min-90 role-badge text-center">
                                  DRAFT
                                </span> */}
                                <a href="#" class="text-danger">
                                  <i class="r-icon r-icon-delete  ml-2"></i>
                                </a>
                              </span>
                              <Link href={`${ROUTE_URL.EDIT_SOURCE}${item?.id}`} class="text-muted">
                                <i class="r-icon-chevron-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 text-right">
                            <span class="min-90 active-btn btn font-12 text-center">
                              ACTIVE
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default SourceManagement;
