import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
    variant,
    children,
    customStyle,
    ...eventHandler // Rest prop
}) => {
    // 3 button variants: solid, outline, ghost
    let defaultStyle = "";
    const buttonSettings = {
        defaultPadding: "px-6 py-3",
        defaultWidth: "w-[260px]",
        defaultBorderRadius: "rounded-lg",
        defaultText: "text-lg",
        defaultTransition: "transition duration-[300ms]",
    };

    for (const setting in buttonSettings) {
        defaultStyle = defaultStyle + " " + buttonSettings[setting];
    }

    switch (variant) {
        case "solid":
            defaultStyle = `${defaultStyle} text-white bg-mainBG hover:bg-secondaryAccent`;
            break;
        case "outline":
            defaultStyle = `${defaultStyle} border border-zinc-800 hover:border-secondaryAccent hover:text-secondaryAccent`;
            break;
        case "ghost":
            defaultStyle = `${defaultStyle} hover:bg-zinc-300`;
            break;
        default:
            defaultStyle = `${defaultStyle}`;
    }

    return (
        <button className={defaultStyle} style={customStyle} {...eventHandler}>
            {children}
        </button>
    );
};

export default Button;
