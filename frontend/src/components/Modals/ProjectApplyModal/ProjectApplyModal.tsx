
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ProjectApplyModal.scss';

const ProjectApplyModal = () => {
  const [availableDate, setAvailableDate] = useState<Array<Date | null>>([]);

  const handleOnChangeDate = (
    date: Date | null,
    e: React.SyntheticEvent<Event>,
  ) => {
    e.preventDefault;
    console.log(date);
    setAvailableDate([...availableDate, date]);
    console.log(availableDate);
  };

  const handleOnDeleteDate = (
    i: number,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    e.preventDefault;
    console.log(e);
    setAvailableDate([
      ...availableDate.slice(0, i),
      ...availableDate.slice(i + 1),
    ]);
  };

  const formatString = (date: Date | null) => {
    const monthsKor = [
      '1월 ',
      '2월 ',
      '3월 ',
      '4월 ',
      '5월 ',
      '6월 ',
      '7월 ',
      '8월 ',
      '9월 ',
      '10월 ',
      '11월 ',
      '12월 ',
    ];
    const days = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];

    const year = date ? date.getFullYear() : '';
    const month = date ? monthsKor[date.getMonth()] : '';
    const day = date ? date.getDate() : '';
    const dayName = date ? days[date.getDay()] : '';
    return [year, '년 ', month, day, '일 ', dayName].join('');
  };

  return (
    <>
      <h1>서비스 베타테스트 신청하기</h1>
      <h2>날짜 선택</h2>
      <DatePicker
        selected={new Date()}
        minDate={new Date()}
        showPopperArrow={false}
        onChange={handleOnChangeDate}
        excludeDates={availableDate as Date[]}
        inline
      />
      <div className="date-container">
        {availableDate.map((d, index) => (
          <>
            <div className="date-button">
              {formatString(d)}
              <i
                className="close icon"
                onClick={e => {
                  handleOnDeleteDate(index, e);
                }}
              ></i>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ProjectApplyModal;
