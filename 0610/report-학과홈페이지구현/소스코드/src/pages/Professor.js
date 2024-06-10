import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Professor.css';

const Professor = () => {
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
            <div className="professor-container">
                <h1 className="professor-header">교수진 소개</h1>
                <div className="professor-container2">
                    <table className="professor-table">
                        <thead>
                            <tr>
                                <th>성명</th>
                                <th>학부(과)</th>
                                <th>E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>양태천 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>tcyang@ks.ac.kr</td>
                            </tr>
                            <tr>
                                <td>성락운 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>nuseong@ks.ac.kr</td>
                            </tr>
                            <tr>
                                <td>홍석희 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>shong@@ks.ac.kr</td>
                            </tr>
                            <tr>
                                <td>지상문 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>smchiks@ks.ac.kr</td>
                            </tr>
                            <tr>
                                <td>강인수 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>dbaisk@ks.ac.kr</td>
                            </tr>
                            <tr>
                                <td>김주현 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>isadora@naver.com</td>
                            </tr>
                            <tr>
                                <td>정문주 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>mjlunar@ks.ac.kr</td>
                            </tr>
                            <tr>
                                <td>최동한 교수님</td>
                                <td>소프트웨어학과</td>
                                <td>livedong@hanmail.net</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 고정 (홈, 이전 이동) */}
            <div className="professor-sections">
                <div/>
                <div onClick={gohome} className="professor-link">
                    홈으로
                    <div className = "allow">→</div>
                </div>
                <div onClick={goBack} className="professor-link">
                    뒤로가기
                    <div className = "allow">→</div>
                </div>
            </div>
        </>
    );
};

export default Professor;
