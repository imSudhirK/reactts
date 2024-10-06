import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "../loaders/fallback";
import NOTES from "../pages/notes";
import TODO from "../pages/todo";
import AddNote from "../pages/notes/add-notes";

const MainRouter = () => {
    return (
        <Suspense fallback={<FallBack />}>
            <Routes>
                <Route index element={<NOTES />} />
                <Route path="/todo" element={<TODO />} />
                <Route path="/add-note" element={<AddNote />} />
            </Routes>
        </Suspense>
    );
};

export default MainRouter;
