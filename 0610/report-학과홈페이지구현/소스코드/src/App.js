import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Goals from './pages/Goals';
import Major from './pages/Major';
import Professor from './pages/Professor';
import History from './pages/History';
import Curriculums from './pages/Curriculums';
import Curriculum from './pages/Curriculum';
import Home from './pages/Home';
import NavigationBar from './pages/NavigationBar';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<NavigationBar />}>
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="goals" element={<Goals />} />
					<Route path="major" element={<Major />} />
					<Route path="professor" element={<Professor />} />
					<Route path="history" element={<History />} />
					<Route path="curriculums" element={<Curriculums />}>
						<Route path=":id" element={<Curriculum />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
