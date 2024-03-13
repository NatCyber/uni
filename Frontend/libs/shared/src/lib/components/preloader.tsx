interface Props {
  alt?: string;
  name?: string;
  src: string;
  style: {
    position?: any;
    top: string;
    backgroundColor: string;
    width?: string;
    height?: string;
    padding?: string | number;
    margin?: string | number;
    borderRadius?: string;
  };
}

const Preloader = (props: Props) => {
  const { alt, style, src } = props;
  return (
    <div style={style}>
      <img
        alt={alt}
        style={{
          width: "50px",
          margin: "0 40%",
          padding: "5px",
        }}
        src={src}
      />
    </div>
  );
};

Preloader.defaultProps = {
  alt: "Preloading",
  name: "preloader",
  src: "",
  style: {
    width: "40px",
    padding: "10px",
    margin: "10 auto",
  },
};

export default Preloader;
