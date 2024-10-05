import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";
import Subscribe from "./pages/Subscribe";
import WorkAsTeacher from "./pages/WorkAsTeacher";
import For_students from "./pages/For_students";
import QatarPage from "./pages/Qatar_Page";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MyHome />} />
                        <Route path="/Subscribe" element={<Subscribe />} />
                        <Route
                            path="/WorkAsTeacher"
                            element={<WorkAsTeacher />}
                        />
                        <Route path="For_students" element={<For_students />} />
                        <Route path="/Qatar" element={<QatarPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
