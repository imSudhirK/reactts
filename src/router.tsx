import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FallBack from "./loaders/fallback";
import AppLayout from "./layouts/app-layout";

const AppRouter = () => {
    return (
        <Suspense fallback={<FallBack />}>
            <Router>
                <Routes>
                    <Route path="/*" element={<AppLayout />} />
                </Routes>
            </Router>
        </Suspense>
    );
};

export default AppRouter;
