import React from 'react';
import styled from 'styled-components';
import config from '../config';
import { Icon } from './icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
	return (
		<StyledFooter>
			<StyledSocialLinks>
				<ul>
					{config.socialMedia &&
						config.socialMedia.map((socials: { url: string, name: string }, i: number) => (
							<li key={i}>
								<a href={socials.url} aria-label={socials.name} target="_blank" rel="noreferrer">
									<Icon name={socials.name} />
								</a>
							</li>
						))}
				</ul>
			</StyledSocialLinks>

			<StyledCredit tabIndex={-1}>
				<a href="https://www.gatsbyjs.com/" target="_blank">
					<div>Built using Gatsby and React</div>
				</a>
			</StyledCredit>
		</StyledFooter>
	);
};

export default Footer;
