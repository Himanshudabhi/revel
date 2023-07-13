export const TextField = ({ key, label, type, name, placeholder, required, description,onChange,value }) => {
    return (<>
        <div key={key}>
            <label for="db_host" >{label}</label>
            <input type={type} class="form-control" id="db_host" name={name} placeholder={placeholder} required={required} value={value} onChange={onChange}/>
            <small class="mt-1 d-inline-block text-grey font-10">{description}</small>
        </div>
    </>)
}

export const ToggleField = ({ key, label, type, name, placeholder, required, description }) => {
    return (<>
        {/* <div className="row"> */}
        {/* <div class="col-12 col-md-12"> */}
        <div class="custom-control custom-switch ml-3 mb-3">
            <input type="checkbox" class="custom-control-input" id="load_data" name={name} placeholder={placeholder} required={required} />
            <label class="custom-control-label d-inline-block mb-1" for="load_data">{label}</label>
            <div class="text-grey font-10">{description}
            </div>
        </div>
        {/* </div> */}
        {/* </div> */}
    </>)
}

export const DropdownField = ({ key, label,id, type, name, placeholder, required, description, options, onChange }) => {
    return (<>
        <div key={key}>

            <label for="formGroupExampleInput" class="form-label">{label}</label>
            <select
                name={name}
                // value={this.state.formData[field.name] || ''}
                onChange={onChange}
                required={required}
                class="form-control"
                id={id}
            >
                <option value="">Select an option</option>
                {options?.map((option) => (

                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <small class="mt-1 d-inline-block text-grey font-10">{description}</small>
        </div>
        {/* {dependentFields === dependsOn ? } */}
    </>)
}


export const TextareaField = ({ key, label, type, name, placeholder, required, description }) => {
    return (<>
        <div key={key}>

            <label for="db_host">{label}</label>

            <textarea class="form-control p-10-15 " id="textarea db_host" rows="3" name={name} placeholder={placeholder} required={required}></textarea>
            <small class="mt-1 d-inline-block text-grey font-10">{description}</small>
        </div>
    </>)
}


