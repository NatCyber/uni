// Side Bar
import { IoBookmarksSharp } from "react-icons/io5";

import ButtonField from "./ButtonField";

interface Props {
  links?: any;
  style: {
    width?: string;
    height?: string;
    position?: any;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    display: string;
    flexDirection?: any;
    backgroundColor: string;
    boxShadow?: string;
    color: string;
    padding?: string | number;
    paddingTop?: string | number;
    margin?: string | number;
    marginTop?: string | number;
    marginLeft?: string | number;
    borderRadius?: string;
    border?: string;
  };
}

const SideBar = (props: Props) => {
  const LinksStyle = {
    width: "99%",
    padding: "11px",
    marginTop: 30,
    background: "#fff",
    color: "#ff6f6f",
    fontWeight: 100,
    fontSize: 17,
    borderRadius: 10,
    cursor: "pointer",
    // border: "#bfbfbf 1px solid",
    border: "none",
    display: "flex",
    justifyContent: "left",
  };

  const { style, links } = props;

  return (
    <div style={style}>
      <ButtonField
        icon={<IoBookmarksSharp style={{ marginRight: "10px" }} />}
        value={links.yourBookings}
        style={{ ...LinksStyle }}
      />
    </div>
  );
};

SideBar.defaultProps = {
  links: "",
  style: {
    display: "block",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "1px",
  },
};

export default SideBar;
