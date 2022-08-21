import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Scroller from 'gg-ukit/components/Scroller';

import { RootStore } from 'models/reducers';

import { altIconImgSrc, categoryLink } from 'modules/links';

import 'pages/Main/Categories/categories.less';

const Categories: FC = () => {
    const categories = useSelector((state: RootStore) => state.mainCategories);
    return (
        <ColumnsWrapper>
            <div className="categories-scroller">
                <Scroller>
                    <div className="categories-list">
                        {categories.map(({ id, code, alt_image, seo: { name, keyword } }) => {
                            return (
                                <Column key={id} l={3} m={4} s={3} xs={4}>
                                    <div className="category-content">
                                        <div className="category-icon-wrapper">
                                            <img
                                                height="60"
                                                width="60"
                                                src={altIconImgSrc(alt_image)}
                                                alt={`${name},${keyword}`}
                                            />
                                        </div>
                                        <div className="category-divider" />
                                        <div className="category-title">
                                            <Link type={LinkType.Secondary} href={categoryLink(code)}>
                                                {name}
                                            </Link>
                                        </div>
                                    </div>
                                </Column>
                            );
                        })}
                    </div>
                </Scroller>
            </div>
        </ColumnsWrapper>
    );
};

export default Categories;
