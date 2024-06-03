import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
function App() {
    const [id, setId] = useState("");
    
    // 기존의 cookie를 저장
    const [cookies, setCookies] = useCookies(["id"]);
    const changeId = (e) => setId(e.target.value);
    
    // cookid 저장하기
    const cookieSave = () => {
        setCookies("id", id, { path:'/' }); // cookie명, 값, 경로
    }
    // cookie 불러오기
    const cookieLoad = () => {
        alert(cookies.id);
    }
    
    return (
        <div>
            <h3>cookie test</h3>
            <input value={id} onChange={changeId} /><br/>
            <button onClick={cookieSave}>cookie 저장</button>
            <button onClick={cookieLoad}>cookie 불러오기</button>
        </div>
    );
}
export default App;
    