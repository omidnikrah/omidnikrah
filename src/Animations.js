import React from 'react';

import { CSSTransition } from 'react-transition-group';

const Fade = (props) => (
	<CSSTransition
		{...props}
		timeout={1000}
		classNames="fade"
		mountOnEnter={true}
		unmountOnExit={true}
	/>
);

const PageFade = (props) => (
	<CSSTransition 
	  {...props}
	  classNames="fadeTranslate"
	  timeout={1000}
	  mountOnEnter={true}
	  unmountOnExit={true}
	/>
  )
	

export {Fade,PageFade};

