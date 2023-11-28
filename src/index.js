import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HistoryProvider from "./providers/HistoryProvider";
import Dashboard from "./pages/recipes/Dashboard";

import "./base/Providers/ConfirmationDialogsProvider";
import "./base/Providers/ToastsProvider";
import RecipesList from "./pages/recipes/RecipesList";

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
