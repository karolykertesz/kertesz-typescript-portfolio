import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./helpers/Route";
import { RoutesConfig } from "./interfaces/routes.interface";
import { Navigation } from "./components/Navigation";
import { Works } from "./pages/Works";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Navigation />
          {/* {routes.map((route: RoutesConfig) => (
            <div key={route.key}>
              <Route
                exact={true}
                path={route.path}
                component={route.component}
              />
            </div>
          ))} */}

          <Route component={Works} path="/projects" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
