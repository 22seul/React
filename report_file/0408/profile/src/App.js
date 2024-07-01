import React from 'react';
import Header from './code/Header'; import Timer from './code/Timer';
import Main_img from './code/Main_img';
import Main_name from './code/Name'; import Main_birth from './code/BirthInfo';
import Main_content from './code/MajorInfo'; import SkillBar from './code/SkillBar';

function App() {
  return (
    <div>
      <Header />
      <Main_img/>
      <Main_name name="이이슬" en_name="Lee i seul" />
      <Main_birth year="2003" month="09" day="06"/>
      <Main_content major="소프트웨어학과" number="2022764034"/>
      <Timer/>
      <SkillBar/>
    </div>
  );
}
export default App;
