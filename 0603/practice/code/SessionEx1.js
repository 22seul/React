import React from 'react';
import Session from 'react-session-api';
function App(){
    // session 저장하는 함수 정의
    function save(){
        let count = 1024;
        Session.set("counter", count); // Session.set("세션명", 값);
    }

    // session 불러오는 함수 정의
    function load(){
        let c = Session.get("counter");
        alert(c); // 1024
    }
    return(
        <div>
            <h3>session test1</h3>
            <button onClick={() => save()}>session 저장</button>
            <button onClick={() => load()}>session 읽기</button>
        </div>
    )
}
export default App;