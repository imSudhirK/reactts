import { useEffect, useState } from "react";
import BottomNavigation from "../../components/bottom-navigation";
import { ColFlex, RowFlex, StyledButton, StyledDiv, StyledImage, StyledSpin, StyledText } from "../../styles/common-styles";
import calendarIcon from "../../assets/images/calendar.svg";
import { getAccessToken } from "../../utils/common";
import LoginDrawer from "../../components/login-drawer";
import UserIcon from "../../components/user-icon";
import NavMenu from "../../components/navigation-menu";
import { getNotesData, getUserData } from "../../apis";
import { NoteType, UserType } from "../../models";
import NotesCard from "./notes-card";
import { useNavigate } from "react-router-dom";

const NOTES = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [showLoginDrawer, setShowLoginDrawer] = useState<boolean>(false);
    const [user, setUser] = useState<UserType>({ name: "", mobile: "" });
    const [notes, setNotes] = useState<NoteType[]>([]);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const fetchUser = async () => {
        const resp = await getUserData();
        setUser(resp);
    };

    const fetchNotes = async () => {
        const resp: any = await getNotesData();
        setNotes(resp);
    };

    useEffect(() => {
        fetchUser();
        fetchNotes();
    }, []);

    return (
        <StyledSpin spinning={loading} delay={500}>
            <ColFlex
                ai="center"
                minH="100vh"
                maxW="500px"
                w="100%"
                h={"100vh"}
                bgc="#F3F6FE"
                style={{ position: "relative", boxShadow: "0px 9px 28px -6px #00000008" }}
            >
                <div style={{ filter: showLoginDrawer ? "blur(5px)" : "", width: "100%", position: "relative" }}>
                    <ColFlex m="0" w="100%" br=" 0  0 21px 21px" bg="linear-gradient(118.51deg, #055EB0 -16.02%, #1B3B6A 98.2%, #153461 98.2%)">
                        <RowFlex w="100%" h="75px" m="0" p="15px" jc={!getAccessToken() ? "flex-end" : "space-between"}>
                            {getAccessToken() && (
                                <RowFlex m="0" jc="" ai="center" onClick={() => setOpenDrawer(true)}>
                                    <UserIcon width="45px" firstLetter={user.name[0]} name={user.name} fontSize="25px" />
                                    <StyledDiv mt="10px">
                                        {user.name && (
                                            <StyledText
                                                id="username-text"
                                                ta="left"
                                                c="#fff"
                                                fs="18px"
                                                fw="600"
                                                tw="nowrap"
                                                pl="10px"
                                                style={{ margin: "auto" }}
                                            >
                                                Hey, {user.name}
                                            </StyledText>
                                        )}
                                        <StyledText
                                            id="welcome-text"
                                            ta="left"
                                            c="#fff"
                                            fs="12px"
                                            fw="500"
                                            tw="nowrap"
                                            pl="10px"
                                            style={{ margin: "auto" }}
                                        >
                                            Welcome to NotePad
                                        </StyledText>
                                    </StyledDiv>
                                </RowFlex>
                            )}
                        </RowFlex>

                        <StyledDiv w="100%" m="30px auto">
                            <StyledImage src={calendarIcon} w="300px" h="auto" d="block" m="auto" style={{ maxWidth: "50%" }} />
                            <StyledText w="100%" mb="10px" ta="center" fs="24px" fw="700" lh="30px" c="#fff">
                                Keep Your Notes
                            </StyledText>
                            <StyledButton
                                id="get-started-button"
                                onClick={() => {
                                    if (!getAccessToken()) setShowLoginDrawer(true);
                                    else navigate("/add-note");
                                }}
                                br="4px"
                                w="40%"
                                m="20px auto"
                                fs="16px"
                                fw="700"
                                bgc="#FFF"
                                c="#194074"
                                d="block"
                            >
                                Add Notes
                            </StyledButton>
                        </StyledDiv>
                    </ColFlex>

                    {notes?.map((note) => {
                        return <NotesCard note={note} key={note?.id} />;
                    })}

                    <StyledDiv mb="100px" />
                    <NavMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} userName={user.name} userPhone={user.mobile} />
                </div>

                <BottomNavigation active={"NOTES"} />

                {showLoginDrawer && <LoginDrawer setIsFirstVisit={setShowLoginDrawer} />}
            </ColFlex>
        </StyledSpin>
    );
};

export default NOTES;
