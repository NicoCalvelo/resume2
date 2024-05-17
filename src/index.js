import "./index.css";
import React from "react";
import Home from "./pages/home/Home";
import ReactDOM from "react-dom/client";
import "./base/Providers/ToastsProvider";
import Dashboard from "./pages/recipes/Dashboard";
import RecipesList from "./pages/recipes/RecipesList";
import "./base/Providers/ConfirmationDialogsProvider";
import HistoryProvider from "./providers/HistoryProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter history={HistoryProvider}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/recipes" element={<Dashboard />} />
        <Route path="/recipes/:id" element={<RecipesList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
