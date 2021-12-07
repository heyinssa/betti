import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProviderMainPage, ProviderMakeTest } from './pages';

const Rounter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pro" component={ProviderMainPage} />
        <Route exact path="/pro/makeTest" component={ProviderMakeTest} />
      </Switch>
    </Router>
  );
};

export default Rounter;
