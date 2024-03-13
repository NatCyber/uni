import { Field } from 'formik';

const DropDownSelector = ({
  options,
  valueExpr,
  displayExpr,
  label,
  ...rest
}) => {
  return (
    <div className="relative inline-block w-48">
      {label && (
        <label className="block mb-1 font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <Field
          {...rest}
          component="select"
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
        >
          <option value={''}>Select...</option>
          {options.length !== 0 ? (
            options.map((item, index) => (
              <option key={index} value={item[valueExpr]}>
                {item[displayExpr]}
              </option>
            ))
          ) : (
            <option>None</option>
          )}
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 13.293a1 1 0 011.414 0L14 16.586V18a1 1 0 01-2 0v-1.414l-3.293-3.293a1 1 0 010-1.414 1 1 0 011.414 0z" />
            <path d="M10 12a1 1 0 011-1h7a1 1 0 010 2h-7a1 1 0 01-1-1z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropDownSelector;
