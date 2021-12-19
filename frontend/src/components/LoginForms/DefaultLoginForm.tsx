import axios from 'axios';
import passport from 'passport';
import { Button, Form } from 'semantic-ui-react';

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
    <Form onSubmit={handleLogin} method="post">
      <Form.Field>
        <label>Username</label>
        <input placeholder="username" type="text" name="username" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder="password" type="password" name="password" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default DefaultLoginForm;
