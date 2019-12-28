import React from 'react';
import Highlight from 'react-highlight';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Projects = () => (
	<ReactCSSTransitionGroup
	transitionName="fade"
	transitionAppear
	transitionAppearTimeout={1000}
	transitionEnter={false}
	transitionLeave={false}
  >
	<Highlight className='javascript hljs'>
Projects.opensource = {`{
   "WTC": "https://github.com/omidnikrah/wtc",
   "React Github": "https://github.com/omidnikrah/react-github",
   "Electron Github": "https://github.com/omidnikrah/electron-github",
	 "Snapp total price extension": "https://github.com/omidnikrah/snapp-total-price-extension",
	 "Football live score extension": "https://github.com/omidnikrah/football-live-score-extension",
	 "Switch Keys To EN with GoLang": "https://github.com/omidnikrah/go-switchKeyToEn",
   "Signal.js": "https://github.com/omidnikrah/signal.js",
}`}
</Highlight>
</ReactCSSTransitionGroup>
);

export default Projects;