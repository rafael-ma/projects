function Button(props) {
    return <button className="clickButton" onClick={props.onClick}>{props.text}</button>
}

export default Button