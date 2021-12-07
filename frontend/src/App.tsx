import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProviderRoutes from './ProviderRoutes';
import UserRoutes from './UserRoutes';
// import { ContextProvider } from './contexts/Context';
import './App.scss';
import { LoginPage } from './pages';

const Which = () => {
  return (
    <>
      <Link to="/pro">
        <button>제공자 페이지!</button>
      </Link>
      <Link to="/use">
        <button>사용자 페이지!</button>
      </Link>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} /> //로그인 페이지로 변경
        <Route exact path="/pro" component={ProviderRoutes} />
        <Route exact path="/use" component={UserRoutes} />
      </Switch>
    </Router>
  );
};

export default App;
