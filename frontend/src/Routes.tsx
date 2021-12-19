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
  ProviderTestPage,
} from './pages';

const errorPage = () => {
  return <div>error!</div>;
};

const Rounter = () => {
  const state = useSelector((state: RootState) => state.Login);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} /> //로그인 페이지로 변경
          <Route exact path="/pro" component={ProviderMainPage} />
          <Route exact path="/pro/make" component={ProviderMakeTestPage} />
          <Route exact path="/pro/:team/:test" component={ProviderTestPage} />
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
          <Route path="/" component={errorPage} />
        </Switch>
        {/* {!state.isLogin && <Redirect to="/"/>} */}
      </Router>
    </>
  );
};

export default Rounter;
