import React from 'react';

function Header(props) {
    return (
        <div>
            <header style={{position : "fixed", left : "1vw", fontSize : "1.5vw"}}>
                <h1> Report - 자기소개 웹 페이지 </h1>
                <hr style={{position : "fixed", top : "6vw", left : "0",width : "100vw", border : '1.5px solid'}}/>
            </header>
        </div>
    );
}

export default Header;
