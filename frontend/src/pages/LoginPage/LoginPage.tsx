import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../modules/Login';

import { LoginForms } from '../../components';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(toggleLogin());
  };
  return (
    <>
      <div className="page-login">
        <LoginForms />
      </div>
      <Link to="pro">
        <div>to pro</div>
      </Link>
      <div onClick={handleLogin}>로그인하기</div>

      <Link to="use">
        <div>to use</div>
      </Link>
    </>
  );
};

export default LoginPage;
