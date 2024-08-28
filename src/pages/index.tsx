import * as React from "react"
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Jobs from "../components/sections/jobs";
import Featured from "../components/sections/featured";
import Contact from "../components/sections/contact";

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
					<Jobs />
					<Featured />
					<Contact />
				</StyledMainContainer>
			</Layout>
		</>
	)
}

export default IndexPage;
