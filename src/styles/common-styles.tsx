import styled from "styled-components";
import { ThemeProps } from "./style-interface";
import { Button, Input, Modal, Row, Spin } from "antd";

export const StyledDiv = styled.div<ThemeProps>`
    display: ${(props) => props.d || ""};
    position: ${(props) => props.pos || ""};
    margin-top: ${(props) => props.mt || ""};
    width: ${(props) => props.w || ""};
    margin-left: ${(props) => props.ml || ""};
    margin-bottom: ${(props) => props.mb || ""};
    bottom: ${(props) => props.bottom || ""};
    right: ${(props) => props.right || ""};
    background: ${(props) => props.bg || ""};
    padding: ${(props) => props.p || ""};
    height: ${(props) => props.h || ""};
    min-height: ${(props) => props.minH || ""};
    margin: ${(props) => props.m || ""};
    background-color: ${(props) => props.bgc || ""};
    justify-content: ${(props) => props.jc || ""};
    align-items: ${(props) => props.ai || ""};
    flex-direction: ${(props) => props.fd || ""};
    flex-wrap: ${(props) => props.fw || ""};
    border-radius: ${(props) => props.br || ""};
    box-shadow: ${(props) => props.bs || ""};
    aspect-ratio: ${(props) => props.ar || ""};
    border: ${(props) => props.b || ""};
    left: ${(props) => props.left || ""};
    top: ${(props) => props.top || ""};
    overflow-x: ${(props) => props.oflx || ""};
    overflow-y: ${(props) => props.ofly || ""};
    max-width: ${(props) => props.maxW || ""};
    max-height: ${(props) => props.maxH || ""};
    z-index: ${(props) => props.zi || ""};
    filter: ${(props) => props.fi || ""};
    &:before {
        background-image: ${(props) => props.bgurl || ""};
    }
`;

export const StyledImage = styled.img<ThemeProps>`
    width: ${(props) => props.w || "32px"};
    height: ${(props) => props.h || "32px"};
    cursor: ${(props) => (props.hoverable ? "pointer" : "")};
    margin-left: ${(props) => props.ml || ""};
    margin-right: ${(props) => props.mr || ""};
    margin-top: ${(props) => props.mt || ""};
    color: ${(props) => props.c || ""};
    z-index: ${(props) => props.zi || ""};
    margin: ${(props) => props.m || ""};
    display: ${(props) => props.d || ""};
    filter: ${(props) => props.fi || ""};
`;

export const StyledText = styled.p<ThemeProps>`
    display: ${(props) => props.d || ""};
    position: ${(props) => props.pos || ""};
    font-family: ${(props) => props.ff || "Poppins"};
    background: ${(props) => props.bg || ""};
    color: ${(props) => props.c || "#000"};
    font-size: ${(props) => props.fs || "16px"};
    line-height: ${(props) => props.lh || "24px"};
    font-weight: ${(props) => props.fw || "400"};
    width: ${(props) => props.w || ""};
    max-width: ${(props) => props.maxw || ""};
    margin-top: ${(props) => props.mt || "0px"};
    margin-right: ${(props) => props.mr || "0px"};
    margin-left: ${(props) => props.ml || "0px"};
    text-align: ${(props) => props.ta || "center"};
    align-self: ${(props) => props.aself || ""};
    letter-spacing: ${(props) => props.ls || "0px"};
    margin-bottom: ${(props) => props.mb || "0px"};
    margin: ${(props) => props.m || ""};
    padding-left: ${(props) => props.pl || "0px"};
    padding-top: ${(props) => props.pt || "0px"};
    padding: ${(props) => props.p || ""};
    cursor: ${(props) => (props.hoverable ? "pointer" : "")};
    ${(props) => props.flexGrow && `flex-grow: ${props.flexGrow};`}
    opacity: ${(props) => props.opac || ""};
    left: ${(props) => props.left || ""};
    top: ${(props) => props.top || ""};
    text-wrap: ${(props) => props.tw || "nowrap"};
    white-space: inherit;
    filter: ${(props) => props.fi || ""};
`;

export const RowFlex = styled.div<ThemeProps>`
    ${(props) => props.gap && `gap: ${props.gap};`}
    display: flex;
    flex-direction: ${(props) => props.flexd || "row"};
    flex-wrap: ${(props) => props.fw || ""};
    justify-content: ${(props) => props.jc || "space-between"};
    align-items: ${(props) => props.ai || ""};
    width: ${(props) => props.w || ""};
    height: ${(props) => props.h || ""};
    margin: ${(props) => props.m || "auto"};
    padding: ${(props) => props.p || ""};
    box-shadow: ${(props) => props.bs || ""};
    border: ${(props) => props.b || ""};
    border-radius: ${(props) => props.br || ""};
`;

export const ColFlex = styled.div<ThemeProps>`
    display: ${(props) => props.d || "flex"};
    width: ${(props) => props.w || ""};
    height: ${(props) => props.h || ""};
    margin: ${(props) => props.m || "auto"};
    background-color: ${(props) => props.bgc || ""};
    background: ${(props) => props.bg || ""};
    flex-direction: ${(props) => props.flexd || "column"};
    justify-content: ${(props) => props.jc || ""};
    align-items: ${(props) => props.ai || "flex-start"};
    overflow-x: ${(props) => props.oflx || ""};
    overflow-y: ${(props) => props.ofly || ""};
    border: ${(props) => props.b || ""};
    border-radius: ${(props) => props.br || ""};
    min-height: ${(props) => props.minH || ""};
    max-width: ${(props) => props.maxW || ""};
    padding: ${(props) => props.p || ""};
    position: ${(props) => props.pos || ""};
    &:before {
        background-image: ${(props) => props.bgurl || ""};
    }
`;

export const StyledSpin = styled(Spin)<ThemeProps>`
    position: ${(props) => props.pos || "fixed !important"};
    background: ${(props) => props.bg || ""};
    width: ${(props) => `${props.w} !important` || ""};
    height: ${(props) => props.h || ""};
    display: ${(props) => props.d || ""};
    margin: ${(props) => props.m || ""};
`;

export const StyledCardButton = styled.button<ThemeProps>`
    background-color: ${(props) => props.bgc || "#FFF"};
    background: ${(props) => props.bg};
    ${(props) => props.h && `height: ${props.h};`}
    ${(props) => props.c && `color: ${props.c};`}
    ${(props) => props.fs && `font-size: ${props.fs};`}
    ${(props) => props.fw && `font-weight: ${props.fw};`}
    ${(props) => props.m && `margin: ${props.m};`}
    ${(props) => props.p && `padding: ${props.p};`}
    ${(props) => props.w && `width: ${props.w};`}
    ${(props) => props.bs && `box-shadow: ${props.bs};`}
    ${(props) => props.mt && `margin-top: ${props.mt};`}
    ${(props) => props.mb && `margin-bottom: ${props.mb};`}
    ${(props) => props.noPointer && `cursor: default;`}
    border: ${(props) => props.b || ""};
    border-radius: ${(props) => props.br || "4px"};
    :hover {
        ${(props) => props.hoverable && ` cusrsor: pointer; transform: scale(1.05);`}
    }
`;

export const StyledInput = styled(Input)<ThemeProps>`
    width: ${(props) => props.w || ""};
    height: ${(props) => props.h || "46px"};
    background: ${(props) => props.bg};
    background-image: ${(props) => props.bgurl};
    background-repeat: ${(props) => props.bgrepeat || "no-repeat"};
    background-position: ${(props) => props.bgpos || "12px 18.5px"};
    padding: ${(props) => props.pl || ""};
    border-radius: ${(props) => props.br || ""};
    font-size: ${(props) => props.fs || "16px"};
    line-height: ${(props) => props.lh || "19px"};
    letter-spacing: ${(props) => props.ls || ""};
    font-weight: ${(props) => props.fw || "500"};
    margin-bottom: ${(props) => props.mb || "0"};
    &:hover: {
        border-color: ${(props) => props.bc || "#0F4F93"} !important;
    }
    &:focus {
        border-color: ${(props) => props.bc || "#0F4F93"} !important;
        box-shadow: 0 0 0 2px rgb(15 79 147 / 10%) !important;
    }
    ${(props) => props.b && `border: ${props.b};`}
`;

export const StyledButton = styled(Button)<ThemeProps>`
    background: ${(props) => props.bgc || "#FFF"} !important;
    width: ${(props) => props.w || ""};
    display: ${(props) => props.d || ""};
    height: ${(props) => props.h || "46px"};
    font-size: ${(props) => props.fs || "16px"};
    font-weight: ${(props) => props.fw || "500"};
    font-family: ${(props) => props.ff};
    margin: ${(props) => props.m || ""};
    margin-right: ${(props) => props.mr || ""};
    padding: ${(props) => props.p || ""};
    border: ${(props) => props.b || ""} !important;
    border-radius: ${(props) => props.br || "10px"};
    color: ${(props) => props.c || "#3465FF"} !important;
    margin-bottom: ${(props) => props.mb || ""};
    margin-top: ${(props) => props.mt || ""};
    &:hover {
        background: ${(props) => (props.hoverbgc ? props.hoverbgc : props.bgc || "")} !important;
        border: ${(props) => props.b || "0px"} !important;
        color: ${(props) => props.c || "#3465FF"} !important;
    }
    &:focus {
        background: ${(props) => props.focusbgc || ""} !important;
        border: ${(props) => props.b || ""} !important;
        color: ${(props) => props.c || "#3465FF"} !important;
    }
    &:disabled {
        background: grey !important;
        color: #ccc !important;
        cursor: not-allowed !important;
        border: none !important;
    }
`;

export const StyledRow = styled(Row)<ThemeProps>`
    margin: ${(props) => props.m || "auto"};
    padding: ${(props) => props.p || ""};
    width: ${(props) => props.w || "1088px"};
    height: ${(props) => props.h || ""};
    background-color: ${(props) => props.bgc || ""};
    border-radius: ${(props) => props.br || "0px"};
    box-shadow: ${(props) => props.bs || ""};
    display: ${(props) => props.d || ""};
    cursor: ${(props) => (props.hoverable ? "pointer" : "")};
    ${(props) => props.mb && `margin-bottom: ${props.mb};`}
    ${(props) => props.mt && `margin-top: ${props.mt};`}
    ${(props) => props.jc && `justify-content: ${props.jc};`}
    ${(props) => props.fd && `flex-direction: ${props.fd};`}
    ${(props) => props.gap && `gap: ${props.gap};`}
    ${(props) => props.bt && `border-top: ${props.bt};`}
    ${(props) => props.bb && `border-bottom: ${props.bb};`}
    ${(props) => props.pb && `padding-bottom: ${props.pb};`}
    ${(props) => props.pt && `padding-top: ${props.pt};`} 
    ${(props) => props.ai && `align-items: ${props.ai};`}
`;

export const StyledModal = styled(Modal)<ThemeProps>((props) => ({
    ".ant-modal-body": {
        padding: "0px",
        width: props.w || "auto"
    },
    ".ant-modal-content": {
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: props.bgc || "#F2F3F7",
        padding: props.p || ""
    }
}));
