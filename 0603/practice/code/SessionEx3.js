import React from 'react';
import Session from 'react-session-api';
function App(){
    // session 저장하는 함수 정의
    function save(){
        let jsonData = [ { "name":"홍길동", "age":24}, { "name":"성춘향", "age":16} ];
        Session.set("jsonData", jsonData); // Session.set("세션명", 값);
    }

    // session 불러오는 함수 정의
    function load(){
        let jsonData = Session.get("jsonData");
        // alert(JSON.stringify(jsonData));
        alert(jsonData[1].age); // 16
    }
    return(
        <div>
            <h3>session test3</h3>
            <button onClick={() => save()}>session 저장</button>
            <button onClick={() => load()}>session 읽기</button>
        </div>
    )
}
export default App;