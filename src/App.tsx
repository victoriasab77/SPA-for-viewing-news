import React from "react";
import Card from "./components/Card";
import "./App.css";
import Home from "./pages/Home/Index";
import useFetch from "./API/UseFetch";
import zaglushka from "./images/photo_2023-01-22_03-04-49.jpg";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage/Index";

dayjs.extend(advancedFormat);

function App() {
  //if (loading) return <Text> Loading...</Text>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />;
        <Route
          path="/ArticlePage"
          element={<ArticlePage props={{ text: "Welcome to Article page" }} />}
        />
        ;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
