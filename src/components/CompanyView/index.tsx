import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import LinkAlt from 'gg-ukit/components/Icon/LinkAlt';
import LocationPinCircle from 'gg-ukit/components/Icon/LocationPinCircle';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { RootStore } from 'models/reducers';

import CreatedDate from 'components/CompanySearchItem/CreatedDate';
import GameSearchItem from 'components/GameSearchItem';
import Keywords from 'components/Keywords';
import TreeElement from 'components/TreeElement';

import 'components/CompanyView/companyView.less';

const CompanyView: FC = () => {
    const { seo, created_iso, location, link, developed_games } = useSelector((state: RootStore) => state.company);
    const { name, render_tree, meta_keyword } = seo;
    // TODO render published_games after merge
    return (
        <div>
            <H2 title={name} line={HeaderLine.TertiaryDimmed} />
            <Paragraph>
                <CreatedDate created_iso={created_iso} />
            </Paragraph>
            {location && (
                <Paragraph>
                    <div className="company-property">
                        <LocationPinCircle color="#738697" />
                        &nbsp;{location}
                    </div>
                </Paragraph>
            )}
            {link && (
                <Paragraph>
                    <div className="company-property">
                        <LinkAlt color="#738697" />
                        &nbsp;
                        <Link type={LinkType.Secondary} href={link}>
                            Оф. сайт
                        </Link>
                    </div>
                </Paragraph>
            )}
            <TreeElement treeElement={render_tree} />
            <Keywords keywords={meta_keyword} />
            {developed_games.length > 0 && (
                <>
                    <H2 title="Разработанные игры" line={HeaderLine.TertiaryDimmed} combineColor />
                    {developed_games.map(({ id, ...gameProps }) => {
                        return <GameSearchItem key={id} id={id} {...gameProps} loading="lazy" />;
                    })}
                </>
            )}
        </div>
    );
};

export default CompanyView;
