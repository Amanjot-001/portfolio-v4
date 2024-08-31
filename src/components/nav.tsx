import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
import config from '../config';

const Nav = () => {
	const navLinks = config.navLinks;
	return (
		<>
			<ol>
				{navLinks &&
					navLinks.map(({ url, name }, i) => (
						<div key={i} className="fadedown">
							<li key={i}>
								<Link to={url}>{name}</Link>
							</li>
						</div>
					))}
			</ol>
		</>
	)
}

export default Nav;
