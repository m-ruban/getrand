import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';
import CompanySearchItem from 'components/CompanySearchItem';

const CompanyList: FC = () => {
    const companies = useSelector((state: RootStore) => state.companies);
    return (
        <>
            <H2 title="Игровые компании" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {companies.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <CompanySearchItem id={id} {...props} />
                            {index !== companies.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default CompanyList;
