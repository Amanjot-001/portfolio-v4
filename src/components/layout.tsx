import React, { ReactNode } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Nav from "./nav";
import Footer from "./footer";
import Email from "./email";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<StyledContent>
						<Nav />
						<div id="content">
							{children}
							<Email />
							<Footer />
						</div>
					</StyledContent>
				</ThemeProvider>
			</div>
		</>
	);
};

export default Layout;
