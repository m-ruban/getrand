import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Link, { LinkType } from 'gg-ukit/components/Link';

import { RootStore } from 'models/reducers';

import { altIconImgSrc, categoryLink } from 'modules/links';

import 'components/SidebarCategories/sidebarCategories.less';

const SidebarCategories: FC = () => {
    const categories = useSelector((state: RootStore) => state.mainCategories);
    return (
        <div className="sidebar-categories">
            {categories.map(({ id, code, alt_image, articles_count, seo: { name, keyword } }) => {
                return (
                    <div key={id} className="sidebar-category">
                        <div className="sidebar-category-icon-wrapper">
                            <img
                                className="sidebar-category-icon"
                                src={altIconImgSrc(alt_image)}
                                alt={`${name},${keyword}`}
                            />
                        </div>
                        <div className="sidebar-category-link">
                            <Link type={LinkType.Secondary} href={categoryLink(code)}>
                                {name}
                            </Link>
                        </div>
                        <div className="sidebar-category-count">{articles_count}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarCategories;
