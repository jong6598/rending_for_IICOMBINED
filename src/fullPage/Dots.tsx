type Dots = {
	scrollIndex: number;
};

type Dot = {
	num: number;
	scrollIndex: number;
};

const Dot = ({ num, scrollIndex }: Dot) => {
	return (
		<div
			className={`h-4 w-4 rounded-full border border-black ${
				scrollIndex === num ? 'bg-black transition duration-1000 ease-in' : 'border-transparent bg-white transition duration-500'
			}`}
		></div>
	);
};

const Dots = ({ scrollIndex }: Dots) => {
	return (
		<div className="to-white-100 fixed left-16 top-64 bg-opacity-20 bg-gradient-to-t from-red-400">
			<div className="flex h-40 w-28 flex-col justify-evenly p-1 font-semibold text-white">
				<div className="flex items-center justify-between ">
					<label>Main</label>
					<Dot num={1} scrollIndex={scrollIndex}></Dot>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<label>Gentle</label>
						<label>Monster</label>
					</div>
					<Dot num={2} scrollIndex={scrollIndex}></Dot>
				</div>
				<div className="flex items-center justify-between align-baseline ">
					<label>Tamburins</label>
					<Dot num={3} scrollIndex={scrollIndex}></Dot>
				</div>
				<div className="flex items-center justify-between align-baseline ">
					<label>Nudake</label>
					<Dot num={4} scrollIndex={scrollIndex}></Dot>
				</div>
			</div>
		</div>
	);
};

export default Dots;
