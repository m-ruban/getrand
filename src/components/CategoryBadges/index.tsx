import React, { FC } from 'react';
import classnames from 'classnames';

import Scroller from 'gg-ukit/components/Scroller';

import { Category } from 'models/mainCategories';

import { categoryLink } from 'modules/links';

import 'components/CategoryBadges/categoryBadges.less';

interface CategoryBadgesProps {
    categories: Category[];
    alt?: boolean;
}

const CategoryBadges: FC<CategoryBadgesProps> = ({ categories, alt }) => {
    return (
        <Scroller>
            <div className="category-badges">
                {categories.map(({ id, code, seo: { name } }) => {
                    return (
                        <a
                            key={id}
                            className={classnames('category-badge', { 'category-badge_alt': alt })}
                            href={categoryLink(code)}
                        >
                            {name}
                        </a>
                    );
                })}
            </div>
        </Scroller>
    );
};

export default CategoryBadges;
