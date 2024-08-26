import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const About = () => {

	const langs = ["Javascript", "Typescript", "C", "C++", "Golang"];
	const techs = ["React", "Redux", "Node.js", "Express.js", "MongoDB", "SQL", "Docker", "AWS"]
	const extras = ["Git", "Github", "Linux", "Figma", "Pipelines", "Vim", "Distributed Systems", "OS", "Dbms"]
	return (
		<>
			<StyledAboutSection id="about">
				<h2 className="numbered-heading">About Me</h2>

				<div className="inner">
					<div>
						Hello! my name is Amanjot Singh and currently I'm pursuing my engineering bachelors in comuter science. I have always wanted to build things and that's how my passion for coding was built.
						Till now I've build many projects which im proud of cause of the challenges i got to tackle on my own such as making my own programming language to learn more about programming or building key value store to understand redis structure, and many more.
						Outside this I love getting to work on new opportunities and real world problems and hope to work on many in my career and seek exponential growth.
					</div>

					<p>Here are few technologies I've been working with recently:</p>
				</div>

				<ul className="skills-list">
					{langs.map((skill, i) => <li key={i}>{skill}</li>)}
				</ul>
				<ul className="skills-list">
					{techs.map((skill, i) => <li key={i}>{skill}</li>)}
				</ul>
				<ul className="skills-list">
					{extras.map((skill, i) => <li key={i}>{skill}</li>)}
				</ul>
			</StyledAboutSection>
		</>
	)
}

export default About;
