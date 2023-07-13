import {
  DropdownField,
  TextareaField,
  TextField,
  ToggleField,
} from "@/src/common/commonsource/sourceField";

const RenderDependent = (props) => {
  const { dependent } = props;
  

  return (
    <>
      {dependent?.map((ins) => {
        // console.log("ins66", ins);

        switch (ins.type) {
          case "text":
            return (
              <div class="col-12 col-md-12">
                <div class="form-group  label-left">
                  <TextField
                    key={ins?.name}
                    type={ins?.type}
                    label={ins?.label}
                    name={ins?.name}
                    placeholder={ins?.placeholder}
                    required={ins?.required}
                    description={ins?.description}
                  ></TextField>
                </div>
              </div>
            );
          case "toggle":
            return (
              <div class="col-12 col-md-12">
                <ToggleField
                  type={ins?.type}
                  label={ins?.label}
                  name={ins?.name}
                  placeholder={ins?.placeholder}
                  required={ins?.required}
                  description={ins?.description}
                />
                {/* findDependsOnValue{" "} */}
              </div>
            );
          case "dropdown":
            return (
              <div class="col-12 col-md-12 mb-3">
                <DropdownField
                  type={ins?.type}
                  label={ins?.label}
                  name={ins?.name}
                  placeholder={ins?.placeholder}
                  required={ins?.required}
                  description={ins?.description}
                  options={ins?.options}
                  onChange={handeloption}
                />
              </div>
            );
          case "textarea":
            return (
              <div class="col-12 col-md-6 mb-3">
                <TextareaField
                  type={ins?.type}
                  label={ins?.label}
                  name={ins?.name}
                  placeholder={ins?.placeholder}
                  required={ins?.required}
                  description={ins?.description}
                />
              </div>
            );
          // Add support for other field types (e.g., textarea, etc.) as needed
          default:
            return null;
        }
      })}
    </>
  );
};
export default RenderDependent;



// {ins?.name ===
//   dependentFieldCheck?.fieldName &&
//   ins?.dependentFields?.map(
//     (val, index) => {
//       // let newdata = [];

//       if (
//         val.dependsOn ===
//         dependentFieldCheck?.dependName
//       ) {
//         // newdata[index] = {...newdata[index],
//         //   name: "abbbbbc",
//         // };

//           <RenderDependent
//             dependent={val?.fields}
//           />
//       } 
//       // else {
//         // newdata?.push(val?.fields);
//       // }
//       // console.log("newdata", newdata);
//     }
//   )}