import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';
import CompanySearchItem from 'components/CompanySearchItem';
import SectionHeader from 'components/SectionHeader';

const CompanyList: FC = () => {
    const companies = useSelector((state: RootStore) => state.companies);
    return (
        <>
            <SectionHeader title="Игровые компании" combineColor />
            <ColumnContainer>
                {companies.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <CompanySearchItem
                                id={id}
                                {...props}
                                loading={index < 3 ? ImageLoad.Eager : ImageLoad.Lazy}
                            />
                            {index !== companies.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default CompanyList;
