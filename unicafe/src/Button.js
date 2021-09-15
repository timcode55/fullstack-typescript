import React from 'react';

const Button = (props) => {
	console.log(props, 'props in Button');
	return <button onClick={() => props.click(props.manipulate)}>{props.text}</button>;
};

export default Button;
