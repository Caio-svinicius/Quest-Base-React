const Button = ({label}) => {
    return <div> <button onClick={() => alert(`Este botão, realiza o ${label}`)}>{label}</button> </div>
}

export default Button   