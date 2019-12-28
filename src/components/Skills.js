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
Skills.tech = {`["Javascript", "React", "NodeJS", "TypeScript", "VueJS", "JQuery", "PHP", "Laravel", "HTML5", "CSS3"]`}
<br/>
Skills.other = {`["Webpack", "GulpJs", "Sass", "Less", "Babel", "Styled Components", "Flow"]`}
</Highlight>
</ReactCSSTransitionGroup>
);


export default Skills;