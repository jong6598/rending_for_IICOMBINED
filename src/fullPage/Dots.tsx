type Dots = {
	scrollIndex: number;
	outerDivRef: React.RefObject<HTMLDivElement>;
	setScrollIndex: (scrollIndex: number) => void;
};

type Dot = {
	num: number;
	scrollIndex: number;
};

const Dot = ({ num, scrollIndex }: Dot) => {
	return (
		<div
			className={`mr-1 h-4 w-4 rounded-full border border-black ${
				scrollIndex === num ? 'bg-black transition duration-1000 ease-in' : 'border-transparent bg-white transition duration-500'
			}`}
		></div>
	);
};

const Dots = ({ scrollIndex, outerDivRef, setScrollIndex }: Dots) => {
	const pageHeight = window.innerHeight;
	const DIVIDER_HEIGHT = 4;

	const handleClickforPageControl = (pageNumber: number) => {
		if (outerDivRef.current) {
			outerDivRef.current.scrollTo({
				top: (pageHeight + DIVIDER_HEIGHT) * (pageNumber - 1),
				left: 0,
				behavior: 'smooth',
			});
		}
		setScrollIndex(pageNumber);
	};

	return (
		<div className="fixed left-16 top-64 z-10">
			<div className="flex h-40 w-32 flex-col justify-evenly p-1 font-semibold text-white">
				<div
					onClick={() => {
						handleClickforPageControl(1);
					}}
					className={`flex items-center justify-between ${
						scrollIndex === 1 && 'rounded-md bg-red-500 transition duration-1000 ease-in'
					}`}
				>
					<label className="ml-1">Main</label>
					<Dot num={1} scrollIndex={scrollIndex}></Dot>
				</div>
				<div
					onClick={() => {
						handleClickforPageControl(2);
					}}
					className={`flex items-center justify-between ${
						scrollIndex === 2 && 'rounded-md bg-red-500 transition duration-1000 ease-in'
					}`}
				>
					<div className="flex flex-col">
						<label className="ml-1">Gentle</label>
						<label className="ml-1">Monster</label>
					</div>
					<Dot num={2} scrollIndex={scrollIndex}></Dot>
				</div>
				<div
					onClick={() => {
						handleClickforPageControl(3);
					}}
					className={`flex items-center justify-between ${
						scrollIndex === 3 && 'rounded-md bg-red-500 transition duration-1000 ease-in'
					}`}
				>
					<label className="ml-1">Tamburins</label>
					<Dot num={3} scrollIndex={scrollIndex}></Dot>
				</div>
				<div
					onClick={() => {
						handleClickforPageControl(4);
					}}
					className={`flex items-center justify-between ${
						scrollIndex === 4 && 'rounded-md bg-red-500 transition duration-1000 ease-in'
					}`}
				>
					<label className="ml-1">Nudake</label>
					<Dot num={4} scrollIndex={scrollIndex}></Dot>
				</div>
			</div>
		</div>
	);
};

export default Dots;
