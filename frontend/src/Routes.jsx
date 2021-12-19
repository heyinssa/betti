import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  TesterMainPage,
  TesterProfilePage,
  TesterServiceDetailPage,
  TesterWriteFeedbackPage,
} from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={TesterProfilePage} />
        <Route exact path="/use" component={TesterMainPage} />
        <Route exact path="/use/test1" component={TesterServiceDetailPage} />
        <Route
          exact
          path="/use/test1/feedback"
          component={TesterWriteFeedbackPage}
        />
        <Route exact path="/use/Test2" component={TesterServiceDetailPage} />
        <Route
          exact
          path="/use/test2/feedback"
          component={TesterWriteFeedbackPage}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
