import React from 'react';
import Session from 'react-session-api';
function App(){
    // session 저장하는 함수 정의
    function save(){
        let member = { "id":"abc", "pw":"123"};
        Session.set("member", member); // Session.set("세션명", 값);
    }

    // session 불러오는 함수 정의
    function load(){
        let member = Session.get("member");
        // alert(member);
        alert(JSON.stringify(member));
    }
    return(
        <div>
            <h3>session test2</h3>
            <button onClick={() => save()}>session 저장</button>
            <button onClick={() => load()}>session 읽기</button>
        </div>
    )
}
export default App;