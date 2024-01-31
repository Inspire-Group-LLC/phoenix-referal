import React from "react";
import "./Button.scss";

const Button = ({ children, className, ...props }) => {
    // Concatenate the provided className with the default "btn" class
    const combinedClassName = ["btn", className].filter(Boolean).join(" ");

    return (
        <>
            <button {...props} className={combinedClassName}>
                {children}
            </button>
        </>
    );
};

export default Button;
