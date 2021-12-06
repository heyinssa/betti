import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProviderMain, MakeTest } from './pages';

const MyPage = () => {
  return <div className="container">mypage</div>;
};

const Rounter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pro" component={ProviderMain} />
        <Route exact path="/pro/makeTest" component={MakeTest} />
        <Route exact path="/pro/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
};

export default Rounter;
