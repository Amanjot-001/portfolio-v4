import React from 'react';
import styled from 'styled-components';
import Side from './side';
import config from '../config';
import { Icon } from './icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = () => (
	<Side orientation="left">
		<StyledSocialList>
			{config.socialMedia &&
				config.socialMedia.map((socials: { url: string, name: string }, i: number) => (
					<li key={i}>
						<a href={socials.url} aria-label={socials.name} target="_blank" rel="noreferrer">
							<Icon name={socials.name} />
						</a>
					</li>
				))}
		</StyledSocialList>
	</Side>
);

export default Social;
