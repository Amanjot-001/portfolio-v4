import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					{children}
				</ThemeProvider>
			</div>
		</>
	);
};

export default Layout;
