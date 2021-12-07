import axios from 'axios';
import passport from 'passport';

const DefaultLoginForm: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('id:', e.target.username.value, 'pw:', e.target.password.value);
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
