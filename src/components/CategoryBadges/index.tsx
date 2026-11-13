import React, { FC, memo, useMemo } from 'react';
import classnames from 'classnames';

import Scroller from 'gg-ukit/components/Scroller';

import { Category } from 'models/mainCategories';

import { categoryLink } from 'modules/links';

import 'components/CategoryBadges/categoryBadges.less';

interface CategoryBadgesProps {
    categories: Category[];
    alt?: boolean;
}

const categoryTypeIcons: Record<number, string> = {
    2: 'genre',
    4: 'distribution',
    5: 'mode',
    7: 'platform',
    8: 'other',
    9: 'setting',
};

const categoryTypeOrder: Record<number, number> = {
    7: 0,
    2: 1,
    9: 2,
    5: 3,
    4: 4,
    8: 5,
};

const CategoryBadges: FC<CategoryBadgesProps> = ({ categories, alt }) => {
    const groups = useMemo(() => {
        const grouped = new Map<string, Category[]>();
        const sortedCategories = [...categories].sort(
            (a, b) =>
                (categoryTypeOrder[a.category_type_id] ?? Infinity) -
                (categoryTypeOrder[b.category_type_id] ?? Infinity)
        );
        sortedCategories.forEach((category) => {
            const icon = categoryTypeIcons[category.category_type_id] || 'other';
            const group = grouped.get(icon) || [];
            group.push(category);
            grouped.set(icon, group);
        });
        return Array.from(grouped);
    }, [categories]);

    return (
        <Scroller>
            <div className="category-badges">
                {groups.map(([icon, group]) => (
                    <div className="category-badge-group" key={icon}>
                        <span className={`category-badge-icon category-badge-icon_${icon}`} aria-hidden="true" />
                        {group.map(({ id, code, seo: { name } }) => (
                            <a
                                key={id}
                                className={classnames('category-badge', { 'category-badge_alt': alt })}
                                href={categoryLink(code)}
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </Scroller>
    );
};

export default memo(CategoryBadges);
