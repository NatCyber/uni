interface Props {
  alt?: string;
  name?: string;
  userEmail?: string;
  userAvatar?: string;
  src?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  // style: {
  //   position?: string;
  //   top?: string | number;
  //   left?: string | number;
  //   right?: string | number;
  //   bottom?: string | number;
  //   backgroundColor: string;
  //   width?: string | number;
  //   minWidth?: string | number;
  //   height?: string | number;
  //   minHeight?: string | number;
  //   padding?: string | number;
  //   margin?: string | number;
  //   marginLeft?: string | number;
  //   fontWeight?: string | number;
  //   borderRadius?: string | number;
  //   border: string;
  //   color: string;
  //   cursor?: string;
  // };
}

const Avatar = (props: Props) => {
  const { alt, src, className, userAvatar, onClick } = props;

  const userAvatarChar = userAvatar?.charAt(0);



  return (
    <div className={className} onClick={onClick}>
      {/* <img
        alt={alt}
        style={{
          display: 'none',
          width: '50px',
          margin: '0 40%',
          padding: '5px',
        }}
        src={src}
      /> */}
      <h1
        style={{
          color: '#fff',
          fontSize: '25px',
          textAlign: 'center',
          padding: '3px',
        }}
      >
        {userAvatarChar ? userAvatarChar?.toUpperCase() : 'null'}
      </h1>
    </div>
  );
};

Avatar.defaultProps = {
  alt: '',
  name: 'preloader',
  src: '',
  text: '',
  style: {
    width: '40px',
    padding: '10px',
    margin: '10 auto',
  },
};

export default Avatar;
