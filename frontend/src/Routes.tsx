import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import { ProviderMainPage, ProviderMakeTestPage, LoginPage } from './pages';


const Test = () => {
  return (
      <div className="container">
          사용자 페이지!
      <Link to="/use/test1">
              <button>첫번째 페이지!</button>
          </Link>
          <Link to="/use/test2">
              <button>두번째 페이지!</button>
          </Link>
      </div>
  );
};
const Test1 = () => {
  return <div className="container">첫번째!</div>;
};
const Test2 = () => {
  return <div className="container">두번째!</div>;
};


const Rounter = () => {
  const state = useSelector((state: RootState) => state.Login);

  return (
   <>
   <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} /> //로그인 페이지로 변경
        <Route exact path="/pro" component={ProviderMainPage} />
        <Route exact path="/pro/makeTest" component={ProviderMakeTestPage} />
        <Route exact path="/use" component={Test} />
        <Route exact path="/use/test1" component={Test1} />
        <Route exact path="/use/Test2" component={Test2} />
      </Switch>
      {!state.isLogin && <Redirect to="/"/>}

    </Router>
 
</>
  );
};

export default Rounter;
