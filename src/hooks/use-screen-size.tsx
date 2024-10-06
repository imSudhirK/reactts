import { useMediaQuery } from "react-responsive";

export const useScreenSizes = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });
    const isMobileOrTablet = useMediaQuery({ query: "(max-width: 769px)" });

    //new breakpoints
    const xs = "480px";
    const sm = "768px";
    const md = "1024px";
    const lg = "1200px";

    //new
    const isMobile = useMediaQuery({ query: `(max-width: ${xs})` });
    const isTablet = useMediaQuery({ query: `(min-width: ${xs + 1}) and (max-width: ${sm})` });
    const isLaptop = useMediaQuery({ query: `(min-device-width: ${sm + 1}) and (max-device-width: ${md})` });
    const isLargeDesktop = useMediaQuery({ query: `(min-device-width: ${md + 1}) and (max-device-width: ${lg})` });
    const isExtraLargeDesktop = useMediaQuery({ query: `(min-device-width: ${lg + 1})` });

    const responsiveDisplay = (bigScreenValue: string, smallScreenValue: string) => {
        if (isDesktopOrLaptop === true) return bigScreenValue;
        if (isMobileOrTablet === true) return smallScreenValue;
    };

    const getResponsiveDisplay = ({ xs, sm, md, lg }: getResponsiveDisplayProps) => {
        if (isMobile) return xs || lg || md || sm;
        else if (isTablet) return sm || lg || md || xs;
        else if (isLaptop) return md || lg || sm || xs;
        else return lg || md || sm || xs;
    };

    return {
        isDesktopOrLaptop,
        isMobileOrTablet,
        isMobile,
        isTablet,
        isLaptop,
        isLargeDesktop,
        isExtraLargeDesktop,
        responsiveDisplay,
        getResponsiveDisplay
    };
};
export interface getResponsiveDisplayProps {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
}
