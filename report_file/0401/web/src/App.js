import React from 'react';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Main_name from './comp/Main_name';
import Main_img from './comp/Main_img';
import Main_birth from './comp/Main_birth';
import Main from './comp/Main';

function App() {
  return (
    <div>
      <Header />
      <Main_img/>
      <Main_name name="이이슬" female />
      <Main_birth year="2003" month="09" day="06"/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;