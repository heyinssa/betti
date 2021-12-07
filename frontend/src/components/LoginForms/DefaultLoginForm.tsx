import axios from 'axios';
import passport from 'passport';

const DefaultLoginForm: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as Element;
    console.log(target);
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
        <input id="name" type="text" name="username" />
      </div>
      <div>
        <label>Password : </label>
        <input id="password" type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="로그인" />
      </div>
    </form>
  );
};

export default DefaultLoginForm;
