import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Style from "./Style";
import Culture from "./Culture";
import Tech from "./Tech";
import Tech2 from "./Tech2";
import Tech3 from "./Tech3";
import Error from "./Error";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/style" component={Style} />

          <Route exact path="/culture" component={Culture} />

          <Route exact path="/tech" component={Tech} />
          <Route exact path="/tech2" component={Tech2} />
          <Route exact path="/tech3" component={Tech3} />

          <Route path="/home" component={Error} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
