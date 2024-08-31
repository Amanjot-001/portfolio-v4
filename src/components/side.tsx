import React, { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

type StyledSideElementProps = {
	orientation: 'left' | 'right';
};

const StyledSideElement = styled.div<StyledSideElementProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface SideProps {
	children: ReactNode;
	orientation: 'left' | 'right';
}

const Side = ({ children, orientation }: SideProps) => {

	return (
		<StyledSideElement orientation={orientation}>
			<TransitionGroup component={null}>
				<CSSTransition classNames='fade' timeout={0}>
					{children}
				</CSSTransition>
			</TransitionGroup>
		</StyledSideElement>
	);
};

export default Side;
