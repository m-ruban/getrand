import React, { ReactElement } from 'react';
import loadable from '@loadable/component';

const Main = loadable(() => import('pages/Main/Main.route'));

const MainRoute = (): ReactElement => <Main />;

export default MainRoute;
