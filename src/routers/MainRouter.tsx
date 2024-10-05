import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "../loaders/Fallback";
import Homepage from "../pages/Homepage";

const MainRouter = () => {
    return (
        <Suspense fallback={<FallBack />}>
            <Routes>
                <Route index element={<Homepage />} />
            </Routes>
        </Suspense>
    );
};

export default MainRouter;
