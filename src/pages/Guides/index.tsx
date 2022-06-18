import React, { ReactElement } from 'react';
import loadable from '@loadable/component';

const Guides = loadable(() => import('pages/Guides/Guides.route'));

const GuidesRoute = (): ReactElement => <Guides />;

export default GuidesRoute;
