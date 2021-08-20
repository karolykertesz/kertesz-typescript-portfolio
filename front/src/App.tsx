import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./helpers/Route";
import { RoutesConfig } from "./interfaces/routes.interface";
import { Navigation } from "./components/Navigation";
import { Works } from "./pages/Works";
function App() {
  return (
    <div className="main">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          {routes.map((route: RoutesConfig) => (
            <Route exact={true} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
