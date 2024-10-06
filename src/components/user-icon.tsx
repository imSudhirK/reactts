import { StyledDiv, StyledText } from "../styles/common-styles";
import person from "../assets/icons/person.svg";
const UserIcon = (props: any) => {
    return (
        <StyledDiv
            id="profile-icon"
            d="flex"
            w={props.width || "90px"}
            br="100%"
            bg={"#134885"}
            ar="1/1"
            style={{ position: "relative", alignItems: "center" }}
            m="10px auto"
        >
            {/^[a-zA-Z]/.test(props.firstLetter) ? (
                <StyledText
                    ta="center"
                    fs={props.fontSize || "16px"}
                    fw="700"
                    w="100%"
                    c="#fff"
                    m="auto"
                    style={{ position: "absolute", textTransform: "capitalize" }}
                >
                    {props.firstLetter}
                </StyledText>
            ) : (
                <img src={person} alt="person" style={{ position: "absolute", left: "21%" }} />
            )}
        </StyledDiv>
    );
};

export default UserIcon;
