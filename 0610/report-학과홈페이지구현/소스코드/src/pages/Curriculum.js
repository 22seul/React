import React from 'react';
import { useParams } from 'react-router-dom';
import './Curriculums.css';

const Curriculum = () => {
    const { id } = useParams();
    return (
        <div className='curriculum'>
            <img src={`/${id}.png`} alt={`교과 과정 ${id}`} className='curriculum-img'/>
        </div>
    );
};

export default Curriculum;
