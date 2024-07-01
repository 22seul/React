import React from 'react';

function Profile() {
  return (
    <>
      <p style={{ fontSize: '3vw' }}>자기소개 - JSX</p>
      <div style={{ display: 'inline-grid', gridTemplateColumns: '100vw 30vw 70vw' }}>
        <img src='img/사람아이콘.png' alt="프로필 사진" style={{ width: '30vw' }} />
        <div style={{ position: 'fixed', left: '30vw', fontSize: '2.5vw', top: '17vw' }}>
          이름 : 이이슬<br />
          출생 : 2003년 09월 06일  (만 20세)<br />
          학과 : 소프트웨어학과<br />
          학번 : 2022764034<br />
          사용 언어 : HTML, CSS, JavaScript, Python, C, Java, C++<br />
        </div>
      </div>
    </>
  );
}

export default Profile;
