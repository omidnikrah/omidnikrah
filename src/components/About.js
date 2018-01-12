import React from 'react';
import Highlight from 'react-highlight';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const About = () => (
	<ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
	<Highlight className='javascript hljs'>
About.me = {`{
   name: "Omid Nikrah",
   gender: "Male",
   forHire: true,
   tel: "+098 935 389 74 76",
   email: "omidnikrah@gmail.com",			
}`}
	</Highlight>
	</ReactCSSTransitionGroup>
);

export default About;


