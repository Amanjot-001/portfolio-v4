import React from "react";

const Hero = () => {
	const one = <h1>Hi, my name is</h1>;
	const two = <h2 className="big-heading">Amanjot Singh.</h2>;
	const three = <h3 className="big-heading">I build things for the web.</h3>;
	const four = (
		<>
			<p>
				I'm a final-year Computer Science engineering student with a passion for programming and software development.
			</p>
		</>
	);

	const items = [one, two, three, four];

	return (
		<>
			{items.map((item, i) => (
				<div key={i}>{item}</div>
			))}
		</>
	)
}

export default Hero;
