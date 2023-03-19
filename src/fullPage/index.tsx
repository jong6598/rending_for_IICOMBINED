import { useEffect, useRef, useState } from 'react';
import Main from '../pages/Main';
import GentleMonster from '../pages/GentleMonster';
import Tamburins from '../pages/Tamburins';
import Nudake from '../pages/Nudake';
import Layout from '../layouts';
import Dots from './Dots';

const FullPage = () => {
	const outerDivRef = useRef<HTMLDivElement>(null);
	const [scrollIndex, setScrollIndex] = useState(1);

	const DIVIDER_HEIGHT = 4;

	useEffect(() => {
		const wheelHandler = (e: WheelEvent) => {
			e.preventDefault();
			const { deltaY } = e;
			const { scrollTop } = outerDivRef.current!;
			const pageHeight = window.innerHeight;

			if (deltaY > 0) {
				if (scrollTop >= 0 && scrollTop < pageHeight) {
					outerDivRef.current?.scrollTo({
						top: pageHeight + DIVIDER_HEIGHT,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(2);
				} else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
					outerDivRef.current?.scrollTo({
						top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(3);
				} else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
					outerDivRef.current?.scrollTo({
						top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(4);
				} else {
					outerDivRef.current?.scrollTo({
						top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(4);
				}
			} else {
				if (scrollTop >= 0 && scrollTop < pageHeight) {
					outerDivRef.current?.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(1);
				} else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
					outerDivRef.current?.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(1);
				} else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
					outerDivRef.current?.scrollTo({
						top: pageHeight + DIVIDER_HEIGHT,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(2);
				} else {
					outerDivRef.current?.scrollTo({
						top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
						left: 0,
						behavior: 'smooth',
					});
					setScrollIndex(3);
				}
			}
		};
		const outerDivRefCurrent = outerDivRef.current;

		if (outerDivRefCurrent) {
			outerDivRefCurrent.addEventListener('wheel', wheelHandler);

			return () => {
				outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
			};
		}
	}, []);

	return (
		<div ref={outerDivRef} className="flex h-full flex-col overflow-y-hidden">
			<Layout>
				<Dots scrollIndex={scrollIndex} />
				<Main />
				<div className="h-1 w-full" />
				<GentleMonster />
				<div className="h-1 w-full" />
				<Tamburins />
				<div className="h-1 w-full" />
				<Nudake />
			</Layout>
		</div>
	);
};

export default FullPage;
