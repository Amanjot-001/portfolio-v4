import * as React from "react"
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => {
	return (
		<>
			<Layout>
				<StyledMainContainer className="fillHeight">
					<Hero />
					<About />
				</StyledMainContainer>
			</Layout>
		</>
	)
}

export default IndexPage;
