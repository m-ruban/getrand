import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import ArrowDownAlt2 from 'gg-ukit/components/Icon/ArrowDownAlt2';
import ArrowUpAlt2 from 'gg-ukit/components/Icon/ArrowUpAlt2';
import Link from 'gg-ukit/components/Link';
import Colors from 'gg-ukit/modules/colors';

import { RootStore } from 'models/reducers';

import { articleLink, imgFullSrc } from 'modules/links';

import CategoryBadges from 'components/CategoryBadges';

import 'pages/Main/Announce/announce.less';

const Announce: FC = () => {
    const [showDescription, setShowDescription] = useState<boolean>(false);
    const image = useSelector((state: RootStore) => state.announce.basic_image);
    const name = useSelector((state: RootStore) => state.announce.short_name);
    const keyword = useSelector((state: RootStore) => state.announce.article.seo.keyword);
    const title = useSelector((state: RootStore) => state.announce.short_name);
    const description = useSelector((state: RootStore) => state.announce.short_descr);
    const section = useSelector((state: RootStore) => state.announce.article.article_type_keyword);
    const categories = useSelector((state: RootStore) => state.announce.article.categories);
    return (
        <ColumnsWrapper>
            <Column l={12} m={12} s={6} xs={4}>
                <div className="announce">
                    <div className="announce-content">
                        <div className={classnames('announce-info', { 'announce-info_open': showDescription })}>
                            <div className="announce-title">
                                <div>{title}</div>
                                <div
                                    className="announce-title-icon"
                                    onClick={() => {
                                        setShowDescription(!showDescription);
                                    }}
                                >
                                    {!showDescription && <ArrowDownAlt2 scale={1} color={Colors.Secondary} />}
                                    {showDescription && <ArrowUpAlt2 scale={1} color={Colors.Secondary} />}
                                </div>
                            </div>
                            <div
                                className={classnames('announce-description-and-categories', {
                                    'announce-description-and-categories_show': showDescription,
                                })}
                            >
                                <div className="announce-description">{description}</div>
                                <CategoryBadges categories={categories} alt />
                            </div>
                            <div className="announce-link">
                                <Link href={articleLink(section, keyword)}>Далее</Link>
                            </div>
                            <div className="announce-mobile-link-wrapper">
                                <div className="announce-mobile-link">
                                    <Link href={articleLink(section, keyword)}>Далее</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="announce-img" src={imgFullSrc(keyword, image)} alt={name} />
                </div>
            </Column>
        </ColumnsWrapper>
    );
};

export default Announce;
