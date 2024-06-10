import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Major.css';

const Major = () => {
    const navigate = useNavigate();
   
    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    };
    
    const gohome = () => {
        // articles 경로로 이동
        navigate('/home');
    };

    return (
        <>
            <div className="major-container">
                <h1 className="major-header">전공 역량</h1>
                <div className="major-container2">
                    <table className="major-table">
                        <thead>
                            <tr>
                                <th>전공역량</th>
                                <th>전공역량정의</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>학문 고유 지식</td>
                                <td>전공을 이수하기 위해 필요한 핵심 기반 지식</td>
                            </tr>
                            <tr>
                                <td>정보기술전략·계획</td>
                                <td>현시대 정보기술 및 그 동작 환경을 이해하고 새로운 소프트웨어를 기획하는 능력</td>
                            </tr>
                            <tr>
                                <td>정보기술개발</td>
                                <td>현시대 정보기술 및 그 동작 환경에서 소프트웨어를 개발하는 능력</td>
                            </tr>
                            <tr>
                                <td>정보기술운영</td>
                                <td>현시대 정보기술 및 그 동장 환경에서 소프트웨어 및 컴퓨터시스템을 운영하는 능력</td>
                            </tr>
                            <tr>
                                <td>정보기술관리</td>
                                <td>분석, 설계, 구현, 테스트 등 소프트웨어 프로젝트 진행의 각 단계를 수행하고 관리하는 능력</td>
                            </tr>
                            <tr>
                                <td>문재해결능력</td>
                                <td>현시대 정보기술 및 그 동작 환경에서 실세계 문제 해결을 위한 논리적이고 창의적 방법을 고안하고 실현하는 능력</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 고정 (홈, 이전 이동) */}
            <div className="major-sections">
                <div/>
                <div onClick={gohome} className="major-link">
                    홈으로
                    <div className = "allow">→</div>
                </div>
                <div onClick={goBack} className="major-link">
                    뒤로가기
                    <div className = "allow">→</div>
                </div>
            </div>
        </>
    );
};

export default Major;
