import React from 'react';
import { Route,Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';



export default (
    <div>
        <Header />
		
		<Switch>
			<Route path="/About" component={About} />
			<Route path="/Skills" component={Skills} />
			<Route path="/Projects" component={Projects} />	
		</Switch>
    </div>
);
