import { useState, useEffect, useCallback } from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

type ScrollDirectionHookOptions = {
	initialDirection?: 'up' | 'down';
	thresholdPixels?: number;
	off?: boolean;
};

const useScrollDirection = ({
	initialDirection = SCROLL_UP,
	thresholdPixels = 0,
	off = false,
}: ScrollDirectionHookOptions = {}) => {
	const [scrollDir, setScrollDir] = useState<'up' | 'down'>(initialDirection);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < thresholdPixels) {
				ticking = false;
				return;
			}

			setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		if (!off) {
			window.addEventListener('scroll', onScroll);
		} else {
			setScrollDir(initialDirection);
		}

		return () => window.removeEventListener('scroll', onScroll);
	}, [initialDirection, thresholdPixels, off]);

	return scrollDir;
};

export default useScrollDirection;
