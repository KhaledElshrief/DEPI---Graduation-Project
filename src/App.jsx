import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";
import Subscribe from "./pages/Subscribe";
import WorkAsTeacher from "./pages/WorkAsTeacher";
import For_students from "./pages/For_students";
import QatarPage from "./pages/Qatar_Page";
import GroupsPage from "./pages/GroupsPage";
import Private from "./pages/Private";
import WhoKhososy from "./pages/WhoKhososy";
import CardsContainer from "./components/CardsContainer";
import BlogCardsContainer from "./components/BlogCardsContainer";
import TechnologyTools from "./components/TechnologyTools";
import NewLearning from "./components/NewLearning";
import LearningSys from "./components/LearningSys";
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
                        <Route
                            path="/For_students/Group"
                            element={<GroupsPage />}
                        />
                        <Route
                            path="/For_students/Private"
                            element={<Private />}
                        ></Route>
                        <Route path="/whokhososy" element={<WhoKhososy/>}></Route>
                        <Route path="/Blog" element={<BlogCardsContainer />}></Route>
                        <Route path="/TechTools" element={<TechnologyTools />}></Route>
                        <Route path="/NewLearning" element={<NewLearning />}></Route>
                        <Route path="/LearningSys" element={<LearningSys />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
