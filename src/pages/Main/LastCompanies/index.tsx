import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';
import CompanySearchItem from 'components/CompanySearchItem';

const LastCompanies: FC = () => {
    const lastCompanies = useSelector((state: RootStore) => state.lastCompanies);
    return (
        <>
            <H2 title="Игровые компании" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {lastCompanies.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <CompanySearchItem id={id} {...props} />
                            {index !== lastCompanies.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default LastCompanies;
