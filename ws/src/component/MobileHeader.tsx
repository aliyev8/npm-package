import React from "react";

type Props = {
    logoElement?: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
    menuClassName?: string;
    closeElement?: React.ReactNode;
    menuElement: React.ReactNode;
    isOpen?: boolean;
};

export const MobileHeader = (props: Props) => {
    const [scrollHeader, setScrollHeader] = React.useState(true);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);

    const handleScroll = () => {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            currentScrollTop > 44 && setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
        setLastScrollTop(currentScrollTop);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    React.useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [props.isOpen]);

    return (
        <div
            className={props.className ? props.className : ""}
            style={{
                ...props.styles,
                transition: "all 0.5s ease-in-out",
                height: scrollHeader ? "auto" : "auto",
                transform: scrollHeader ? "translateY(0)" : "translateY(-66px)",
                position: props.isOpen ? "relative" : "sticky",
                top: 0,
            }}
        >
            {props.logoElement}
            {props.closeElement}
            <div
                style={{
                    transform: props.isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.5s ease-in-out",
                }}
                className={props.menuClassName}
            >
                {props.menuElement}
            </div>
        </div>
    );
};


