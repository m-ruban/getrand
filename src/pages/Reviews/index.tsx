import React, { ReactElement } from 'react';
import loadable from '@loadable/component';

const Reviews = loadable(() => import('pages/Reviews/Reviews.route'));

const ReviewsRoute = (): ReactElement => <Reviews />;

export default ReviewsRoute;
