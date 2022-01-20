import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import React from 'react';

const ProviderTestDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const curPath = location.pathname;
  const parseTeam = curPath.substr(5, 1);
  const parseTest = curPath.substr(7, 1);

  console.log(parseInt(parseTeam));
  console.log(isNaN(parseInt(parseTeam)));
  if (isNaN(parseInt(parseTeam)) || isNaN(parseInt(parseTest))) {
    navigate('/error');
  }
  // 와일드카드로 url을 받기에 형식이 같으면 전부 유효한 페이지로 인식하고 라우팅됨.
  // 문자일 경우는 parseInt로 구분 가능.
  // 숫자일 경우에는 해당 숫자가 존재하는지, 하나하나 대조해봐야함.
  // 테스트를 한 자리 수 (9개)까지 만들 수 있게 제한하면 pathname의 길이로 파싱이 가능해짐.
  const state = useSelector((state: RootState) => state.Provider);
  const { curVersion } = state.stateData;
  console.log(curVersion);

  return (
    <>
      {curVersion &&
        (
          <>
            <div>팀 이름 : {curVersion.name}</div>
            <div>팀 정보 : {curVersion.intro}</div>
            <div>팀 링크 : {curVersion.link}</div>
            <div>팀 플랫폼 : {curVersion.platform}</div>
            <div>
              {curVersion.members.map(e => {
                return <text> {e} </text>;
              })}
            </div>
            <div>
              {curVersion.startDay} ~ {curVersion.endDay}
            </div>
          </>
        )
      }
    </>
  );
};

export default ProviderTestDetailPage;
