const UserForm = () => {
    return (
        <>
            <div class="col-10 mx-auto">
                <div class="login-form p-0 row">


                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email " />
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Role</label>
                        <select name="country" id="region" class="form-control">
                            <option value="Default region name:">Setect Role</option>
                            <option value="India">Admin</option>
                            <option value="U.S.">User</option>
                        </select>
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">City</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="City " />
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">State</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="State " />
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Zip Code</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Zip Code " />
                    </div>

                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Address Line 1</label>
                        <textarea class=" form-control" id="textarea" rows="3"></textarea>
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="formGroupExampleInput" class="form-label">Address Line 2</label>
                        <textarea class=" form-control" id="textarea" rows="3"></textarea>
                    </div>


                </div>
            </div>
        </>
    )
}
export default UserForm