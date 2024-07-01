import React, { Component } from 'react';

export default class SkillBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      skills: {
        'HTML': 40,
        'CSS': 30,
        'JavaScript': 20,
        'Python': 65,
        'C': 70,
        'JAVA': 75,
        'C++': 80,
      },
    };
  }
  
  render() {
    const { skills } = this.state;
    // 평균 숙련도를 계산합니다.
    const skillEntries = Object.entries(skills);
    const averageProficiency = Math.round(skillEntries.reduce((total, [skill, proficiency]) => total + proficiency, 0) / skillEntries.length);
    // 평균 숙련도를 skills 객체에 추가합니다.
    const skillsWithAverage = {'평균': averageProficiency, ...skills};
    const firstRowSkills = ['평균', 'HTML', 'CSS', 'JavaScript'];
    const secondRowSkills = ['Python', 'C', 'JAVA', 'C++'];

    return (
      <div style={{ position: 'fixed', left: '23vw', top: '22vw', fontSize:"2vw"}}>
        <div>사용언어 : 평균, HTML, CSS, JavaScript, Python, C, JAVA, C++</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '1vw' }}>
          {firstRowSkills.map((skill, index) => (
            <div key={skill} style={{display: 'inline-block', width: '23%'}}>
              <div>{skill}</div>
              <div style={{width: '90%', backgroundColor: '#ddd'}}>
                <div style={{height: '1vw', width: `${skillsWithAverage[skill]}%`, backgroundColor: '#4caf50', position: 'relative'}}>
                  <span style={{position: 'absolute', right: '5px', top: '0', color: 'white', fontSize: '0.8vw'}}>{skillsWithAverage[skill]}%</span> {/* 숙련도를 퍼센트로 표시합니다. */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {secondRowSkills.map((skill, index) => (
            <div key={skill} style={{display: 'inline-block', width: '23%'}}>
              <div>{skill}</div>
              <div style={{width: '90%', backgroundColor: '#ddd'}}>
                <div style={{height: '1vw', width: `${skillsWithAverage[skill]}%`, backgroundColor: '#4caf50', position: 'relative'}}>
                  <span style={{position: 'absolute', right: '5px', top: '0', color: 'white', fontSize: '0.8vw'}}>{skillsWithAverage[skill]}%</span> {/* 숙련도를 퍼센트로 표시합니다. */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }  
}
