import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  TesterMainScreen,
  TesterProfileScreen,
  TesterServiceDetailScreen,
} from "./pages";

const Rounter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={TesterProfileScreen} />
        <Route exact path="/use" component={TesterMainScreen} />
        <Route exact path="/use/test1" component={TesterServiceDetailScreen} />
        <Route exact path="/use/Test2" component={TesterServiceDetailScreen} />
      </Switch>
    </Router>
  );
};

export default Rounter;
