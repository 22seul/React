import React from 'react';
import PropTypes from 'prop-types'

function Main({name,female}) {
    const msg = female ? '여자' : '남자';
    return (
        <div style={{ position: 'fixed', left: '30vw', fontSize: '2.5vw', top: '15vw' }}>
         이름 : {name} ({msg})
        </div>
    );
}
//프로퍼티 타입 지정
Main.propTypes = {
    name: PropTypes.string
}
export default Main;