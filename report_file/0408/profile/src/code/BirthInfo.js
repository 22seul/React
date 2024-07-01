import React from 'react';

function Main({year,month,day}) {
    return (
        <div style={{ position: 'fixed', left: '23vw', top: '13vw', fontSize:"2vw"}}>
            <div>출생 : {year}년 {month}월 {day}일</div>
        </div>
    );
}

export default Main;
