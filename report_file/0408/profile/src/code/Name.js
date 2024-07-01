import React from 'react';
import PropTypes from 'prop-types'

function Main({name,en_name}) {
    return (
        <div style={{ position: 'fixed', left: '23vw', fontSize: '2vw', top: '10vw' }}>
         <div>이름 : {name} ({en_name})</div>
        </div>
    );
}
//프로퍼티 타입 지정
Main.propTypes = {
    name: PropTypes.string
}
Main.propTypes = {
    en_name: PropTypes.string
}
export default Main;
