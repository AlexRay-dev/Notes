import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./pages/layout";
import NoteInfo from "./pages/note-info/note-info";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/note/:id" element={<NoteInfo/>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Route>
    </Routes>
  );
}

export default App;
