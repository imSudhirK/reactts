import { useNavigate } from "react-router-dom";
import { StyledDiv, StyledImage, StyledText } from "../../styles/common-styles";
import homeIcon from "../../assets/icons/home.svg";
import homeActive from "../../assets/icons/home-active.svg";
import creditIcon from "../../assets/icons/score.svg";
import creditActive from "../../assets/icons/score-active.svg";

const BottomNavigation = (props: any) => {
    const { active } = props;
    const navigate = useNavigate();
    return (
        <StyledDiv
            w="100%"
            d="flex"
            jc="space-between"
            bgc="#FFFFFF"
            p="20px 20px 10px"
            maxW="500px"
            ai="flex-start"
            style={{ borderTop: "1px solid #ABACB1", position: "fixed", bottom: "0", zIndex: "999" }}
        >
            <StyledDiv
                style={{ textAlign: "center", flex: "1" }}
                onClick={() => {
                    navigate("/");
                }}
            >
                <StyledImage src={active === "NOTES" ? homeActive : homeIcon} w="26px" h="26px" />
                <StyledText fs="12px" c={active === "NOTES" ? "#0B63B6" : "#000000"} fw={active === "NOTES" ? "600" : "400"}>
                    NOTES
                </StyledText>
            </StyledDiv>
            <StyledDiv
                style={{ textAlign: "center", flex: "1" }}
                onClick={() => {
                    navigate("/todo");
                }}
            >
                <StyledImage src={active === "TODO" ? creditActive : creditIcon} w="26px" h="26px" />
                <StyledText fs="12px" lh="14px" c={active === "TODO" ? "#0B63B6" : "#000000"} fw={active === "TODO" ? "600" : "400"}>
                    TODO
                </StyledText>
            </StyledDiv>
        </StyledDiv>
    );
};

export default BottomNavigation;
