import React, { FC } from 'react';
import classnames from 'classnames';

import { Category } from 'models/mainCategories';

import { categoryLink } from 'modules/links';

import 'components/CategoryBadges/сategoryBadges.less';

interface CategoryBadgesProps {
    categories: Category[];
    alt?: boolean;
}

const CategoryBadges: FC<CategoryBadgesProps> = ({ categories, alt }) => {
    return (
        <div className="category-badges-scroller">
            <div className="category-badges">
                {categories.map(({ id, code, seo: { name } }) => {
                    return (
                        <div key={id} className={classnames('category-badge', { 'category-badge_alt': alt })}>
                            <a href={categoryLink(code)}>{name}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryBadges;
