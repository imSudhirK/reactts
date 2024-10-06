import backArrow from "../../assets/icons/ep_back.svg";
import { useNavigate } from "react-router-dom";
import { StyledDiv, StyledImage, StyledText } from "../../styles/common-styles";

const CommonHeader = (props: any) => {
    const navigate = useNavigate();
    const handleBack = () => {
        if (props.handleBack) props.handleBack();
        navigate(props.backPath || -1, {
            state: props.state || null
        });
    };
    return (
        <StyledDiv
            d="flex"
            fd="row"
            w="100%"
            p="20px"
            br="0px 0px 21px 21px"
            bg="linear-gradient(118.51deg, #055EB0 -16.02%, #1B3B6A 98.2%, #153461 98.2%)"
        >
            <StyledImage onClick={handleBack} src={backArrow} w="auto" h="auto" mr="10px"></StyledImage>
            <StyledText fs="16px" c="#fff" lh="24px" ta="left">
                {props.title}
            </StyledText>
        </StyledDiv>
    );
};

export default CommonHeader;
