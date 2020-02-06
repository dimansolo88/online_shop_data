import React from "react";
import Particles from "react-particles-js";
import Header from "./blocks/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/main/components/Main";
import Catalog from "./pages/catalog/components/Catalog";
import Contact from "./pages/Contact/Contact";
import Footer from "./blocks/footer/Footer";

export default () => {
  const particle = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Particles className="partikless" params={particle} />
          <Header />
          <Switch>
            <Route path="/" exact render={() => <Main />} />
            <Route path="/catalog/:id?" render={() => <Catalog />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
