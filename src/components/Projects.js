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
   "React Github": "https://github.com/omidnikrah/react-github",
   "Snapp total price extension": "https://github.com/omidnikrah/snapp-total-price-extension",
   "Signal.js": "https://github.com/omidnikrah/signal.js",
   "Responsive.js": "https://github.com/omidnikrah/responsiveMenu.js"
}`}
</Highlight>
</ReactCSSTransitionGroup>
);

export default Projects;