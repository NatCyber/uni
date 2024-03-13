import { Field } from "formik";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 mb-1">{label}</label>
      <Field {...rest} className="w-[200px] h-[34px] border rounded-md p-3" />
    </div>
  );
};

export default CustomInput;
