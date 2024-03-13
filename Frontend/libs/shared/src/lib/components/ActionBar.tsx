import Avatar from "./Avatar";

// Action Bar

// interface for Action Bar Component

interface Props {
  alt?: string;
  name?: string;
  email?: string;
  avatar?: string;
  username: string;
  src?: string;
  style: {
    position?: any;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    display: string;
    backgroundColor: string;
    color: string;
    width?: string;
    height?: string;
    padding?: string | number;
    margin?: string | number;
    borderRadius: string;
  };
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ActionBar = (props: Props) => {
  // Props passed to Action bar Component

  const { alt, style, src, email, avatar, username } = props;

  return (
    <div style={style}>
      <Avatar
        // current user email to be passed
        userEmail={email}
        // current user first name's first letter to be passed to Avatar component
        userAvatar={avatar}
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
          backgroundColor: "#000",
          borderRadius: "50%",
          color: "#fff",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "5px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          {email}
        </p>
        <p
          style={{
            fontSize: "13px",
          }}
        >
          {username}
        </p>
      </div>
    </div>
  );
};

// Initial or default props

ActionBar.defaultProps = {
  alt: "",
  name: "preloader",
  src: "",
  text: "",
  style: {
    width: "40px",
    padding: "10px",
    margin: "10 auto",
  },
};

export default ActionBar;
