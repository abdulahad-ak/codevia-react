import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Greeting from "./components/Greeting";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Greeting />
    <HomePage />
    <Footer />
  </StrictMode>
);