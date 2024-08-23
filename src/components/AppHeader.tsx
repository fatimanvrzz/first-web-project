import { ReactNode, useEffect, useState } from "react";

const AppHeader: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex items-center w-screen h-20 md:bg-transparent bg-white transition-all border-2 
            ${scrollPosition > 110 ? "animate-header-fade-down fixed" : "static"}`}>
            <div className="flex flex-row items-center justify-between px-10 w-full">
                <img src="" alt="Logo" className="w-20 aspect-auto" />
                <BurgerMenu className="md:hidden" />
            </div>
        </div>
    )
}

export default AppHeader;

const BurgerMenu: React.FC<{ className?: string }> = (props) => {
    const burgerLine: ReactNode = <div className="bg-purple-500 w-full h-1 rounded" />

    return (
        <div className={`border-2 rounded border-purple-500 w-10 aspect-square flex 
            flex-col items-center justify-center gap-1 px-1 ${props.className}`}>
            {burgerLine}
            {burgerLine}
            {burgerLine}
        </div>
    )
}

