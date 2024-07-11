import React, { useContext } from 'react';
import { MyContext } from '../context/mycontext'; // import your context

const MyComponent = () => {
	const [state, setState] = useContext(MyContext);

	return (
		<div>
			<p>{state}</p>
			<button onClick={() => setState('Context API is awesome!')}>
				Change State
			</button>
		</div>
	);
};

export default MyComponent;
