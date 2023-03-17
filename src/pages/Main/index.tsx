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
			<p className=" absolute left-48 bottom-1/4 mb-20 rounded-lg bg-gray-900 bg-opacity-50 text-3xl font-bold text-white backdrop-blur-lg">
				공간의 재해석
			</p>
			<div className="absolute left-48 bottom-1/4 text-white">
				<p className="bg-gray-900 bg-opacity-50 backdrop-blur-lg">
					아이아이컴바인드는 젠틀몬스터, 탬버린즈, 누데이크 3개 브랜드를 통해
				</p>
				<p className="bg-gray-900 bg-opacity-50 backdrop-blur-lg">새롭고 혁신적인 경험을 제공합니다.</p>
			</div>
		</div>
	);
};

export default Main;
