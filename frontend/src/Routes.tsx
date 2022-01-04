import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router basename={process.env.REACT_APP_BASE}>
        <Routes>
          <Route path="/" element={<LoginPage />} /> //로그인 페이지로 변경
          <Route path="/pro" element={<ProviderMainPage />} />
          <Route path="/pro/make" element={<ProviderMakeTestPage />} />
          <Route path="/pro/:team/:test" element={<ProviderTestPage />} />
          <Route path="/profile" element={<TesterProfilePage />} />
          <Route path="/use" element={<TesterMainPage />} />
          <Route path="/use/test1" element={<TesterServiceDetailPage />} />
          <Route
            path="/use/test1/feedback"
            element={<TesterWriteFeedbackPage />}
          />
          <Route path="/use/Test2" element={<TesterServiceDetailPage />} />
          <Route
            path="/use/test2/feedback"
            element={<TesterWriteFeedbackPage />}
          />
          <Route path="/" element={errorPage} />
        </Routes>
        {/* {!state.isLogin && <Redirect to="/"/>} */}
      </Router>
    </>
  );
};

export default Rounter;
