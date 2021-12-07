import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import { toggleLogin } from "./modules/Login"
import { ProviderMainPage, ProviderMakeTestPage } from './pages';

const Rounter = () => {
  const state = useSelector((state: RootState) => state.Login);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(toggleLogin());
  }
  return (
   <>
   <Router>
      <Switch>
        <Route exact path="/pro" component={ProviderMainPage} />
        <Route exact path="/pro/makeTest" component={ProviderMakeTestPage} />
      </Switch>
      {!state.isLogin && <Redirect to="/"/>}

    </Router>
        <div onClick={handleLogin}>로그인하기</div>
</>
  );
};

export default Rounter;
