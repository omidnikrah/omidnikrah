import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { HashRouter as Router, Route } from 'react-router-dom';

import Routes from './Routes';
import './styles/main.scss';

const App = () => (
	<div>
		<Header />
		<About />
		<Skills />
		<Projects />
	</div>
);


render(
	<Router children={Routes}></Router>,
	document.getElementById('app')
);