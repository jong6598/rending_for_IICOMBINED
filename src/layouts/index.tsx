import { PropsWithChildren } from 'react';

import Header from './Header';

const Layout = (props: PropsWithChildren) => {
	return (
		<div className="max-w-screen flex h-screen max-h-screen w-screen flex-col">
			<div className="flex flex-col">
				<Header />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
