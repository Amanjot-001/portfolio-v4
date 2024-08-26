import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";

const IndexPage = () => {
	return (
		<>
			<Layout>
				<Hero />
				<About />
			</Layout>
		</>
	)
}

export default IndexPage;
