interface ButtonProps {
  onClick: () => void
  text: string
  type: 'primary' | 'secondary'
}

const Button = ({ onClick, text, type }: ButtonProps): JSX.Element => {
  return (
    <div
      className={`cursor-pointer ${type === 'secondary' ? 'px-3 border border-red-400' : 'bg-red-400 p-5'}  rounded-sm`}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Button
