import React from 'react';

const DefaultLoginForm: React.FC = () => {
  return (
    <form action="/login" method="post">
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
