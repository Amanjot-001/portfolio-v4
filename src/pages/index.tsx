import * as React from "react"
import GlobalStyle from "../styles/global";
import Hero from "../components/sections/hero";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const IndexPage = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Hero />

			</ThemeProvider>
		</>
	)
}

export default IndexPage;
