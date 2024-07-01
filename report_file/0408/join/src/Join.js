import React, { Component } from 'react';
import './Join.css'; // CSS 파일을 import 합니다.

export default class Join extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      password: '',
      email: '',
      name: '',
      year: '',
      month: '',
      day: '',
      agree: false,
    }
  }

  doChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  doSubmit = (e) => {
    e.preventDefault();
    if (!this.state.agree) {
      alert('개인정보 수집에 동의해주세요.');
      return;
    }
    const j = JSON.stringify(this.state, null, 2);
    window.alert(j);
  }

  render() {
    return (
      <div className="join-page">
        <form onSubmit={this.doSubmit} className="join-form">
          <h1>회원가입</h1>
          <div className="form-group">
            <label>아이디</label>
            <input name='id' type='text' value={this.state.id} onChange={this.doChange} />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input name='password' type='password' value={this.state.password} onChange={this.doChange} />
          </div>
          <div className="form-group">
            <label>이메일</label>
            <input name='email' type='email' value={this.state.email} onChange={this.doChange} />
          </div>
          <div className="form-group">
            <label>이름</label>
            <input name='name' type='text' value={this.state.name} onChange={this.doChange} />
          </div>
          <div className="form-group">
            <label>생년월일</label>
            <input name='year' type='number' value={this.state.year} onChange={this.doChange} placeholder="년(4자)" />
            <input name='month' type='number' value={this.state.month} onChange={this.doChange} placeholder="월" />
            <input name='day' type='number' value={this.state.day} onChange={this.doChange} placeholder="일" />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.doChange} />
              개인정보 수집에 동의합니다.
            </label>
          </div>
          <div className="form-group">
            <input type='submit' value='가입하기' />
          </div>
        </form>
      </div>
    )
  }
}
