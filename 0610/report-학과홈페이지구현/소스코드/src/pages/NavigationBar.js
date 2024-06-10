import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div >
		<header className="navigation-bar">
			<h1 className="logo">
				<img src="/경성대 로고.svg" alt="경성대 로고" />
				<NavLink to="/home" activeClassName="active-link">KYUNGSUNG SOFTWARE</NavLink>
			</h1>
			<nav>
				<ul className="nav-links">
					<li>
						<NavLink to="/about" activeClassName="active-link">학과 소개</NavLink>
					</li>
					<li>
						<NavLink to="/professor" activeClassName="active-link">교수진 소개</NavLink>
					</li>
					<li>
						<NavLink to="/curriculums/2024" activeClassName="active-link">교과 과정</NavLink>
					</li>
				</ul>
			</nav>
		</header>
    	<main>
        	<Outlet />
    	</main>
    	<footer className="bottom">
          <div className="bottom-content">
            <p>경성대학교 (48434) 부산 남구 수영로 309 8호관 608호</p>
            <p>TEL : 051-663-5140 FAX : 051- 사업자등록번호 : 617-82-00347</p>
          </div>
    	</footer>
    </div>
  );
};

export default NavigationBar;
