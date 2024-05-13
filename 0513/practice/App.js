import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import styled, { ThemeProvider } from 'styled-components';
import ButtonStyle from './components/ButtonStyle';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;
const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
    <div className="App">
      <h3>실습1 : sass 버튼 만들기</h3>
      <div className="buttons">
        <Button size="large" onClick={() => console.log('클릭됐다!')}>BUTTON</Button>
        <Button size="large">BUTTON</Button>
        <Button size="large">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button size="large">BUTTON</Button>
        <Button size="large">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button size="large">BUTTON</Button>
        <Button size="large">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>BUTTON</Button>
        <Button size="large" color="blue" outline>BUTTON</Button>
        <Button size="large" color="blue" outline>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>BUTTON</Button>
        <Button size="large" fullWidth>BUTTON</Button>
        <Button size="large" fullWidth>BUTTON</Button>
      </div>

      <hr/>
      <h3>실습2 : CSS 모듈 체크박스</h3>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? 'true' : 'false'}
      </p>

      <hr/>
      <h3>실습3 : styled-components 버튼</h3>
      <ThemeProvider
        theme={{
        palette: {
        blue: '#228be6',
        gray: '#495057',
        pink: '#f06595'
        }
        }}>
        <ButtonGroup>
            <ButtonStyle size="large">BUTTON</ButtonStyle>
            <ButtonStyle>BUTTON</ButtonStyle>
            <ButtonStyle size="small">BUTTON</ButtonStyle>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonStyle color="gray" size="large"> BUTTON</ButtonStyle>
            <ButtonStyle color="gray">BUTTON</ButtonStyle>
            <ButtonStyle color="gray" size="small"> BUTTON</ButtonStyle>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonStyle color="pink" size="large">BUTTON</ButtonStyle>
            <ButtonStyle color="pink">BUTTON</ButtonStyle>
            <ButtonStyle color="pink" size="small">BUTTON</ButtonStyle>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonStyle size="large" outline>BUTTON</ButtonStyle>
            <ButtonStyle color="gray" outline>BUTTON</ButtonStyle>
            <ButtonStyle color="pink" size="small" outline>BUTTON</ButtonStyle>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonStyle size="large" fullWidth>BUTTON</ButtonStyle>
            <ButtonStyle size="large" color="gray" fullWidth>BUTTON</ButtonStyle>
            <ButtonStyle size="large" color="pink" fullWidth>BUTTON</ButtonStyle>
          </ButtonGroup>
      </ThemeProvider>
    </div>
  );
}

export default App;