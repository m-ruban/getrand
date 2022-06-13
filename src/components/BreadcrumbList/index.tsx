import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Breadcrumbs from 'gg-ukit/components/Breadcrumbs';
import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import { LinkType } from 'gg-ukit/components/Link';

import { RootStore } from 'models/reducers';

import 'components/BreadcrumbList/breadcrumbList.less';

const BreadcrumbList: FC = () => {
    const breadcrumbs = useSelector((state: RootStore) => state.breadcrumbs);
    return (
        <ColumnsWrapper>
            <Column l={12} m={12} s={6} xs={4}>
                <div className="breadcrumb-list">
                    <Breadcrumbs
                        linkType={LinkType.Secondary}
                        links={breadcrumbs.map(({ name, link }) => ({ title: name, href: link }))}
                    />
                </div>
            </Column>
        </ColumnsWrapper>
    );
};

export default BreadcrumbList;
