import { ROUTE_URL } from "@/src/constant/url";
import Link from "next/link";
const ChangePassword = () => {
  return (
    <>
      <main class="main-content" id="main">
        <div class="container-fluid pl-5">
          <div class="row mt-4 justify-content-center">
            <div class="col-6">.   <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Old Password</label>
              <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Old Password" />
            </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">New Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="New Password" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Confirm New Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Confirm New Password" />
              </div>

              <div class="text-center my-2">
                <a href="javascript:void(0)" class="btn btn-muted mr-2" data-dismiss="modal">Cancel</a>
                <Link href={ROUTE_URL.HOME} class="btn btn-primary" data-dismiss="modal">Save</Link>
              </div>


            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default ChangePassword;