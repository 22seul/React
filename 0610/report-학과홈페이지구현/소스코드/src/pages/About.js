import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <>
            <div className="about-container">
                <h1 className="about-header">학과 소개</h1>
                <div className="about-container2">
                    <img src="/소프트웨어 로고.png" alt="소프트웨어 로고" />
                    <div>
                        <p className="about-title">
                            소프트웨어학과는 <a className="emphasis">4차 산업혁명</a>을 이끌 
                            <a className="emphasis">미래 IT 분야의 핵심 인재 양성</a>을 목표로 합니다.
                        </p>
                        <p className = "about-details">
                            소프트웨어학과는 Computer Science 분야의 기반 지식을 바탕으로 기업에서 요구하는 IT 기술을 배양하여
                            <br/> 창의적이고 복합적 문제해결능력을 갖춘 미래형 소프트웨어 인재를 양성하기 위해 설립되었습니다.
                            <br/><br/>
                            본 학과의 교육과정에서는 이산수학, 전산수학, 컴퓨터구조, 운영체제, 자료구조, 알고리즘, 데이터베이스, 
                            <br/> 컴퓨터네트워크 등의 기반 지식을 습득하고, 프로그래밍 실습 교육과 프로젝트 수행 교육 등을 통해
                            <br/> 소프트웨어 설계 및 구현 능력을 배양하며, 4차 산업혁명에 준비된 인재 양성을 위해
                            <br/> 머신러닝(machine learning), 인공지능 및 병렬 컴퓨팅 교육 등을 실시합니다.
                            <br/><br/>
                            본 학과 졸업생들은 웹 및 앱 개발자, 게임 개발자, 서버/네트워크/데이터베이스/보완관리자, 전산직 공무원
                            <br/> 프리랜서 프로그래머 등으로 활동 할 수 있으며, IT 분야 대기업, 중견 및 중소 업체와 금융권 및
                            <br/> 일반 기업체 IT 부서, 전산학 관련 국내외 대학원 등으로도 진출할 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-sections">
                <div/>
                <NavLink to="/goals" className="about-link">
                    교육 목표
                    <div className = "allow">→</div>
                </NavLink>
                <NavLink to="/major" className="about-link">
                    전공 역량
                    <div className = "allow">→</div>
                </NavLink>
                <NavLink to="/history" className="about-link">
                    학과 연혁 
                    <div className = "allow">→</div>
                </NavLink>
            </div>
        </>
    );
};

export default About;
