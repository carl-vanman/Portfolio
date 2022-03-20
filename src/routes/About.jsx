import { useState, useEffect } from "react";

const useCounter = (initialValue) => {
	const [count, setCount] = useState(initialValue)

	const onClick = () => {
		setCount( prev => prev +1 )
	}

	useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
	
	return {
			count,
			onClick
		}
}

const About = () => {

	const {count, onClick} = useCounter(0);

	return (
		<main>
			<p>{count}</p>
			<button
				onClick={onClick}
			>klick</button>
			About Page
		</main>
	)
};

export default About