import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/HomePage";
import DarAula from '../pages/DarAula';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dar_aula" exact component={DarAula} />
    </Switch>
  );
};

export default Routes;
