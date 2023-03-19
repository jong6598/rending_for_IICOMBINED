import { Routes, Route } from 'react-router';

import { ROUTE_PATH } from './routePath';
import { isValidArray } from '../utils/ArrayUtils';
import Main from '../pages/Main';
import GentleMonster from '../pages/GentleMonster';
import Tamburins from '../pages/Tamburins';
import Nudake from '../pages/Nudake';

const routes = [
	{ id: 1, path: ROUTE_PATH.MAIN, element: <Main /> },
	{ id: 2, path: ROUTE_PATH.GENTELMONSTER, element: <GentleMonster /> },
	{ id: 3, path: ROUTE_PATH.TAMBURINS, element: <Tamburins /> },
	{ id: 4, path: ROUTE_PATH.NUDAKE, element: <Nudake /> },
];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
