import React from 'react';
import Profile from 'components/Profile';
import MealStat from 'components/MealStat';
import MealLog from 'components/MealLog';
import Bann from 'components/Bann';

import './MyPage.scss';

const MyPage = () => {
  return (
    <div className="mypage">
      <></>
      <div>
        <Profile />

        <MealStat />

        <MealLog />

        <Bann />
      </div>
      <></>
    </div>
  );
};

export default MyPage;
