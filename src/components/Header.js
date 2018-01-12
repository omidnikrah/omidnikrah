import React from 'react';
import Highlight from 'react-highlight';
import {Link} from 'react-router-dom';
const items = ['About','Skills','Projects'];


const Header = () => {
	return(
		<header id="header">
			<Highlight className='javascript hljs'>
				{`import { `}	
					{
						items.map((item,key) => {
							return <Link to={'/'+item} key={key}>{item + ((items.length != key+1)? ', ':'')}</Link>;
						})
					}
				{` } from './omidnikrah'`}
			</Highlight>
			
		</header>
	);
};


export default Header;