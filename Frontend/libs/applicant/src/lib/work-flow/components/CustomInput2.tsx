const CustomInput2 = ({ label, field, form, ...rest }) => {
    return (
      <div className="flex flex-col">
        <label className="text-gray-700">{label}</label>
        <input {...field} {...rest} className="w-[200px] h-[34px] border rounded-md p-3" />
      </div>
    );
  };
  
  export default CustomInput2;
  