import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import config from '../config';

const StyledMenu = styled.div`
	display: none;
`;

const StyledHamburgerButton = styled.button`
	display: none;
`;

const StyledSidebar = styled.aside`
	
`;

const Menu = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const buttonRef = useRef(null);
	const navRef = useRef(null);

	return (
		<StyledMenu>
			<div>
				<StyledHamburgerButton
					onClick={toggleMenu}
					menuOpen={menuOpen}
					ref={buttonRef}
					aria-label="Menu">
					<div className="ham-box">
						<div className="ham-box-inner" />
					</div>
				</StyledHamburgerButton>

				<StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
					<nav ref={navRef}>
						{config.navLinks && (
							<ol>
								{config.navLinks.map((links: { url: string, name: string }, i: number) => (
									<li key={i}>
										<Link to={links.url} onClick={() => setMenuOpen(false)}>
											{links.name}
										</Link>
									</li>
								))}
							</ol>
						)}
					</nav>
				</StyledSidebar>
			</div>
		</StyledMenu>
	)
}

export default Menu;
