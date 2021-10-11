import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Main, Chatting, Login, MyPage } from './src/pages';

const Main = () => {
  return <div className="container">main page</div>;
};

const Search = () => {
  return <div className="container">search page</div>;
};
const MyPage = () => {
  return <div className="container">mypage</div>;
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
