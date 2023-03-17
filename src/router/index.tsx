import { Routes, Route } from 'react-router';

import { ROUTE_PATH } from './routePath';
import { isValidArray } from '../utils/ArrayUtils';
import Main from '../pages/Main';

const routes = [{ id: 1, path: ROUTE_PATH.MAIN, element: <Main /> }];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
