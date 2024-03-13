import { RiErrorWarningFill } from "react-icons/ri";

interface Props {
  errorMessage: string;
  style: {
    display?: string;
    fontSize: string;
    marginTop?: string;
    background?: string;
    color: string;
    padding?: string;
    borderRadius?: string;
  };
}

const ErrorMessage = (props: Props) => {
  const { errorMessage, style } = props;

  return (
    <>
      <p
        style={{
          ...style,
        }}

        // style={{
        //   ...ErrorEssageStyles,
        // }}
      >
        <RiErrorWarningFill style={{ padding: "2.5px" }} />
        {errorMessage}
      </p>
    </>
  );
};

ErrorMessage.defaultProps = {
  errorMessage: "",
  style: {
    display: "flex",
    fontSize: "12px",
    marginTop: "10px",
    background: "#ff5858e5",
    color: "#ffffff",
    padding: "5px",
    borderRadius: "5px",
  },
};

export default ErrorMessage;
