import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import './Curriculums.css';
import Curriculum from './Curriculum';

const Curriculums = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    
    const gohome = () => {
        navigate('/home');
    };

    // 모든 년도 배열
    const allYears = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
    // 현재 보이는 년도 배열
    const [visibleYears, setVisibleYears] = useState(allYears.slice(0, 5)); // 수정된 부분

    const handleLeftArrowClick = () => {
        // 최신 년도들로 이동
        setVisibleYears(allYears.slice(0, 5));
    };

    const handleRightArrowClick = () => {
        // 이전 년도들로 이동
        setVisibleYears(allYears.slice(5, 10));
    };

    return (
        <>
            <div className="curriculums-container">
                <h1 className="curriculums-header">교과 과정</h1>
                <div className="curriculums-container2">
                    <button onClick={handleLeftArrowClick} className="arrow left">◀</button>
                    <ul className="year-list">
                        {visibleYears.map(year => (
                            <CurriculumItem key={year} id={year}/>
                        ))}
                    </ul>
                    <button onClick={handleRightArrowClick} className="arrow right">▶</button>
                </div>
                <Curriculum/>
            </div>

            {/* 고정 (홈, 이전 이동) */}
            <div className="curriculums-sections">
                <div/>
                <div onClick={gohome} className="curriculums-link">
                    홈으로
                    <div className="allow">→</div>
                </div>
                <div onClick={goBack} className="curriculums-link">
                    뒤로가기
                    <div className="allow">→</div>
                </div>
            </div>
        </>
    );
};

const CurriculumItem = ({ id }) => {
    return (
        <li>
            <NavLink
                to={`/curriculums/${id}`}
                className={({ isActive }) => isActive ? "year active" : "year"}
            >
                {id}
            </NavLink>
        </li>
    );
};

export default Curriculums;
