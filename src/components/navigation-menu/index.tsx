import { Drawer, Menu, MenuProps } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledDiv, StyledText } from "../../styles/common-styles";
import { logout } from "../../apis";
import UserIcon from "../user-icon";
const items: MenuProps["items"] = [
    {
        label: "Edit Profile",
        key: "edit-profile"
    }
];

const NavMenu = (props: any) => {
    const { openDrawer, setOpenDrawer, userName, userPhone } = props;
    const navigate = useNavigate();

    const onClick = (e: any) => {
        navigate(`/${e.key}`);
    };

    const handleLogout = async () => {
        try {
            await logout();
            window.location.reload();
        } catch (error) {}
    };

    return (
        <Drawer
            title=""
            open={openDrawer}
            placement="right"
            onClose={() => setOpenDrawer(false)}
            getContainer={false}
            closeIcon={<CloseOutlined style={{ fontSize: "18px", color: "#FFFFFF" }} />}
            styles={{
                body: { padding: "0", flexDirection: "column", justifyContent: "space-between" },
                header: { backgroundColor: "#134885", borderBottom: "none" }
            }}
            contentWrapperStyle={{ overflow: "hidden" }}
        >
            <StyledDiv>
                <StyledDiv minH="200px" d="flex" jc="center" ai="center" style={{ position: "relative", overflow: "hidden" }}>
                    <StyledDiv
                        style={{
                            backgroundColor: "#134885",
                            height: "50%",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "0 0 0 0"
                        }}
                    />
                    <StyledDiv
                        style={{
                            backgroundColor: "#F3F6FE",
                            height: "50%",
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            borderRadius: "0 0 8px 8px"
                        }}
                    />
                    <StyledDiv
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingBottom: "20px",
                            position: "relative",
                            zIndex: 1
                        }}
                    >
                        <StyledDiv>
                            <UserIcon firstLetter={userName[0]} name={userName} fontSize="60px" />
                            {userName !== userPhone && (
                                <StyledText fs="24px" fw="600">
                                    {userName}
                                </StyledText>
                            )}
                            {userPhone && (
                                <StyledText fs="14px" fw="400">
                                    +91 {userPhone}
                                </StyledText>
                            )}
                        </StyledDiv>
                    </StyledDiv>
                </StyledDiv>

                <StyledDiv>
                    <StyledText ta="left" fs="12px" c="#c1c1c1" mt="20px" mb="0px" pl="20px">
                        Account Settings
                    </StyledText>
                    <Menu onClick={onClick} mode="vertical" items={items} />
                </StyledDiv>
            </StyledDiv>
            <StyledDiv p="20px" style={{ position: "fixed", maxWidth: "370px", width: "100%", bottom: "0" }}>
                <StyledButton b="1px solid #134885" bgc="#134885" c="#fff" br="10px" w="100%" onClick={handleLogout}>
                    Log out
                </StyledButton>
            </StyledDiv>
        </Drawer>
    );
};

export default NavMenu;
