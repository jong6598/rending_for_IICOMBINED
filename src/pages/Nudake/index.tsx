const Nudake = () => {
	const nudakeUrl = 'https://www.instagram.com/nu_dake/?hl=ko';

	return (
		<div className="relative h-screen">
			<video
				autoPlay
				muted
				loop
				width="100%"
				height="100%"
				style={{ objectFit: 'cover' }}
				src="videos/nudake.webm"
				className="absolute top-0 left-0 z-[-1] h-full w-full"
			/>

			<div className="absolute bottom-52 left-48 flex flex-row items-baseline">
				<p className="mr-5 rounded-lg text-4xl font-bold text-white backdrop-blur-lg">Nudake</p>
				<button
					className="rounded-lg bg-gray-400 bg-opacity-5 text-white backdrop-blur-lg"
					onClick={() => {
						window.open(nudakeUrl);
					}}
				>
					자세히 보기
				</button>
			</div>
			<p className="absolute bottom-44 left-48 rounded-lg text-xl font-semibold text-white">당신이 보지못한 디저트</p>
			<div className="absolute bottom-20 left-48 text-white">
				<p>일상에서 맞이하는 찰나의 순간, 당신의 눈과 입을 자극시킬 전에 없던 디저트</p>
				<p>디저트로 만들어낸 판타지 세상. 누데이크</p>
			</div>
		</div>
	);
};

export default Nudake;
