import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./helpers/Route";
import { RoutesConfig } from "./interfaces/routes.interface";
import { useAppSelector } from "./utils/redux/hooks";

function App() {
  const value = useAppSelector((state) => state.model.isOpen);
  return (
    <div className={!value ? "main" : "main fade-out"}>
      <Router>
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
