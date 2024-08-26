import React from "react";
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

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
			<StyledHeroSection>
				{items.map((item, i) => (
					<div key={i}>{item}</div>
				))}
			</StyledHeroSection>
		</>
	)
}

export default Hero;
