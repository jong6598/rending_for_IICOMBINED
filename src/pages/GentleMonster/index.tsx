const GentleMonster = () => {
	const gentlemonstersUrl = 'https://www.gentlemonster.com/kr/';

	return (
		<div className="relative h-screen">
			<img src="gentlemonster.svg" className="absolute top-0 left-0 z-[-1] h-full w-full object-cover" />

			<div className="absolute bottom-12 left-48 flex h-64 w-[calc(100vw-24rem)] flex-col rounded-lg bg-gray-400 bg-opacity-10 text-white backdrop-blur-lg">
				<div className="absolute bottom-52 ml-3 flex flex-row items-baseline ">
					<p className="mr-5 text-4xl font-bold">Gentle Monster</p>
					<button
						onClick={() => {
							window.open(gentlemonstersUrl);
						}}
					>
						자세히 보기
					</button>
				</div>
				<p className="absolute bottom-44 ml-3 text-xl font-semibold"> 시력, 그 너머의 것</p>
				<div className="absolute bottom-12 ml-3">
					<p>
						젠틀몬스터의 공간과 제품을 활용하여 고객들은 자신만의 세계관을 창조하며, 그 안에서 새로운 가능성을 발견할 수 있습니다.
					</p>
					<p>당신도 지금 바로, 젠틀몬스터의 세계로 들어와보세요.</p>
				</div>
			</div>
		</div>
	);
};

export default GentleMonster;
