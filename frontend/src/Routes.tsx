import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import {
  ProviderMainPage,
  ProviderMakeTestPage,
  LoginPage,
  TesterMainPage,
  TesterProfilePage,
  TesterServiceDetailPage,
  TesterWriteFeedbackPage,
} from './pages';

const Rounter = () => {
  const state = useSelector((state: RootState) => state.Login);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} /> //로그인 페이지로 변경
          <Route exact path="/pro" component={ProviderMainPage} />
          <Route exact path="/pro/makeTest" component={ProviderMakeTestPage} />
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
        {/* {!state.isLogin && <Redirect to="/"/>} */}
      </Router>
    </>
  );
};

export default Rounter;
