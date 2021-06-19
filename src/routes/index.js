import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
