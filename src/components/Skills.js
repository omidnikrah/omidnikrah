import React from 'react';
import Highlight from 'react-highlight';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Skills = () => (
	<ReactCSSTransitionGroup
	transitionName="fade"
	transitionAppear
	transitionAppearTimeout={1000}
	transitionEnter={false}
	transitionLeave={false}
  >
<Highlight className='javascript hljs'>
Skills.tech = {`["Javascript","React","TypeScript","JQuery","PHP","HTML5","CSS3"]`}
<br/>
Skills.other = {`["Webpack","GulpJs","Sass","Less","Babel"]`}
</Highlight>
</ReactCSSTransitionGroup>
);


export default Skills;