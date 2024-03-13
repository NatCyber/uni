interface Props {
  text: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: any,
  style?: {
    color?: string,
    backgroundColor?: string,
    padding?: string,
  }
}

export default function Button({ text, type, style, onClick }: Props) {

  const buttonStyle = {
    padding: '10px 15px',
    color: '#fff',
    backgroundColor: '#6499E9',
    border: 'none',
    borderRadius: "5px",
    fontSize: '1em',
  }


  return (
    <button style={{ ...buttonStyle, ...style }} type={type} onClick={onClick} onMouseOver={(e: any) => { e.target.style.cursor = 'pointer' }} >{text}</button>
  )
};

Button.defaultProps = {

}
