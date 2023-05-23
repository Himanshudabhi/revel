import Image from "next/image";
import Link from "next/link";
import { RefreshIcon } from "@/src/assets/img/icons";
import { UserProfileImg } from "@/src/assets/img";
import { ROUTE_URL } from "@/src/constant/url";
const UserProfile = () => {
  return (
    <>
      <div className="wrapper">
        <main className="main-content" id="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-lg-end justify-content-center">
                  <div className="buttons my-2">
                    <Link
                      href="javascript:void(0)"
                      className="btn mr-2 btn-outline-light"
                    >
                      <Image src={RefreshIcon} alt="Refresh" />
                    </Link>
                    <Link
                      href={ROUTE_URL.FORGOT_PASSWORD}
                      className="btn mr-2 btn-outline-light"
                    >
                      CHANGE PASSWORD
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="text-center">
                  <Image
                    src={UserProfileImg}
                    alt="Brinda Monani"
                    className="img-fluid mb-3"
                    width="100"
                  />
                  <h5 className="user-name ml-2">Brinda Monani</h5>
                </div>
              </div>
              <div className="col-8 col-md-8 col-12">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Role
                    </label>
                    <select name="country" id="region" className="form-control">
                      <option value="Default region name:">Setect Role</option>
                      <option value="India">Admin</option>
                      <option value="U.S.">User</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="City"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="State"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Zipcode
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Zipcode"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Address Line 1
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Address Line 2
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="custom-control custom-switch mt-status mt-0">
                      <input
                        type="checkbox"
                        className="custom-control-input position-relative"
                        id="conntect_http"
                      />
                      <label
                        className="custom-control-label d-inline-block mb-1"
                        htmlFor="conntect_http"
                      >
                        Status
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row px-2">
                  <div className="col-12">
                    <div className="d-flex justify-content-center my-3">
                      <Link
                        href="javascript:void(0)"
                        className="btn-lg btn btn-muted btn-default mr-2 min-width-150"
                      >
                        CANCEL
                      </Link>
                      <Link
                        href="javascript:void(0)"
                        className="btn-lg btn  btn-primary min-width-150"
                      >
                        SAVE
                      </Link>
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
export default UserProfile;