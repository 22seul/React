import React, { useState, useEffect } from 'react';

function Timer() {
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true); // 초기값을 true로 설정하여 처음에 시간이 표시되도록...

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const toggleVisibility = () => { // 현재 시간을 표시할지 여부를 제어하는 함수를 추가.
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <div style={{position : "fixed", top: "3vw", right:"10vw", fontSize: "2vw"}}>{date.toLocaleString('ko-KR')}</div>} {/* isVisible 상태에 따라 현재 시간을 표시하거나 숨김. */}
      <button style={{position : "fixed", top: "3.3vw", right:"1vw", fontSize:"1.5vw", padding: "0px"}} onClick={toggleVisibility}>{isVisible ? '날짜 숨기기' : '날짜 표시'}</button> {/* isVisible 상태에 따라 버튼의 텍스트를 변경. */}
    </div>
  );
}

export default Timer;
