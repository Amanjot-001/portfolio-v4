import React from "react";
import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';

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

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {

	const langs = ["Javascript/Typescript", "C/C++", "Golang", "Python"];
	const techs = ["React", "Redux", "Node.js", "Express.js", "MongoDB", "SQL", "Redis", "Docker", "AWS", "Websockets"]
	const extras = ["Git", "Github", "Linux", "Figma", "Pipelines", "Vim", "Distributed Systems", "Operating Systems", "DBMS", "Data Structures and Algorithms"]
	return (
		<>
			<StyledAboutSection id="about">
				<h2 className="numbered-heading">About Me</h2>

				<div className="inner">
					<StyledText>
						<div>
							<p>
								Hello! My name is Amanjot Singh, and I'm a 2025 graduate with a bachelor's degree in Computer Science Engineering. I've always wanted to build things, and that's how my passion for coding developed.
							</p>
							<p>
								So far, I've built many projects that I'm proud of because of the challenges I tackled on my own, such as creating my own <a href="https://vyzon.netlify.app/">programming language</a> to deepen my understanding of programming or building a <a href="https://github.com/Amanjot-001/redis-js">key-value store</a> to explore Redis structures, among others.
							</p>
							<p>
								Beyond that, I love working on new opportunities and solving real-world problems, and I hope to continue doing so throughout my career while seeking exponential growth.
							</p>
							<p>
								Here are few technologies I've been working with recently:
							</p>
						</div>

						<ul className="skills-list">
							{langs.map((skill, i) => <li key={i}>{skill}</li>)}
							{techs.map((skill, i) => <li key={i}>{skill}</li>)}
							{extras.map((skill, i) => <li key={i}>{skill}</li>)}
						</ul>

						<p>
							and much more....
						</p>
					</StyledText>

					<StyledPic>
						<div className="wrapper">
							<StaticImage
								className="img"
								src="../../images/dp.jpg"
								width={500}
								quality={95}
								formats={['auto', 'webp', 'avif', 'jpg']}
								alt="Headshot"
							/>
						</div>
					</StyledPic>
				</div>
			</StyledAboutSection >
		</>
	)
}

export default About;
