import React from "react";
import './Input.scss'
const Input = React.forwardRef((props, ref) => {
    return(
        <>
        <input ref={ref} className={props.className} {...props} />
        </>
    )
})

export default Input