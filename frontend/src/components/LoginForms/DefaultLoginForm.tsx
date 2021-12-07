import axios from 'axios';
import passport from 'passport';

const DefaultLoginForm: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as Element;
    console.log('id:', target.username.value, 'pw:', target.password.value);
    axios.post(
      '/login',
      passport.authenticate('local', {
        successRedirect: '/pro',
        failureRedirect: '/',
        failureFlash: true,
      }),
    );
  };

  return (
    <form onSubmit={handleLogin} method="post">
      <div>
        <label>Username : </label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="로그인" />
      </div>
    </form>
  );
};

export default DefaultLoginForm;
