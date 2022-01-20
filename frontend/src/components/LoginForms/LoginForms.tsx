
import DefaultLoginForm from './DefaultLoginForm';
import GithubLoginForm from './GithubLoginForm';
import GoogleLoginForm from './GoogleLoginForm';

const LoginForms: React.FC = () => {
  return (
    <div className="login-forms">
      <DefaultLoginForm />
      <GoogleLoginForm />
      <GithubLoginForm />
    </div>
  );
};

export default LoginForms;
