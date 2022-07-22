import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import Link from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';

import 'pages/About/about.less';

const Team: FC = () => {
    return (
        <>
            <H2 title="Команда проекта" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                <div className="human">
                    <Column l={3} m={3} s={2} xs={4}>
                        <div className="human-logo-wrapper">
                            <img className="human-logo" src="http://gamespirit.org/image/icon/rb.jpg" alt="rb032960" />
                        </div>
                    </Column>
                    <Column l={5} m={5} s={4} xs={4}>
                        <Paragraph>Михаил</Paragraph>
                        <Paragraph>Ворчу, делаю дизайн, разрабатываю, иногда пишу</Paragraph>
                        <Paragraph>
                            <Link href="/users/DolanDuck/">Материалы</Link>
                        </Paragraph>
                    </Column>
                </div>
                <ArticleDivider />
                <div className="human">
                    <Column l={3} m={3} s={2} xs={4}>
                        <div className="human-logo-wrapper">
                            <img
                                className="human-logo"
                                src="http://gamespirit.org/image/icon/gg.jpg"
                                alt="godlike_goblin"
                            />
                        </div>
                    </Column>
                    <Column l={5} m={5} s={4} xs={4}>
                        <Paragraph>Михаил</Paragraph>
                        <Paragraph>Пишу игровые материалы</Paragraph>
                        <Paragraph>
                            <Link href="/users/Folstaad/">Материалы</Link>
                        </Paragraph>
                    </Column>
                </div>
            </ColumnContainer>
            <Paragraph>* в команду проекта берем только людей с именем &quot;Михаил&quot;</Paragraph>
        </>
    );
};

export default Team;
