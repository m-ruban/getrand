import React, { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chip from 'gg-ukit/components/Chip';
import Column from 'gg-ukit/components/Column';
import { ImageLoad } from 'gg-ukit/components/Image';
import Paragraph from 'gg-ukit/components/Paragraph';

import { RootStore } from 'models/reducers';
import { SearchType } from 'models/searchCriteria';
import { setTypes } from 'models/searchCriteria';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';
import SearchForm from 'components/SearchForm';
import SearchInput from 'components/SearchInput';
import SectionHeader from 'components/SectionHeader';

import 'pages/Search/search-content.less';

const SearchContent: FC = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootStore) => state.metaTags.shortTitle);
    const articles = useSelector((state: RootStore) => state.articles);
    const types = useSelector((state: RootStore) => state.searchCriteria.types);
    return (
        <>
            <SectionHeader title={title} />
            <ColumnContainer>
                <Column l={8} m={8} s={6} xs={4}>
                    <SearchForm>
                        <div className="search-form">
                            <SearchInput />
                        </div>
                        <div className="search-types">
                            <Chip
                                name="type"
                                value="reviews"
                                checked={types.includes(SearchType.Reviews)}
                                onChange={() => {
                                    dispatch(setTypes(SearchType.Reviews));
                                }}
                            >
                                Обзоры
                            </Chip>
                            <Chip
                                name="type"
                                value="walkthrough"
                                checked={types.includes(SearchType.WalkThrough)}
                                onChange={() => {
                                    dispatch(setTypes(SearchType.WalkThrough));
                                }}
                            >
                                Гайды
                            </Chip>
                        </div>
                    </SearchForm>
                </Column>
                <ArticleDivider />
            </ColumnContainer>
            <ColumnContainer>
                {articles.length === 0 && (
                    <Column l={8} m={8} s={6} xs={4}>
                        <Paragraph>По запросу мы ничего не нашли. Попробуйте изменить критерии запроса</Paragraph>
                    </Column>
                )}
                {articles.map(({ id, article_type_keyword: type, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                id={id}
                                type={type == 'walkthrough' ? 'guide' : 'review'}
                                article_type_keyword={type}
                                {...props}
                                loading={index < 3 ? ImageLoad.Eager : ImageLoad.Lazy}
                                short
                            />
                            {index !== articles.length - 1 && <ArticleDivider xsOnly />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default SearchContent;
