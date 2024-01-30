import React from "react";
import Button from "../Button/Button";
import "./BigBtn.scss";

const BigBtn = ({ children, className, ...props }) => {
    const combinedClassName = ["big-btn", className].filter(Boolean).join(" ");

    return (
        <>
            <Button className={combinedClassName} {...props}>
                {children}
            </Button>
        </>
    );
};

export default BigBtn;
