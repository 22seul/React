import React from 'react';

function Main({year,month,day}) {
    return (
        <div style={{ position: 'fixed', left: '30vw', fontSize: '2.5vw', top: '18.5vw' }}>
         출생 : {year}년 {month}월 {day}일
        </div>
    );
}

export default Main;