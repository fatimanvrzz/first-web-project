import { ReactNode, useEffect, useState } from "react";

const AppHeader: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <MobileHeader scrollPosition={scrollPosition} className="flex sm:hidden" />
            <TabletHeader scrollPosition={scrollPosition} className="hidden sm:flex xl:hidden" />
        </>
    )
}

export default AppHeader;

const BurgerMenu: React.FC<{ className?: string, colorEnum: ColorEnum }> = (props) => {
    const burgerLine: ReactNode = <div className={`${getBackgroundColor(props.colorEnum)} w-full h-1`} />

    return (
        <div className={`border-2 ${getBorderColor(props.colorEnum)} w-10 aspect-square flex 
            flex-col items-center justify-center gap-1 px-2 cursor-pointer ${props.className}`}>
            {burgerLine}
            {burgerLine}
            {burgerLine}
        </div>
    )
}

const MobileHeader: React.FC<{ scrollPosition: number, className?: string }> = (props) => {
    return (
        <div className={`items-center w-screen h-20 bg-white transition-all 
            ${props.scrollPosition > 110 ? "animate-header-fade-down fixed" : "static"} ${props.className}`}>
            <div className="flex flex-row items-center justify-between px-10 w-full">
                <img src="https://zcube.in/hitup/img/logo/logo.png" alt="Logo" className="w-20 aspect-auto" />
                <BurgerMenu colorEnum={ColorEnum.Primary} />
            </div>
        </div>
    )
}

const TabletHeader: React.FC<{ scrollPosition: number, className?: string }> = (props) => {
    return (
        <div className={`items-center w-screen h-20 transition-all 
            ${props.scrollPosition > 110 ? "animate-header-fade-down fixed bg-white" : "static bg-transparent"} ${props.className}`}>
            <div className="flex flex-row items-center justify-between px-10 w-full">
                <img src="https://zcube.in/hitup/img/logo/logo.png" alt="Logo" className="w-20 aspect-auto" />
                <BurgerMenu colorEnum={ColorEnum.Secondary} />
            </div>
        </div>
    )
}

function getBorderColor(colorEnum: ColorEnum): string {
    switch (colorEnum) {
        case ColorEnum.Primary:
            return "border-primary"
        case ColorEnum.Secondary:
            return "border-secondary"
        default:
            return ""
    }
}

function getBackgroundColor(colorEnum: ColorEnum): string {
    switch (colorEnum) {
        case ColorEnum.Primary:
            return "bg-primary"
        case ColorEnum.Secondary:
            return "bg-secondary"
        default:
            return ""
    }
}

enum ColorEnum {
    Primary,
    Secondary,
}