import { StyledDiv, StyledText } from "../../styles/common-styles";
import { NoteType } from "../../models";
import { useNavigate } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

const NotesCard = ({ note }: { note: NoteType }) => {
    const navigate = useNavigate();

    const openNote = () => {
        navigate("/add-note", { state: { note } });
    };

    return (
        <StyledDiv w="100%" b="1px solid #E9EBED" br="6px" p="20px 10px" mt="20px">
            <StyledText ta="left" fs="18px" mb="5px" fw="500">
                {note.title}
                <CaretRight size={22} color="#222222" style={{ verticalAlign: "top", marginLeft: "5px" }} onClick={openNote} />
            </StyledText>
            <StyledText ta="left" fs="14px">
                {note.description}
            </StyledText>
        </StyledDiv>
    );
};

export default NotesCard;
