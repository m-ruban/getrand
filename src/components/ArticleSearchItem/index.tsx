import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import { ImageLoad } from 'gg-ukit/components/Image';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { ArticleSearch } from 'models/lastReviews';

import { articleLink, GUIDES, imgSrc, REVIEWS } from 'modules/links';

import CategoryBadges from 'components/CategoryBadges';

import 'components/ArticleSearchItem/articleSearchItem.less';

interface ArticleSearchItemProps extends ArticleSearch {
    type: 'review' | 'guide';
    short?: boolean;
    loading?: ImageLoad;
}

const ArticleSearchItem: FC<ArticleSearchItemProps> = ({
    main_img,
    seo: { name, keyword, descr },
    categories,
    type,
    short,
    is_old,
    loading = ImageLoad.Eager,
}) => {
    return (
        <Column l={short ? 4 : 8} m={short ? 4 : 8} s={short ? 3 : 6} xs={4}>
            <div className="article-search-item">
                <div className="article-search-item-image-wrapper">
                    <a href={articleLink(type === 'review' ? REVIEWS : GUIDES, keyword)}>
                        <img
                            className="article-search-item-image"
                            src={imgSrc(keyword, main_img, is_old)}
                            alt={name}
                            loading={loading}
                        />
                    </a>
                </div>
                <div className="article-search-item-categories">
                    <CategoryBadges categories={categories} />
                </div>
                <div className="article-search-item-title">
                    <Link type={LinkType.Secondary} href={articleLink(type === 'review' ? REVIEWS : GUIDES, keyword)}>
                        {name}
                    </Link>
                </div>
                <Paragraph>{descr}</Paragraph>
            </div>
        </Column>
    );
};

export default ArticleSearchItem;
