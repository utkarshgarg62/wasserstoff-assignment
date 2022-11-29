import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Topics from "./components/Topics"
import Topic from "./components/Topic"

import Main from "./components/Main"


import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<LoginPage />}></Route>

          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="topics" element={<Topics />}></Route>
          <Route path="topic" element={<Topic />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);