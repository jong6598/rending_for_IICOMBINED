const Tamburins = () => {
	const tamburinsUrl = 'https://www.tamburins.com/';

	return (
		<div className="relative h-screen">
			<img src="tamburins.svg" className="absolute top-0 left-0 z-[-1] h-full w-full object-cover" />

			<div className="absolute bottom-12 left-48 flex h-64 w-[calc(100vw-24rem)] flex-col rounded-lg bg-gray-400 bg-opacity-10 text-white backdrop-blur-lg">
				<div className="absolute bottom-52 ml-3 flex flex-row items-baseline ">
					<p className="mr-5 text-4xl font-bold">Tamburins</p>
					<button
						onClick={() => {
							window.open(tamburinsUrl);
						}}
					>
						자세히 보기
					</button>
				</div>
				<p className="absolute bottom-44 ml-3 text-xl font-semibold">스킨케어, 패션이 되다.</p>
				<div className="absolute bottom-12 ml-3">
					<p>우리는 제품의 본질은 물론, 감각적인 아트 · 아름다움을 지향합니다.</p>
					<p>일상적인 공간이 비일상으로 전환되는 특별한 순간을 탬버린즈와 함께 하세요.</p>
				</div>
			</div>
		</div>
	);
};

export default Tamburins;
