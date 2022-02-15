import React from "react";

const Typography = ({ variant, children, className }) => {

    const Variant = `${variant}`;

    return (
        <Variant className={className}>{ children }</Variant>
    );
}

export default Typography;