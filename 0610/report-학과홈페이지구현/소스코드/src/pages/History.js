import React from 'react';
import { useNavigate } from 'react-router-dom';
import './History.css';

const History = () => {
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
            <div className="history-container">
                <h1 className="history-header">학과 연혁</h1>
                <div className="history-container2">
                    <div/>
                    <img src="/학과 연혁.png" alt="학과 연혁" className="history-img"/>
                </div>
            </div>

            {/* 고정 (홈, 이전 이동) */}
            <div className="history-sections">
                <div/>
                <div onClick={gohome} className="history-link">
                    홈으로
                    <div className = "allow">→</div>
                </div>
                <div onClick={goBack} className="history-link">
                    뒤로가기
                    <div className = "allow">→</div>
                </div>
            </div>
        </>
    );
};

export default History;
