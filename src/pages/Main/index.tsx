const Main = () => {
	return (
		<div className="relative h-screen">
			<video
				autoPlay
				muted
				loop
				width="100%"
				height="100%"
				style={{ objectFit: 'cover' }}
				src="videos/iicombined.webm"
				className="absolute top-0 left-0 z-[-1] h-full w-full"
			/>

			<div className="absolute bottom-12 left-48 flex h-64 w-[calc(100vw-24rem)] flex-col rounded-lg bg-gray-400 bg-opacity-10 text-white backdrop-blur-lg">
				<div className="absolute bottom-52 ml-3 flex flex-row items-baseline ">
					<p className="mr-5 text-4xl font-bold">IICOMBINED</p>
				</div>
				<p className="absolute bottom-44 ml-3 text-xl font-semibold">공간의 재해석</p>
				<div className="absolute bottom-12 ml-3">
					<p>젠틀몬스터, 탬버린즈, 누데이크 3개 브랜드를 통해 새롭고 혁신적인 경험을 제공합니다.</p>
					<p>오감을 만족시키는 새로운 경험과 충격, 아이아이컴바인드.</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
