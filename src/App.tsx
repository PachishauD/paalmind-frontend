import React from "react";
import "./App.css";

import { Root } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import store from "core/store/store";
import translation from "./assets/i18n/en.json";
import Home from "./pages/home/Home";
import Admin from "pages/admin/Admin";

const App = () => {
  return (
    <Provider store={store}>
      <IntlProvider messages={translation} locale="en">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};

export default App;
