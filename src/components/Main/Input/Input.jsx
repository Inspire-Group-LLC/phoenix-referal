import React from "react";
import './Input.scss'

const Input = React.forwardRef((props, ref) => {
    const combinedClassName = ["input", props.className].filter(Boolean).join(" ");

    return(
        <>
        <input ref={ref} className={combinedClassName} {...props} />
        </>
    )
})

export default Input