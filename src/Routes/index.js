import Home from "../pages/Home";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const { useHistory, Switch, Route } = require("react-router");

const Routes = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route>{() => history.push("/")}</Route>
    </Switch>
  );
};

export default Routes;
