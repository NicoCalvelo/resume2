import "./index.css";
import React from "react";
import Home from "./pages/home/Home";
import ReactDOM from "react-dom/client";
import "./base/Providers/ToastsProvider";
import Dashboard from "./pages/recipes/Dashboard";
import RecipesList from "./pages/recipes/RecipesList";
import "./base/Providers/ConfirmationDialogsProvider";
import HistoryProvider from "./providers/HistoryProvider";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { sendMessageToDiscord } from "./helpers/DiscordHelper";
import SalonSpace from "./pages/salon-space/salon_space";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter history={HistoryProvider}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/recipes" element={<Dashboard />} />
        <Route path="/recipes/:id" element={<RecipesList />} />
        {/* <Route path="/salon-space" element={<SalonSpace />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

if (!window.location.origin.includes("localhost")) {
  const visitNumber = localStorage.getItem("visitNumber");
  localStorage.setItem("visitNumber", visitNumber ? parseInt(visitNumber) + 1 : 1);

  sendMessageToDiscord(
    visitNumber ? "Vist number " + visitNumber + " on the website !" : "New visitor on the website!"
  ).then((response) => {
    if (response.ok) {
      console.log("Message sent to Discord");
    } else {
      console.error("Error sending message to Discord");
    }
  });
}
