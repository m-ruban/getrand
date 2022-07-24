import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import Link, { LinkType } from 'gg-ukit/components/Link';
import List from 'gg-ukit/components/List';

import { RootStore } from 'models/reducers';

import { categoryLink } from 'modules/links';

import { ListItem } from 'components/TreeElement/BasicTags';

import 'pages/Classifications/classificationList.less';

const ClassificationList: FC = () => {
    const classifications = useSelector((state: RootStore) => state.classifications);
    return (
        <Fragment>
            {classifications.map(({ id, seo: { name }, children }) => {
                if (children.length === 0) {
                    return null;
                }
                return (
                    <div key={id} className="classification">
                        <List key={id}>
                            <H2 title={name} line={HeaderLine.TertiaryDimmed} />
                            {children.map(
                                ({
                                    id,
                                    level,
                                    child: {
                                        seo: { name },
                                        code,
                                    },
                                }) => {
                                    return (
                                        <div key={id} className="classification-category">
                                            <div className={`classification-category-gap-${level}`} />
                                            <ListItem>
                                                <Link type={LinkType.Secondary} href={categoryLink(code)}>
                                                    {name}
                                                </Link>
                                            </ListItem>
                                        </div>
                                    );
                                }
                            )}
                        </List>
                    </div>
                );
            })}
        </Fragment>
    );
};

export default ClassificationList;
