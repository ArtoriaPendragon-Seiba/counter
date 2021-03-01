import { useState } from "react";
import './style/Counter.css'
export default function Counter() {
	const [count, setCount] = useState(42);
	const handleIncrease = () => {
		setCount(count + 1);
	};
	return (
		<div className= "counter-container">
			<h2 className="counter">{count}</h2>
			<button onClick={handleIncrease} className="counter-button">
				Click
			</button>
		</div>
	);
}
