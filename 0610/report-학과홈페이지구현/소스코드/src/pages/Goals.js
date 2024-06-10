import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Goals.css';

const Goals = () => {
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
            <div className="goals-container">
                <h1 className="goals-header">교육 목표</h1>
                <div className="goals-container2">
                    <div className="goals-container3">
                        <p className="goals-title">
                           교육 목표
                        </p>
                        <p className = "goals-details">
                            • 수요자 중심의 실무형 소프트웨어 교육
                            <br/> • 창의적이고 복합적 문제해결능력을 갖춘 글로벌 소프트웨어 인재 양성
                            <br/> • 차세대 IT 기술을 융합할 팀워크와 리더십을 갖춘 미래형 인재 양성
                        </p>
                    </div>
                    <p/>
                    <div className="goals-container3">
                        <p className="goals-title">
                           인재상
                        </p>
                        <div className = "goals-type">
                            <div className = "goals-typedetails">
                                창의적이고 복합적 문제해결능력을 갖춘
                                <br/> 글로벌 소프트웨어 실무형 인재
                            </div>
                            <div style={{ fontSize: '25px', marginTop: '20px',paddingTop: '20px', }}>+</div>
                            <div className = "goals-typedetails">
                                차세대 IT 기술을 융합할 팀워크와
                                <br/>리더십을 갖춘 미래 인재
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="goals-sections">
                <div/>
                <div onClick={gohome} className="goals-link">
                    홈으로
                    <div className = "allow">→</div>
                </div>
                <div onClick={goBack} className="goals-link">
                    뒤로가기
                    <div className = "allow">→</div>
                </div>
            </div>
        </>
    );
};

export default Goals;
