import React, { FC } from 'react';

import Link, { LinkType } from 'gg-ukit/components/Link';

import { ArticleSearch } from 'models/lastReviews';

import { articleLink, GUIDES, imgSrc, REVIEWS } from 'modules/links';

import CategoryBadges from 'components/CategoryBadges';

import 'components/ArticleSidebarItem/articleSidebarItem.less';

interface ArticleSidebarItemProps extends ArticleSearch {
    type: 'review' | 'guide';
}

const ArticleSidebarItem: FC<ArticleSidebarItemProps> = ({
    main_img,
    seo: { name, keyword },
    is_old,
    categories,
    type,
}) => {
    return (
        <div className="article-sidebar-item">
            <div>
                <div className="article-sidebar-item-image-wrapper">
                    <img className="article-sidebar-item-image" src={imgSrc(keyword, main_img, is_old)} alt={name} />
                </div>
            </div>
            <div className="article-sidebar-item-description">
                <div>
                    <Link type={LinkType.Promo} href={articleLink(type === 'review' ? REVIEWS : GUIDES, keyword)}>
                        {name}
                    </Link>
                </div>
                <div className="article-sidebar-item-categories">
                    <CategoryBadges categories={categories} alt />
                </div>
            </div>
        </div>
    );
};

export default ArticleSidebarItem;
