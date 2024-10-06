import { useEffect, useState } from "react";
import CommonHeader from "../../components/headers/common-headers";
import { ColFlex, StyledDiv, StyledInput } from "../../styles/common-styles";
import { useLocation } from "react-router-dom";
import { NoteType } from "../../models";

const AddNote = () => {
    const location = useLocation();
    const { note } = location.state || {};
    const [newNote, setNewNote] = useState<NoteType>(note);

    const handleTitleChange = (event: any) => {
        const title = event?.target?.value;
        const updatedNote = { ...newNote, title };
        setNewNote(updatedNote);
    };

    const handleDescriptionChange = (event: any) => {
        const description = event?.target?.value;
        const updatedNote = { ...newNote, description };
        setNewNote(updatedNote);
    };

    const handleAddNote = () => {
        if (note?.title === newNote?.title && note?.description === newNote?.description) return;
        else if (newNote?.id) {
            console.log("updated note");
        } else {
            console.log("create new Note");
        }
    };

    useEffect(() => {
        setNewNote(note);
    }, [note]);

    return (
        <ColFlex
            ai="center"
            minH="100vh"
            maxW="500px"
            w="100%"
            h={"100vh"}
            bgc="#F3F6FE"
            style={{ position: "relative", boxShadow: "0px 9px 28px -6px #00000008" }}
        >
            <CommonHeader title="Note" backPath="/" handleBack={handleAddNote} />

            <StyledInput b="none" br="8px 8px 0 0" type="text" placeholder="Title" h="52px" value={newNote?.title} onChange={handleTitleChange} />
            <textarea
                id="newNote"
                style={{
                    width: "100%",
                    padding: "10px",
                    minHeight: "70vh",
                    border: "none",
                    borderRadius: "4px",
                    resize: "none"
                }}
                placeholder="Note"
                value={newNote?.description}
                onChange={handleDescriptionChange}
            />

            <StyledDiv mb="100px"></StyledDiv>
        </ColFlex>
    );
};

export default AddNote;
