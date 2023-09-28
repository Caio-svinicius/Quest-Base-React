const labelAlert = (label) => {
    alert(`Este botão, realiza o ${label}`)
}

const Button = ({label}) => {
    return (
        <div>
            <button onClick={() => labelAlert(label)}>{label}</button>
        </div>
    )
}

export default Button   