// Menu Modal
import { useAppSelector, useAppDispatch } from "../redux/store";
import { logout } from "../redux/features/userSlice";
import { useNavigate, Route } from "react-router-dom";
import ButtonField from "./ButtonField";
import { useState } from "react";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";

// interface for Menu Modal Component

interface Props {
  data: any;
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
    borderRadius: string;
  };
}

const MenuModal = (props: Props) => {
  // Props passed to Action bar Component

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const LogoutBtnStyle = {
    width: "90%",
    height: 20,
    marginTop: 5,
    marginLeft: '20px',
    display: "flex",
    justifyContent: "left",
    paddingTop: "3px",
    background: "#fff",
    color: "#ff5858e5",
    fontWeight: 600,
    borderRadius: 1,
    cursor: "pointer",
    border: "none",
  };

  const menuBtnStyle = {
    width: "90%",
    height: 20,
    marginTop: 5,
    marginLeft: '20px',
    display: "flex",
    justifyContent: "left",
    paddingTop: "3px",
    background: "#fff",
    color: "black",
    fontWeight: 600,
    borderRadius: 1,
    cursor: "pointer",
    border: "none",
  };

  const Logout = () => {
    dispatch(logout());
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const { style, data } = props;

  return (
    <div style={style}>
      <ButtonField
        icon={
          <IoPersonCircleOutline
            style={{
              fontSize: "15px",
              paddingRight: "3px",
              paddingTop: "0px",
            }}
          />
        }
        style={{
          ...menuBtnStyle,
        }}
        // onClick={Logout}
        value={data.profile}
      />
      <ButtonField
        icon={
          <IoLogOutOutline
            style={{
              fontSize: "15px",
              paddingRight: "3px",
              paddingTop: "0px",
            }}
          />
        }
        style={{
          ...LogoutBtnStyle,
        }}
        onClick={Logout}
        value={data.logout}
      />
    </div>
  );
};

// Initial or default props

MenuModal.defaultProps = {
  style: {
    width: "40px",
    padding: "10px",
    margin: "10 auto",
  },
};

export default MenuModal;
