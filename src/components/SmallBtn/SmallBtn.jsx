import React from "react";
import Button from "../Button/Button";
import "./SmallBtn.scss";

const SmallBtn = ({ children, className, ...props }) => {
    const combinedClassName = ["small-btn", className].filter(Boolean).join(" ");

    return (
        <>
            <Button className={combinedClassName} {...props}>
                {children}
            </Button>
        </>
    );
};

export default SmallBtn;
